'use client';
import { FieldErrors, useForm } from "react-hook-form";
import { LoginInputs, loginSchema } from "../../validators/login-validator";
import { yupResolver } from "@hookform/resolvers/yup";
import { PiSpinner } from "react-icons/pi";
import { useCubeAcademyLogin } from '../../queries/cubeComponents';
import useToken from "../../hooks/token";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/shared/header";
const Login = () => {
  useEffect(() => {
    localStorage.removeItem('token');
  }, []);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });
  const { setAuthToken } = useToken();
  const { mutateAsync } = useCubeAcademyLogin();

  const onSubmit = async (data: LoginInputs) => {
    try {
      const { data: loginData } = await mutateAsync({
        body: {
          email: data.email,
          password: data.password,
        },
      });
      const authToken = loginData?.authToken;
      if (authToken) {
        setAuthToken(authToken);
        localStorage.setItem('token', authToken);
        navigate('/',{ replace: true }); 
      }
    } catch (err: any) {
      console.log(err.stack)
      setError('root.loginError', {
        message: err.stack?.data?.error || "An Error Occured",
      });
    }
    finally {
      setIsSubmitting(false);
    }
  };
  
  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    handleSubmit(onSubmit)();
  };
  

  const allErrors: FieldErrors<LoginInputs> = Object.entries(errors).reduce(
    (acc, [key, value]) => (key === 'root' ? { ...acc, ...value } : { ...acc, [key]: value }),
    {}
  );

  return (
    <><Header /><div className="flex items-center justify-center bg-gradient-to-r from-lime-300 to-green-500 min-h-screen">
      <div className="bg-white p-6 mobile:p-8 tablet:p-10 rounded-lg shadow-lg max-w-md tablet:max-w-lg w-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xs mobile:text-sm tablet:text-base font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border rounded-md text-xs mobile:text-sm tablet:text-base"
              placeholder="Enter your email"
              {...register('email')} />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-xs mobile:text-sm tablet:text-base font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border rounded-md text-xs mobile:text-sm tablet:text-base"
              placeholder="Enter your password"
              {...register('password')} />
          </div>
          <div className='px-6 tablet:px-12 text-error font-anonymous'>
            {Object.keys(allErrors).length > 0 &&
              Object.values(allErrors).map((error) => (
                <p key={error.message} className='mb-2'>
                  {error.message}
                </p>
              ))}
          </div>
          <button
            onClick={handleLogin}
            className="w-full bg-black text-white py-3 rounded-md font-semibold text-xs mobile:text-sm tablet:text-base flex justify-center items-center"
            disabled={isSubmitting || Object.keys(errors).length > 1 ||
              (Object.keys(errors).length === 1 && !errors.root)}
            type="submit"
          >
            {isSubmitting ? <PiSpinner className='w-6 h-6 text-white animate-spin' /> : 'LOGIN'}
          </button>
          {/* <button
      className="w-full bg-black text-white py-3 rounded-md font-semibold text-xs mobile:text-sm tablet:text-base flex justify-center items-center"
      disabled={isSubmitting || !!Object.keys(allErrors).length}
      type="submit"
    >
      {isSubmitting ? <PiSpinner className='w-6 h-6 text-white animate-spin' /> : 'LOGIN'}
    </button> */}
        </form>
        <div className="flex justify-center mt-4">
          <p className="text-gray-dark text-xs mobile:text-sm tablet:text-base">
            Don’t have an account? <a href="#" className="text-pink">Sign up</a>
          </p>
        </div>
      </div>
    </div></>
  );
};

export default Login;
