import React from 'react';

const OrderSummary = () => {
    return (
        <div>
            <div className="">
                <div className="  text-slate-500 text-lg font-semibold mb-4">Order Summary</div>
                <div className="grid grid-cols-1 gap-y-5">
                    <div className='grid grid-cols-1 gap-y-5'>
                    <div className="flex justify-between items-start">
                        <div className="">
                            <h5 className=" text-slate-700 text-lg font-semibold ">Rent Ready</h5>
                            <p className=" text-slate-500 text-base font-normal">For Landlords & Agents</p>
                        </div>
                        <div className=" text-slate-700 text-base font-semibold ">£74.99</div>
                    </div>
                    <div className="flex justify-between items-start">
                        <div className="">
                            <h5 className=" text-slate-700 text-lg font-semibold ">Rent Ready</h5>
                            <p className=" text-slate-500 text-base font-normal">For Landlords & Agents</p>
                        </div>
                        <div className=" text-slate-700 text-base font-semibold ">£74.99</div>
                    </div>
                    </div>
                    <div className=" w-full h-0.5   bg-[#EAECEE]" />
                    <div className="grid grid-cols-1 gap-y-2">
                        <div className=" flex justify-between items-start">
                            <p className=" text-slate-500 text-base font-normal">Sub-total</p>
                            <p className="text-center  text-slate-700 text-base font-semibold ">£74.99</p>
                        </div>
                        <div className=" flex justify-between items-start">
                            <p className=" text-slate-500 text-base font-normal">Discount</p>
                            <p className="text-center  text-red-600 text-base font-semibold ">- £74.99</p>
                        </div>
                        <div className=" flex justify-between items-start">
                            <p className=" text-slate-500 text-base font-normal">Tax</p>
                            <p className="text-center  text-slate-700 text-base font-semibold ">£74.99</p>
                        </div>
                        <div className=" flex justify-between items-start">
                            <p className=" text-slate-500 text-base font-normal">Shipping</p>
                            <p className="text-center  text-slate-700 text-base font-semibold ">£74.99</p>
                        </div>
                    </div>
                    <div className=" w-full h-0.5   bg-[#EAECEE]" />
                    <div className="flex justify-between items-start">
                        <p className=" text-slate-700 text-xl font-semibold">Total</p>
                        <p className="text-center  text-slate-700 text-xl font-semibold">£74.99</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;