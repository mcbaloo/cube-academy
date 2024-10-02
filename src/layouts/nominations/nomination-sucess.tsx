import Button, { ButtonStyle } from "../../components/shared/button";
import Header from "../../components/shared/header";

const NominationSuccess = () => {
    return (
        <><Header />
         <div className="flex items-center justify-center bg-gradient-to-r from-lime-300 to-green-500 min-h-screen">
        <div className='max-w-screen-tablet bg-white'>
            <img
                src='/success.png'
                width={848}
                height={323.3}
                alt='Team members having fun at the beach' />
            <div className='p-6 tablet:p-8'>
                <h2 className='font-bold text-2xl mt-6 mb-3 text-center'>
                    NOMINATION SUBMITTED
                </h2>
                <p className='flex font-anonymous tablet:w-4/5 text-center mb-10 mt-2 mx-auto h-[250px] tablet:h-[45px]'>
                    Thank you for taking the time to fill out this form! Why not
                    nominate another cube?
                </p>
                <div className='flex fixed bottom-0 left-0 right-0 w-full bg-white shadow-[0px_2px_10px_0px_#1A1A193D] tablet:relative py-5 justify-around tablet:shadow-none px-6 tablet:px-12 tablet:justify-between'>
                <Button
                    to='/nominations'
                    styleType={ButtonStyle.texttransperent}
                    className='w-[223px] h-[50px] border-2 bg-white text-black hidden tablet:inline-flex font-bold mr-4'
                >
                    VIEW NOMINATIONS
                </Button>
                <Button
                    to='/create-nomination'
                    styleType={ButtonStyle.texttransperent}
                    className='w-full mx-6 tablet:w-[223px] h-[50px] border-2 font-bold'
                >
                    CREATE NEW NOMINATION
                </Button>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};

export default NominationSuccess
