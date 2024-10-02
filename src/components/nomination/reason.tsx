import { UseFormRegister } from 'react-hook-form';
import { FormInputs } from '../../validators/nomination-validator';
import ProgressBar from './progressbar';
import LabelWithAsterisk from '../shared/label-with-asterisk-props ';

const Reason = (props: {
    register: UseFormRegister<FormInputs>;
    errorMesssage: string | null;
    nomineeName: string | null;
}) => {
    return (
        <>
            <div>
                <ProgressBar percentage={50} />
                <img
                    className='tablet:px-12 mx-auto'
                    src='/nomination-reason.png'
                    width={848}
                    height={180}
                    alt='Colleagues having conversation about work'
                />
            </div>
            <div className='p-6 pb-28 tablet:px-12 tablet:py-6'>
                <h2 className='font-bold text-2xl mt-6 mb-2'>
                    <>
                        I&apos;D LIKE TO NOMINATE
                        <span className='mx-2 uppercase text-pink'>
                            {props.nomineeName}
                        </span>
                        BECAUSE...
                    </>
                </h2>
                <p className='flex font-anonymous tablet:w-4/5 pb-6'>
                    Please let us know why you think this cube deserves the
                    &apos;cube of the month&apos; title &#127942;&#11088;
                </p>
                <label htmlFor='reason' className='block mb-2 font-bold my-4'>
                <LabelWithAsterisk text='Reasoning' />  
                </label>
                <textarea
                    id='reason'
                    rows={8}
                    className='border border-gray text-black px-1.5 py-3 w-full font-anonymous mb-10'
                    {...props.register('reason')}
                />
                {props.errorMesssage ? (
                    <p className='text-error font-anonymous'>{props.errorMesssage}</p>
                ) : null}
            </div>
        </>
    );
};

export default Reason;
