import { UseFormRegister } from 'react-hook-form';
import clsx from 'clsx';
import { SelectOptionType } from './Step';
import ProgressBar from './progressbar';
import { FormInputs } from '../../validators/nomination-validator';
import LabelWithAsterisk from '../shared/label-with-asterisk-props ';

const SelectionTab = (props: {
    register: UseFormRegister<FormInputs>;
    errMsg: string | null;
    options: (SelectOptionType | undefined)[];
}) => {
    return (
        <>
            <div>
                <ProgressBar percentage={25} />
                <img
                    className='mx-auto tablet:px-8'
                    src='/nominee-selection.png'
                    width={848}
                    height={407.04}
                    alt='Two colleagues'
                />
            </div>
            <div className='p-6 pb-28 tablet:px-12 tablet:py-6'>
                <h2 className='font-bold text-2xl mt-6 mb-2'>
                    I&apos;D LIKE TO NOMINATE...
                </h2>
                <p className='flex font-anonymous tablet:w-4/5 pb-6'>
                    Please select a cube who you feel has done something
                    honourable this month or just all round has a great work
                    ethic.
                </p>
                <label htmlFor='nominees' className='block mb-2 font-bold my-4'>
                <LabelWithAsterisk text='Cube&apos;s name' />  
                </label>
                <select
                    id='nominees'
                    className={clsx(
                        'w-full border text-black px-1.5 py-3 tablet:w-[55%] font-anonymous mb-10',
                        props.errMsg ? 'border-error' : 'border-gray'
                    )}
                    {...props.register('nomineeId')}
                >
                    <option value=''>Select Option</option>
                    {props.options.map((option) =>
                        option ? (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ) : null
                    )}
                </select>
                {props.errMsg ? (
                    <p className='text-error font-anonymous'>{props.errMsg}</p>
                ) : null}
            </div>
        </>
    );
};

export default SelectionTab;
