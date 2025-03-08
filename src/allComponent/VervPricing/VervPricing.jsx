import React from 'react';
import logo from '../../assets/image/logo.png';
import rightMove from '../../assets/image/right-move.png';
import zoopla from '../../assets/image/zoopla.png';
import Image from 'next/image';
import AddtionalServices from './AdditionalServices.json';
import PricingData from './PricingData.json';
import { Check } from 'lucide-react';
const VervPricing = () => {

    return (
        <div>
            <div className='my-12'>
                <div className="w-full bg-[#30455f] ">
                    <div className='lg:w-[1216px] w-5/6 mx-auto  lg:justify-between py-[36px] grid lg:grid-cols-3 grid-cols-1 gap-y-12'>
                        <div className='text-center lg:text-left lg:col-span-2'>
                            <h1 className="text-white lg:text-[40px] text-[28px] font-bold font-['Inter'] leading-[48px] ">Simplified Pricing</h1>
                            <h6 className=" lg:w-3/5 opacity-70 text-white lg:text-[24px] text-[18px] font-semibold font-['Inter'] leading-[33.60px] mt-8 lg:px-0 px-3 " >List your property. Access direct tenants. Transparent pricing, the rest is history.</h6>
                            <div className='mt-9  lg:justify-between lg:inline-flex grid grid-cols-1 gap-y-3'>
                                <button className=" lg:w-auto w-full max-w-[350px] mx-auto  text-white text-lg font-semibold font-['Inter'] px-18 py-2 bg-[#50b533] rounded-[32px] lg:mr-4 mr-0">List for Free</button>
                                <button className=" lg:w-auto w-full max-w-[350px] mx-auto text-[#30455f] text-lg font-semibold font-['Inter'] px-8 py-2 bg-[#FFFFFF] rounded-[32px] ">More Landlord Services</button>
                            </div>
                        </div>
                        <div className='bg-white/10 rounded-2xl lg:col-span-1 flex flex-col justify-center items-center gap-2 inline-flex px-8 py-10 lg:py-0 text-center'>
                            <h3 className="text-white text-[20px] font-semibold font-['Inter'] leading-normal" >Landlords we’ve got you covered.</h3>
                            <h6 className="text-center text-white text-[16px] font-normal font-['Inter'] leading-normal" >No excess agency fees anymore.</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-14 grid grid-cols-1 gap-y-6 lg:w-[1216px] md:w-3/5 w-5/6 mx-auto'>
                {/* Premier Listings */}
                {
                    PricingData.map((data) => <div
                        key={data.id}
                        className={`   ${data.bgClr}  rounded-3xl shadow-custom border border-[#eef1f3]  grid lg:grid-cols-3 grid-cols-1`}>
                        <div className='flex justify-center lg:col-span-1  '>
                            <div className=" grid grid-cols-1 gap-y-5 py-10 ">
                                <div className="grid grid-cols-1 gap-y-5">
                                    <div className="">
                                        <h2 className="text-center text-[#30455f] text-[24px] font-semibold font-['Inter']  mb-3">{data.pricingTitle}</h2>
                                        <p className="text-[#30455f] text-center text-[18px] font-semibold font-['Inter']">For Landlords & Agents</p>
                                    </div>
                                    {data.price ? (<div className="justify-center items-baseline gap-2 inline-flex">
                                        <h1 className="text-center text-[#30455f] text-5xl font-bold font-['Inter'] leading-[57.60px]">{data.price}</h1>
                                        <span className="text-[#30455f] text-lg font-medium font-['Inter']">Inc. VAT</span>
                                    </div>) : (<div className="text-center text-[#a6afbb] text-5xl font-bold font-['Inter'] leading-[57.60px]">ZERO
                                    </div>) }
                                </div>
                                <div className="self-stretch flex-col justify-start items-center gap-2 flex">
                                    <p className="w-[250px] text-center text-[#30455f] text-[14px] font-semibold font-['Inter'] leading-[21px]">
                                    {!data.price?"Looking to List with Verv only?" : "Looking for more exposure? List with Zoopla & Rightmove!"}
                                    </p>
                                    <button className= {`w-auto  py-2 px-3 ${data.buttonColor} rounded-lg justify-center items-center gap-2 inline-flex`}>
                                        <span className={`${data.buttonText} text-[18px] font-semibold font-['Inter']`}>{data.buttonName}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch lg:col-span-2 grid lg:grid-cols-2">
                            <div className="lg:col-span-1 px-8 lg:pr-[143px] pt-6 lg:h-full pb-6 bg-white border-r border-[#30455f]/10 justify-start items-center ">
                                <div className="self-stretch flex-col justify-start items-start gap-4 ">
                                    <h3 className="text-[#30455f] text-lg font-semibold font-['Inter']">{data.advertTitle}:</h3>
                                    <div className="flex-col justify-start items-start gap-4 flex">
                                        <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="relative">
                                                <Check strokeWidth={2.5} className='h-[17px] w-[17px] text-[#FFFFFF] bg-[#50B533] rounded-full p-1' />
                                            </div>
                                            <Image alt="test" className="w-[61px] h-6" src={logo} />
                                        </div>
                                        {(data.advertTitle !== "Active Listing on") && <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="relative">
                                                <Check strokeWidth={2.5} className='h-[17px] w-[17px] text-[#FFFFFF] bg-[#50B533] rounded-full p-1' />
                                            </div>
                                            <Image alt="test" className="w-[132px] h-[24px]" src={zoopla} />
                                        </div>}
                                        {(data.advertTitle !== "Active Listing on") && <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="relative">
                                                <Check strokeWidth={2.5} className='h-[17px] w-[17px] text-[#FFFFFF] bg-[#50B533] rounded-full p-1' />
                                            </div>
                                            <Image alt="test" className="w-[117px] h-[24px]" src={rightMove} />
                                        </div>}
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-1  px-8  py-5 lg:h-full bg-white flex-col justify-start items-start lg:rounded-r-3xl rounded-b-3xl lg:rounded-bl-none rounded-bl-3xl ">
                                <div className="flex-col justify-start items-start gap-4 flex">
                                    <h3 className="text-[#30455f] text-[18px] font-semibold font-['Inter']">What’s included:</h3>
                                    <div className="flex-col justify-start items-start gap-2 flex">
                                        {
                                            data.offers.map((offer, i) => <div key={i} className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                                <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                    <Check strokeWidth={2.5} className='h-[17px] w-[17px] text-[#FFFFFF] bg-[#50B533] rounded-full p-1' />
                                                    <p className="text-[#30455f] text-[14px] font-normal font-['Inter'] leading-[21px]">{offer.item}</p>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                    <button className="h-[33px] py-2 px-6 bg-white rounded-[32px] border border-[#50b533] flex-col justify-center items-center gap-1 flex">
                                        <span className="text-[#50b533] text-sm font-semibold font-['Inter']">Show more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <h2 className="text-center text-[#30455f] text-[32px] font-semibold font-['Inter'] leading-[38.40px] my-12">Additional Services</h2>
            <div className='my-12'>
                <div className='grid lg:grid-cols-3 lg:gap-6 gap-y-4  lg:w-[1216px] md:w-3/5 lg-px-0 px-4 mx-auto'  >
                    {
                        AddtionalServices.map(service => <div key={service.id} className='border border-[#EEF1F3] rounded-lg min-w-[370px]'>
                            <div className='p-5'>
                                <div className='flex justify-between pb-5'>
                                    <h3 className="text-[#30455f] pr-4 text-xl font-semibold font-['Inter'] leading-normal ">{service.title}</h3>
                                    <div className=''>
                                        <h4 className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal" >From</h4>
                                        <h6 className="text-center text-[#50b533] text-2xl font-semibold font-['Inter'] leading-[28.80px]" >{service.price}</h6>
                                    </div>

                                </div>
                                <div className='flex justify-between items-end' >
                                    <a href='#' className="min-w-[230px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex text-white text-lg font-semibold font-['Inter']">Order</a>
                                    <div className='pb-2'>
                                        <a href="#" className="text-[#56677d] text-lg font-medium font-['Inter'] underline">More info</a>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>
    );
};

export default VervPricing;