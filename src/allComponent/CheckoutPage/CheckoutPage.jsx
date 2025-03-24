"use client"

import React from 'react';

import OrderSummary from './OrderSummary';
import { Check } from 'lucide-react';
import PersonalDetails from './PersonalDetails';
import Link from 'next/link';
import { Elements } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
// import { PaymentProvider } from "../context/PaymentContext";
import PaymentForm from './PaymentForm';
import { usePayment } from "../../context/PaymentContext";
const landlord = {
    name: "Syed Sadman Sakib",
    email: "johndoe@gmail.com",
    phone: "+44 0000 39683"
}
const stripePromise = loadStripe("pk_test_51R6F3JEKOKMzhKNBdfYysjhdmKsAbmyGCkOGJBdWiWS6elMhPPCWR3aiGkwu32ofWytPKhjq72i9xa1LWrojbQ3100HCVnkVTk");

const CheckoutPage = () => {
    const { submitPayment } = usePayment();



    return (
        <div className='lg:w-[1216px] w-94 mx-auto my-8'>
            <h3 className=" text-slate-500 text-2xl font-semibold mb-4 ">Checkout</h3>
            <div className='lg:flex justify-between items-start gap-x-8'>
                    <div className='grid grid-cols-1 gap-y-5 mb-4 lg:mb-0'>
                        <PersonalDetails
                            landlord={landlord}
                        ></PersonalDetails>

                        <div className='bg-[#FCFCFC] shadow-custom p-6 rounded-xl ' >
                            {/* <PaymentForm></PaymentForm> */}
                            <Elements stripe={stripePromise}>
                                
                                    <div className=" ">
                                        <PaymentForm />
                                        
                                    </div>
                                
                            </Elements>
                        </div>

                        <div className='bg-[#FCFCFC] shadow-custom p-6 rounded-xl lg:w-[800px] w-96' >
                            <h4 className='text-slate-500 text-lg font-semibold mb-2' >Cancellation Policy</h4>
                            <p className='text-slate-700 text-lg font-normal mb-2' >At Verv, we understand that plans can change unexpectedly. That’s why we’ve crafted our cancellation policy to provide you with flexibility and peace of mind.</p>
                            <Link href="#" className='text-[#50B533] text-lg font-semibold ' >Terms and Conditions</Link>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 gap-y-5 lg:w-[384px] '>
                        <div className='bg-[#FCFCFC] shadow-custom p-6 rounded-xl ' >
                            <OrderSummary></OrderSummary>
                        </div>
                        <div className='bg-[#FCFCFC] shadow-custom p-6 rounded-xl ' >
                            <div className='flex items-center justify-between gap-x-4' >
                                <Check strokeWidth={2.5} className='h-[28px] w-[40px] text-[#FFFFFF] bg-[#50B533] rounded-full p-1' />
                                <p className=""><span className="text-slate-700 text-[18px] font-normal [##EAECEE]">I agree to Verv’s </span><span className="text-[#50B533] text-[18px] font-semibold [##EAECEE]">Terms and Conditions</span><span className="text-slate-700 text-[18px] font-normal [##EAECEE]"> and </span><span className="text-[#50B533] text-[18px] font-semibold [##EAECEE]">Privacy Policy.</span></p>
                            </div>
                            <button
                                onClick={() => submitPayment && submitPayment()}
                                className={`w-full mt-4 py-4 px-4 bg-[#50B533] rounded-lg justify-center items-center gap-2 inline-flex`}>
                                <span className={`text-white text-[16px] font-semibold `}>Complete Payment</span>
                            </button>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default CheckoutPage;