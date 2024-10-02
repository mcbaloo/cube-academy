import { FaInbox } from 'react-icons/fa';
import Button from '../../components/shared/button';

const EmptyState = () => {
    return (
        <div className='flex flex-col justify-center items-center px-10 py-32 w-full tablet:p-20 tablet:w-[85%] m-auto bg-white'>
            <FaInbox className='h-28 w-28 text-gray mb-14' />
            <span className='font-bold mb-12 text-2xl text-gray-dark text-center'>
                ONCE YOU SUBMIT A NOMINATION, YOU WILL BE ABLE TO VIEW AND EDIT
                IT HERE.
            </span>
           
                <Button
                 to='/create-nomination'
                className='w-full mx-6 tablet:w-[223px] h-[50px] font-bold leading-6' 
                   >
                    CREATE NEW NOMINATION
                </Button>
        </div>
    );
};

export default EmptyState;
