"use client"

import React from 'react';

import OrderSummary from './OrderSummary';
import { Check } from 'lucide-react';
import PaymentCard from './PaymentCard';
const landlord = {
    name: "Syed Sadman Sakib",
    email: "johndoe@gmail.com",
    phone: "+44 0000 39683"
}
const CheckoutPage = () => {

   


    return (
        <div className='lg:w-[1216px] w-94 mx-auto my-8'>
            <h3 className=" text-slate-500 text-2xl font-semibold]">Checkout</h3>
            <form action="">
                <div className='flex justify-between items-start gap-x-8'>
                    <PaymentCard
                    landlord = {landlord}
                    ></PaymentCard>
                    <div className='grid grid-cols-1 gap-y-5 lg:w-[384px] '>
                        <div className='bg-[#FCFCFC] shadow-custom p-6 rounded-xl ' >
                            <OrderSummary></OrderSummary>
                        </div>
                        <div className='bg-[#FCFCFC] shadow-custom p-6 rounded-xl ' >
                            <div className='flex items-center justify-between gap-x-4' >
                               <Check strokeWidth={2.5} className='h-[28px] w-[40px] text-[#FFFFFF] bg-[#50B533] rounded-full p-1' />
                            <p className=""><span className="text-slate-700 text-[18px] font-normal [##EAECEE]">I agree to Verv’s </span><span className="text-[#50B533] text-[18px] font-semibold [##EAECEE]">Terms and Conditions</span><span className="text-slate-700 text-[18px] font-normal [##EAECEE]"> and </span><span className="text-[#50B533] text-[18px] font-semibold [##EAECEE]">Privacy Policy.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default CheckoutPage;