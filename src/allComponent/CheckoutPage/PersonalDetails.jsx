import React from 'react';
import InputField from '../Shared/UI/Form/InputField';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const PersonalDetails = ({ landlord }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(),
    });
    return (
        <div >
            <div className='lg:w-[800px] w-96 bg-[#FCFCFC] shadow-custom p-6 rounded-xl ' >
                <div className='flex justify-between items-center mb-4'>
                    <h3 className='text-slate-500 text-lg font-semibold'>Personal Details</h3>
                    <Button className="bg-gray-100 hover:bg-slate-700 rounded text-slate-700 hover:text-gray-100 text-[18px] font-semibold py-2 px-4">Edit</Button>
                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-y-4 gap-x-4'>
                    <div>
                        <p className='text-slate-500 text-[16px] text-base font-medium mb-2'>Full Name</p>
                        <InputField
                            registerName={`${landlord.name}`}
                            type="text"
                            placeholder={`${landlord.name}`}
                            register={register}
                            disabled={true}
                            errors={errors}
                            className="w-full "
                        />
                    </div>
                    <div>
                        <p className='text-slate-500 text-[16px] text-base font-medium mb-2'>Email address</p>
                        <InputField
                            registerName={`${landlord.email}`}
                            type="email"
                            placeholder={`${landlord.email}`}
                            disabled={true}
                            register={register}
                            errors={errors}
                            className="w-full "
                        />
                    </div>
                    <div>
                        <p className='text-slate-500 text-[16px] text-base font-medium mb-2'>Phone number</p>
                        <InputField
                            registerName={`${landlord.phone}`}
                            type="text"
                            placeholder={`${landlord.phone}`}
                            register={register}
                            disabled={true}
                            errors={errors}
                            className="w-full "
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetails;