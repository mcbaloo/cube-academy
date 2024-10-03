import { useEffect, useLayoutEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useCubeAcademyCreateNomination, useCubeAcademyGetNominationById, useCubeAcademyUpdateNomination } from '../../queries/cubeComponents';
import { FormInputs, nominationSchema } from '../../validators/nomination-validator';
import { processFromString, processString } from '../../utils/nomination-util';
import Header from '../../components/shared/header';
import Modal from '../../components/shared/modal';
import Button, { ButtonStyle } from '../../components/shared/button';
import Step from '../../components/nomination/Step';
import useToken from '../../hooks/token';
import { PiSpinner } from 'react-icons/pi';
import clsx from 'clsx';

const NomineeSelection = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [isModalOpen, setModalToggle] = useState(false);
    const [searchParams] = useSearchParams();
    const { authToken } = useToken();
    const searchId = searchParams.get('id');
    const isSubmissionStep = step === 3;
    const { data: nominationData } = useCubeAcademyGetNominationById({
        pathParams: { nominationId: searchId || '' },
    });

    const { register, handleSubmit, formState: { isSubmitting, errors }, setError, setValue, getValues } = useForm<FormInputs>({
        resolver: yupResolver(nominationSchema),
    });

    const { nominee_id, process, reason } = nominationData?.data ?? {};
  
    const { mutateAsync: createNominationAsync } = useCubeAcademyCreateNomination();
    const { mutateAsync: updateNominationAsync } = useCubeAcademyUpdateNomination();

    useLayoutEffect(() => {
        if (!authToken) navigate('/login');
    }, [authToken, navigate]);

    useEffect(() => {
        if (searchId && nominee_id && process && reason) {
            setValue('nomineeId', nominee_id);
            setValue('process', processFromString(process));
            setValue('reason', reason);
        }
    }, [searchId, nominee_id, process, reason, setValue]);

    const handleModalToggle = (state: boolean) => setModalToggle(state);
    
    const handleBack = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        if (step > 0) setStep(prev => prev - 1);
        else handleModalToggle(true);
    };

    const handleNext: SubmitHandler<FormInputs> = async (data) => {
        const nominationPayload = {
            nominee_id: data.nomineeId,
            reason: data.reason,
            process: processString(Number(data.process)),
        };

        try {
            if (searchId) {
                await updateNominationAsync({ pathParams: { nominationId: searchId }, body: nominationPayload });
            } else {
                await createNominationAsync({ body: nominationPayload });
            }
            navigate('/nomination-success');
        } catch (error: any) {
            setError('root.createNominationErr', { message: error.message });
        }
    };

    const handleNextStep = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (step === 3) handleSubmit(handleNext)();
        else setStep(prev => prev + 1);
    };

    const allErrors = Object.entries(errors).reduce((acc, [key, value]) => ({
        ...acc,
        ...(key === 'root' ? { ...value } : { [key]: value }),
    }), {});

    return (
        <>
            <Header />
            <div className="flex items-center justify-center bg-gradient-to-r from-lime-300 to-green-500 min-h-screen">
                <div className="max-w-screen-tablet bg-white">
                    <form>
                        <Step step={step} register={register} errors={allErrors} setStep={setStep} formData={getValues()} />
                        <div className="flex fixed bottom-0 left-0 right-0 w-full bg-white shadow-[0px_2px_10px_0px_#1A1A193D] tablet:relative py-5 justify-around tablet:shadow-none px-6 tablet:px-12 tablet:justify-between">
                            <button onClick={handleBack} 
                             className={clsx(
                                'inline-flex items-center justify-center bg-white text-sm leading-6 border-2 border-black text-black hover:border-pink hover:bg-gray-50 hover:shadow-[0px_1px_10px_0px_#1A1A1914] w-[104px] h-[50px] border-2',
                                isSubmissionStep && 'tablet:hidden'
                            )}>
                                BACK
                            </button>
                            <Button
                                to="#"
                                className="w-[223px] h-[50px] border-2"
                                onClick={handleNextStep}
                                disabled={step === 3 && (isSubmitting || Object.keys(errors).length > 1 || (Object.keys(errors).length === 1 && !errors.root))}
                            >
                                {step === 3 ? (
                                    isSubmitting ? <PiSpinner className="h-6 w-6 text-black animate-spin" /> : 'SUBMIT'
                                ) : 'NEXT'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

            {isModalOpen && (
                <Modal>
                    <h2 className="text-lg font-bold leading-[48px] mb-2 px-6">ARE YOU SURE?</h2>
                    <span className="font-anonymous leading-[30px] mb-12 px-6">If you leave this page, you will lose any progress made.</span>
                    <div className="flex justify-between py-5">
                        <Button to="/" styleType={ButtonStyle.texttransperent} className="w-full mx-6 tablet:w-[223px] h-[50px] border-2 font-bold">Yes, Leave Page</Button>
                        <Button to="#" onClick={() => handleModalToggle(false)} styleType={ButtonStyle.texttransperent} className="w-full mx-6 tablet:w-[223px] h-[50px] border-2 font-bold">Cancel</Button>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default NomineeSelection;
