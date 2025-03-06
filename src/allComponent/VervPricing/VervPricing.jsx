import React from 'react';

import circle from '../../assets/image/check-circle.png';
import logo from '../../assets/image/logo.png';
import rightMove from '../../assets/image/right-move.png';
import zoopla from '../../assets/image/zoopla.png';
import Image from 'next/image';
const VervPricing = () => {
    const AddtionalServices = [
        {
            id: 1,
            title: 'Tenant Referencing',
            price: 19.99
        },
        {
            id: 2,
            title: 'Rent Collection',
            price: 39.99
        },
        {
            id: 3,
            title: 'Gas Safety Certificate (CP12)',
            price: 54.99
        },
        {
            id: 4,
            title: 'Energy Performance Certificate (EPC)',
            price: 85.99
        },
        {
            id: 9,
            title: 'Electrical Safety Certificate (EICR)',
            price: 75.99
        },
        {
            id: 5,
            title: 'Inventory & Check-In/Out',
            price: 95.99
        },
        {
            id: 6,
            title: 'Pro Photos',
            price: 25.99
        },
        {
            id: 7,
            title: 'Floor Plans',
            price: 9.99
        },
        {
            id: 8,
            title: 'Accompanied Viewings Service',
            price: 29.99
        }

    ]
        return (
            <div>
                <div className='my-12'>
                    <div className="w-full bg-[#30455f] ">
                        <div className='lg:w-[1216px] w-5/6 mx-auto lg:flex lg:justify-between py-[36px] grid grid-cols-1 gap-y-12'>
                            <div className='text-center lg:text-left'>
                                <h1 className="text-white text-[40px] font-bold font-['Inter'] leading-[48px] ">Simplified Pricing</h1>
                                <h6 className=" lg:w-3/5 opacity-70 text-white text-xl font-semibold font-['Inter'] leading-[33.60px] mt-4 lg:px-0 px-3 " >List your property. Access direct tenants. Transparent pricing, the rest is history.</h6>
                                <div className='mt-4 lg:w-[540px] lg:justify-between lg:inline-flex grid grid-cols-1 gap-y-3'>
                                    <button className=" lg:w-auto w-full max-w-[350px] mx-auto  text-white text-lg font-semibold font-['Inter'] px-18 py-2 bg-[#50b533] rounded-[32px] ">List for Free</button>
                                    <button className=" lg:w-auto w-full max-w-[350px] mx-auto text-[#30455f] text-lg font-semibold font-['Inter'] px-8 py-2 bg-[#FFFFFF] rounded-[32px] ">More Landlord Services</button>
                                </div>
                            </div>
                            <div className='bg-white/10 rounded-2xl flex-col justify-center items-center gap-2 inline-flex px-8 py-10 lg:py-0 text-center lg:text-left'>
                                <h3 className="text-white text-xl font-semibold font-['Inter'] leading-normal" >Landlords we’ve got you covered.</h3>
                                <h6 className="text-center text-white text-base font-normal font-['Inter'] leading-normal" >No excess agency fees anymore.</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-12'>
                    {/* Premier Listings */}
                    <div className=" lg:w-[1216px] md:w-3/5 w-5/6 mx-auto  bg-[#F5F5F5] rounded-3xl shadow-custom border border-[#eef1f3]  lg:flex lg:justify-end lg:items-center lg:gap-[76px]">
                        <div className='flex justify-center   lg:pl-0'>
                            <div className="  self-stretch flex-col justify-center items-center gap-6 inline-flex py-6  ">
                                <div className="flex-col lg:justify-start items-center gap-6 inline-flex">
                                    <div className="h-[59px] flex-col justify-start items-center gap-2 ">
                                        <h2 className="text-center text-[#30455f] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Listing Only</h2>
                                        <p className="text-[#30455f] text-lg font-semibold font-['Inter']">For Landlords & Agents</p>
                                    </div>
                                    <div className="text-center text-[#a6afbb] text-5xl font-bold font-['Inter'] leading-[57.60px]">ZERO
                                    </div>
                                </div>
                                <div className="self-stretch  grid   content-between  gap-2 flex">
                                    <h6 className="text-center text-[#30455f] text-sm font-semibold font-['Inter'] leading-[21px]">Looking to List with Verv only?</h6>
                                    <button className="px-8 py-2 bg-white rounded-lg border border-[#ced3d9] text-[#30455f] text-lg font-semibold font-['Inter']">Add Listing Now for Free
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-end items-start lg:flex">
                            <div className="pl-8 lg:pr-[143px] pt-6 lg:h-full pb-6 bg-white border-r border-[#30455f]/10 justify-start items-center ">
                                <div className="self-stretch flex-col justify-start items-start gap-4 ">
                                    <h3 className="text-[#30455f] text-lg font-semibold font-['Inter'] w-[201px] ">Active Listings on:</h3>
                                    <div className="flex-col justify-start items-start gap-4 flex">
                                        <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="relative">
                                                <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <Image className="w-[61px] h-6" src={logo} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" h-[318px] px-8 lg:pr-[143px] py-6 lg:h-full bg-white flex-col justify-start items-start lg:rounded-r-3xl rounded-b-3xl lg:rounded-bl-none rounded-bl-3xl ">
                                <div className="flex-col justify-start items-start gap-4 flex">
                                    <h3 className="text-[#30455f] text-lg font-semibold font-['Inter']">What’s included:</h3>
                                    <div className="flex-col justify-start items-start gap-2 flex">
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Listings on multiple platforms</p>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Message prospective tenants</p>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Arrange viewings</p>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Active listings for 3 months</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="h-[33px] py-2 px-6 bg-white rounded-[32px] border border-[#50b533] flex-col justify-center items-center gap-1 flex">
                                        <span className="text-[#50b533] text-sm font-semibold font-['Inter']">Show more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-12'>
                    {/* Premier Listings */}
                    <div className=" lg:w-[1216px] md:w-3/5 w-5/6 mx-auto  bg-[#faf4ff] rounded-3xl shadow-custom border border-[#eef1f3]  lg:flex lg:justify-end lg:items-center lg:gap-[86px]">
                        <div className='flex justify-center   lg:pl-0 '>
                            <div className="  self-stretch flex-col justify-center items-center gap-6 inline-flex py-6 ">
                                <div className="flex-col lg:justify-start items-center gap-6 inline-flex">
                                    <div className="h-[59px] flex-col justify-start items-center gap-2 ">
                                        <h2 className="text-center text-[#30455f] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Premier Listings</h2>
                                        <p className="text-[#30455f] text-lg font-semibold font-['Inter']">For Landlords & Agents</p>
                                    </div>
                                    <div className="justify-center items-baseline gap-2 inline-flex">
                                        <h1 className="text-center text-[#30455f] text-5xl font-bold font-['Inter'] leading-[57.60px]">£54.99</h1>
                                        <span className="text-[#30455f] text-lg font-medium font-['Inter']">Inc. VAT</span>
                                    </div>
                                </div>
                                <div className="self-stretch h-[98px] flex-col justify-start items-center gap-2 flex">
                                    <p className="text-center text-[#30455f] text-sm font-semibold font-['Inter'] leading-[21px]">Looking for more exposure? List with<br />Zoopla & Rightmove!</p>
                                    <button className="w-[200px] h-12 p-2 bg-[#30455f] rounded-lg justify-center items-center gap-2 inline-flex">
                                        <span className="text-white text-lg font-semibold font-['Inter']">Add Listing Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-end items-start lg:flex">
                            <div className="pl-8 lg:pr-[143px] pt-6 lg:h-full pb-6 bg-white border-r border-[#30455f]/10 justify-start items-center ">
                                <div className="self-stretch flex-col justify-start items-start gap-4 ">
                                    <h3 className="text-[#30455f] text-lg font-semibold font-['Inter']">3 Months Adverting on:</h3>
                                    <div className="flex-col justify-start items-start gap-4 flex">
                                        <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="relative">
                                                <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <Image className="w-[61px] h-6" src={logo} />
                                        </div>
                                        <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="relative">
                                                <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <Image className="w-[132px] h-[24px]" src={zoopla} />
                                        </div>
                                        <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="relative">
                                                <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <Image className="w-[117px] h-[24px]" src={rightMove} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" h-[318px] px-8 lg:pr-[143px] py-6 lg:h-full bg-white flex-col justify-start items-start lg:rounded-r-3xl rounded-b-3xl lg:rounded-bl-none rounded-bl-3xl ">
                                <div className="flex-col justify-start items-start gap-4 flex">
                                    <h3 className="text-[#30455f] text-lg font-semibold font-['Inter']">What’s included:</h3>
                                    <div className="flex-col justify-start items-start gap-2 flex">
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Listings on multiple platforms</p>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Message prospective tenants</p>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Arrange viewings</p>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Active listings for 3 months</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="h-[33px] py-2 px-6 bg-white rounded-[32px] border border-[#50b533] flex-col justify-center items-center gap-1 flex">
                                        <span className="text-[#50b533] text-sm font-semibold font-['Inter']">Show more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
    
    
    
                    </div>
                </div>
                <div className='my-12'>
                    {/* Rent Ready */}
                    <div className=" lg:w-[1216px] md:w-3/5 w-5/6 mx-auto  bg-[#eef8eb] rounded-3xl shadow-custom border border-[#eef1f3]  lg:flex lg:justify-end lg:items-center lg:gap-[86px]">
                        <div className='flex justify-center  '>
                            <div className="  self-stretch flex-col justify-center items-center gap-6 inline-flex py-6">
                                <div className="flex-col lg:justify-start items-center gap-6 inline-flex">
                                    <div className="h-[59px] flex-col justify-start items-center gap-2 ">
                                        <h2 className="text-center text-[#30455f] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Rent Ready</h2>
                                        <p className="text-[#30455f] text-lg font-semibold font-['Inter']">For Landlords & Agents</p>
                                    </div>
                                    <div className="justify-center items-baseline gap-2 inline-flex">
                                        <h1 className="text-center text-[#30455f] text-5xl font-bold font-['Inter'] leading-[57.60px]">£54.99</h1>
                                        <span className="text-[#30455f] text-lg font-medium font-['Inter']">Inc. VAT</span>
                                    </div>
                                </div>
                                <div className="self-stretch h-[98px] flex-col justify-start items-center gap-2 flex">
                                    <p className="text-center text-[#30455f] text-sm font-semibold font-['Inter'] leading-[21px]">Looking for more exposure? List with<br />Zoopla & Rightmove!</p>
                                    <button className="w-[200px] h-12 p-2 bg-[#50b533] rounded-lg justify-center items-center gap-2 inline-flex">
                                        <span className="text-white text-lg font-semibold font-['Inter']">Add Listing Now</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-end items-start lg:flex ">
                            <div className="pl-8 lg:pr-[143px] pt-6 lg:h-full pb-6 bg-white border-r border-[#30455f]/10 justify-start items-center ">
                                <div className="self-stretch flex-col justify-start items-start gap-4 ">
                                    <h3 className="text-[#30455f] text-lg font-semibold font-['Inter']">3 Months Adverting on:</h3>
                                    <div className="flex-col justify-start items-start gap-4 flex">
                                        <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="relative">
                                                <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <Image className="w-[61px] h-6" src={logo} />
                                        </div>
                                        <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="relative">
                                                <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <Image className="w-[132px] h-[24px]" src={zoopla} />
                                        </div>
                                        <div className="justify-center items-center gap-2 inline-flex">
                                            <div className="relative">
                                                <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                            </div>
                                            <Image className="w-[117px] h-[24px]" src={rightMove} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" h-[318px] px-8 lg:pr-[143px] py-6 lg:h-full bg-white flex-col justify-start items-start lg:rounded-r-3xl rounded-b-3xl lg:rounded-bl-none rounded-bl-3xl">
                                <div className="flex-col justify-start items-start gap-4 flex">
                                    <h3 className="text-[#30455f] text-lg font-semibold font-['Inter']">What’s included:</h3>
                                    <div className="flex-col justify-start items-start gap-2 flex">
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Listings on multiple platforms</p>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Message prospective tenants</p>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Arrange viewings</p>
                                            </div>
                                        </div>
                                        <div className="p-2 bg-[#eef1f3] rounded-[32px] flex-col justify-start items-start gap-1 flex">
                                            <div className="self-stretch justify-start items-center gap-1 inline-flex">
                                                <div className="relative">
                                                    <Image src={circle} alt="" className='h-[20px] w-[20px]' />
                                                </div>
                                                <p className="text-[#30455f] text-sm font-normal font-['Inter'] leading-[21px]">Active listings for 3 months</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="h-[33px] py-2 px-6 bg-white rounded-[32px] border border-[#50b533] flex-col justify-center items-center gap-1 flex">
                                        <span className="text-[#50b533] text-sm font-semibold font-['Inter']">Show more</span>
                                    </button>
                                </div>
                            </div>
                        </div>
    
    
    
                    </div>
                </div>
                <h2 className="text-center text-[#30455f] text-[32px] font-semibold font-['Inter'] leading-[38.40px] my-12">Additional Services</h2>
                <div className='my-12'>
                    {/* Rent Ready */}
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