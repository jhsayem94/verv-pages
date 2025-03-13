import React from 'react';
import line1 from '../../assets/line/left2right.png';
import line2 from '../../assets/line/right2left.png';
import Image from 'next/image';

const RentalProcess = () => {
    return (
        <div>
            <div className='bg-[#314660] flex justify-center py-11'>
                <div className='grid grid-cols-1 justify-center gap-y-4'>
                <h4 className='w-3/5 p-2 mx-auto bg-white/10 rounded-[32px] text-center text-white text-[18px] font-semibold ' >6 bed, 3 bath house</h4>
                <h1 className="justify-start text-white text-[40px] font-bold  leading-[48px]">Start the Rental Process</h1>
                </div>
            </div>
            <div className='lg:w-[1216px] w-96 mx-auto '>
                <div className='lg:w-[1094px] w-full mx-auto my-20 grid grid-cols-1 gap-y-7 relative' >
                    <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-17 gap-y-7'>
                        <div className='grid grid-cols-1 content-start'>
                            <h6 className='w-[64px] h-[64px] mx-auto py-3 text-center bg-[#314660] rounded-tl-lg rounded-tr-xl rounded-br-xl text-white font-semibold  text-[30px] mb-7' >1</h6>
                            <h4 className="text-center justify-start text-[#314660] text-xl font-semibold  leading-normal">Tenant Referencing</h4>
                            <p className="self-stretch text-center justify-start text-[#56677D] text-[18px] font-normal  leading-relaxed">We’ll begin by verifying key details like your income, current status, and other necessary information. As part of this, a credit check might be carried out to ensure everything aligns. It’s a quick step toward securing your new home.</p>

                        </div>
                        <div className='grid grid-cols-1 content-start'>
                            <h6 className='w-[64px] h-[64px] mx-auto py-3 text-center bg-[#314660] rounded-tl-lg rounded-tr-xl rounded-br-xl text-white font-semibold text-[30px] mb-7' >2</h6>
                            <h4 className="text-center justify-start text-[#314660] text-xl font-semibold  leading-normal mb-2">Electronic Agreement Signing</h4>
                            <p className="self-stretch text-center justify-start text-[#56677D] text-[18px] font-normal  leading-relaxed">Once we've sorted everything out, you'll be able to read and sign the tenancy agreement on your phone or laptop.</p>

                        </div>
                        <div className='grid grid-cols-1 content-start'>
                            <h6 className='w-[64px] h-[64px] mx-auto py-3 text-center bg-[#314660] rounded-tl-lg rounded-tr-xl rounded-br-xl text-white font-semibold text-[30px] mb-7' >3</h6>
                            <h4 className="text-center justify-start text-[#314660] text-xl font-semibold  leading-normal mb-2">Move-in Payments</h4>
                            <p className="self-stretch text-center justify-start text-[#56677D] text-[18px] font-normal  leading-relaxed">It’s time to get ready for a hassle-free by completing the initial rent and deposit payment. Don't forget your holding deposit will be deducted from this total.</p>

                        </div>                       
                    </div>
                    <div className='absolute -top-8 left-55 lg:block hidden'>
                        <Image src={line2} ></Image>
                    </div>
                    <div className='absolute top-12 right-58 lg:block hidden'>
                        <Image src={line1} ></Image>
                    </div>
                    <div className="w-[800px] mx-auto h-0 opacity-10  outline-[1.50px] outline-offset-[-0.75px] outline-slate-700"></div>
                    <div className="inline-flex flex-col justify-start items-center gap-8">
    <div className="self-stretch text-center justify-start text-slate-700 text-3xl font-semibold  leading-10">Our Rental Guide</div>
    <div className="flex flex-col justify-start items-center gap-6">
        <div className="lg:w-[750px] text-center justify-start text-slate-700 text-lg font-normal  leading-relaxed">Secure your chosen property by making a holding deposit. This step ensures the home is reserved for you while we complete your reference checks. Plus, it simplifies the move-in process, as the deposit is applied towards your first month's rent.</div>
        <div className="w-80 text-center justify-start"><span class="text-slate-700 text-lg font-medium  leading-relaxed">For more information on our holding deposit policy, click </span><span class="text-[#50B533] text-lg font-bold  underline leading-relaxed">here</span></div>
    </div>
    <button className='w-auto  py-4 px-13 bg-[#50B533] rounded-full justify-center items-center gap-2 inline-flex'>
                            <span className=" text-white text-[18px] font-semibold ">Continue</span>
                        </button>
</div>
                </div>
            </div>
            
        </div>
    );
};

export default RentalProcess;