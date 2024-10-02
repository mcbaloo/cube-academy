'use client';

import { Dispatch, SetStateAction } from 'react';
import { UseFormRegister, FieldErrors} from 'react-hook-form';
import { useCubeAcademyRetrieveNomineeList } from '../../queries/cubeComponents';
import { FormInputs } from '../../validators/nomination-validator';
import Overview from './overview';
import Reason from './reason';
import ProcessFeedback from './progress-feedback';
import SelectionTab from './selection';

export type SelectOptionType = {
    id?: string;
    name?: string;
};

const Step = (props: {
    step: number;
    register: UseFormRegister<FormInputs>;
    errors: FieldErrors<FormInputs>;
    setStep: Dispatch<SetStateAction<number>>;
    formData: FormInputs;
}) => {
    const { step, register, errors, setStep, formData } = props;

    const { data } = useCubeAcademyRetrieveNomineeList({});

    const options: SelectOptionType[] =
        data?.data?.map(({ nominee_id, first_name, last_name }) => ({
            id: nominee_id,
            name: first_name && last_name ? `${first_name} ${last_name}` : '',
        })) ?? [];

    const { first_name, last_name } =
        data?.data?.find(
            ({ nominee_id }) => nominee_id === props.formData.nomineeId
        ) ?? {};
    const nomineeName =
        first_name && last_name ? `${first_name} ${last_name}` : '';

    switch (step) {
        case 0:
            return (
                <SelectionTab
                    register={register}
                    errMsg={errors.nomineeId?.message ?? null}
                    options={options}
                />
            );
        case 1:
            return (
                <Reason
                    register={register}
                    errorMesssage={errors.reason?.message ?? null}
                    nomineeName={nomineeName}
                />
            );
        case 2:
            return (
                <ProcessFeedback
                    register={register}
                    errMsg={errors.process?.message ?? null}
                />
            );
        case 3:
            return (
                <Overview
                    errors={errors}
                    setStep={setStep}
                    nomineeName={nomineeName}
                    formData={formData}
                />
            );
        default:
            return (
                <SelectionTab
                    register={register}
                    errMsg={errors.nomineeId?.message ?? null}
                    options={options}
                />
            );
    }
};

export default Step;
