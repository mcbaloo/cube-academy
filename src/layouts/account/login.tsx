const Login = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-lime-300 to-green-500">
      <div className="bg-white p-6 mobile:p-8 tablet:p-10 rounded-lg shadow-lg max-w-md tablet:max-w-lg w-full">
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xs mobile:text-sm tablet:text-base font-semibold mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full p-3 border rounded-md text-xs mobile:text-sm tablet:text-base" 
              placeholder="Enter your email" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-xs mobile:text-sm tablet:text-base font-semibold mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              className="w-full p-3 border rounded-md text-xs mobile:text-sm tablet:text-base" 
              placeholder="Enter your password" 
            />
          </div>
          <button className="w-full bg-black text-white py-3 rounded-md font-semibold text-xs mobile:text-sm tablet:text-base">LOGIN</button>
        </form>
        <div className="flex justify-center mt-4">
          <p className="text-gray-dark text-xs mobile:text-sm tablet:text-base">
            Don’t have an account? <a href="#" className="text-pink">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
