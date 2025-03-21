import React from 'react';
import AddtionalServices from './AdditionalServices.json';
import PricingSection from '../Shared/PricingSection/PricingSection';
import Service from './Service';

const VervPricing = () => {

    return (
        <div>
            <div className='my-12'>
                <div className="w-full bg-[#30455f] ">
                    <div className='lg:w-[1216px] w-5/6 mx-auto  lg:justify-between py-[36px] grid lg:grid-cols-3 grid-cols-1 gap-y-12'>
                        <div className='text-center lg:text-left lg:col-span-2'>
                            <h1 className="text-white lg:text-[40px] text-[28px] font-bold  leading-[48px] ">Simplified Pricing</h1>
                            <h6 className=" lg:w-3/5 opacity-70 text-white lg:text-[24px] text-[18px] font-semibold  leading-[33.60px] mt-8 lg:px-0 px-3 " >List your property. Access direct tenants. Transparent pricing, the rest is history.</h6>
                            <div className='mt-9  lg:justify-between lg:inline-flex grid grid-cols-1 gap-y-3'>
                                <button className=" lg:w-auto w-full max-w-[350px] mx-auto  text-white text-lg font-semibold  px-18 py-2 bg-[#50b533] rounded-[32px] lg:mr-4 mr-0">List for Free</button>
                                <button className=" lg:w-auto w-full max-w-[350px] mx-auto text-[#30455f] text-lg font-semibold  px-8 py-2 bg-[#FFFFFF] rounded-[32px] ">More Landlord Services</button>
                            </div>
                        </div>
                        <div className='bg-white/10 rounded-2xl lg:col-span-1 flex flex-col justify-center items-center gap-2 inline-flex px-8 py-10 lg:py-0 text-center'>
                            <h3 className="text-white text-[20px] font-semibold  leading-normal" >Landlords we’ve got you covered.</h3>
                            <h6 className="text-center text-white text-[16px] font-normal  leading-normal" >No excess agency fees anymore.</h6>
                        </div>
                    </div>
                </div>
            </div>

            <PricingSection></PricingSection>

            <h2 className="text-center text-[#30455f] text-[32px] font-semibold  leading-[38.40px] my-12">Additional Services</h2>
            <div className='my-12'>
                <div className='grid lg:grid-cols-3 lg:gap-6 gap-y-4  lg:w-[1216px] md:w-3/5 lg-px-0 px-4 mx-auto'  >
                    {
                        AddtionalServices.map(service => <Service
                        key={service.id}
                        service = {service}
                        ></Service>)
                    }

                </div>
            </div>
        </div>
    );
};

export default VervPricing;