"use client"

import React from 'react';
import { Check } from 'lucide-react';
import profileImage from '../../assets/image/landlord-profile-img.png';
import translate from '../../assets/image/translate.png';
import marker from '../../assets/image/marker.png';
import Image from 'next/image';
import PropertyDemand from '../Shared/PropertyDemand/PropertyDemand';
import TenentReview from './TenentReview';


const AboutLandlord = () => {


    return (
        <div>
            <div className="bg-[#eef1f3]">
                <div className="lg:w-[1216px] w-96 mx-auto lg:py-[86px]  py-12 lg:grid grid-cols-1 flex justify-between items-start">
                    <div className='lg:flex grid grid-cols-1  gap-x-10 gap-y-6'>
                        <div><Image className="w-[104px] h-[104px] rounded-full" src={profileImage} alt="" /></div>
                        <div className='grid grid-cols-1 content-between gap-y-4'>
                            <h1 className="text-[#233244] lg:text-5xl text-2xl font-bold font-['Inter'] "> About Nolan Lubin </h1>
                            <div className='grid lg:grid-cols-2 grid-cols-1  gap-y-2'>
                                <div className='flex gap-2  items-center'>
                                    <div><Image src={translate} alt="" /></div>
                                    <h6 className="text-[#30455f] lg:text-lg text-sm font-medium font-['Inter'] ">  Speaks English and French</h6>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <div><Image src={marker} alt="" /></div>
                                    <h6 className="text-[#30455f] lg:text-lg text-sm font-medium font-['Inter']">  Lives in London, United Kingdom</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' lg:hidden grid grid-cols-1 gap-y-1'>
                        <div className='bg-[#FFFFFF] rounded px-2 py-2 flex items-center gap-x-2'>
                            <Check className='h-[12px] w-[12px] text-[#50B533] ' />  <p className='text-xs'>  Identity</p>
                        </div>
                        <div className='bg-[#FFFFFF] rounded px-2 py-2 flex items-center gap-x-2'>
                            <Check className='h-[12px] w-[12px] text-[#50B533] ' /> <p className='text-xs'>Email address</p>
                        </div>
                        <div className='bg-[#FFFFFF] rounded px-2 py-2 flex items-center gap-x-2'>
                            <Check className='h-[12px] w-[12px] text-[#50B533] ' /> <p className='text-xs'>Phone number</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='  lg:w-[1216px] w-96 mx-auto '>
                <div className=' lg:mt-20 mt-12 lg:grid hidden grid-cols-1 content-between gap-y-6'>
                    <h1 className="text-[#233244] lg:text-[30px] text-[20px] font-semibold font-['Inter'] leading-[38px] lg:text-left text-center">Nolan Lubin confirmed information</h1>
                    <div className='flex lg:gap-1 gap-2'>
                        <div className='bg-[#eef1f3] rounded px-2 py-1 flex items-center gap-x-2'>
                            <Check className='h-[20px] w-[20px] text-[#50B533] ' />  <p className='lg:text-[16px]'>  Identity</p>
                        </div>
                        <div className='bg-[#eef1f3] rounded px-2 py-1 flex items-center gap-x-2'>
                            <Check className='h-[20px] w-[20px] text-[#50B533] ' /> <p className='lg:text-[16px]'>Email address</p>
                        </div>
                        <div className='bg-[#eef1f3] rounded px-2 py-1 flex items-center gap-x-2'>
                            <Check className='h-[20px] w-[20px] text-[#50B533] ' /> <p className='lg:text-[16px]'>Phone number</p>
                        </div>
                    </div>
                </div>
                <div className='lg:mt-26 mt-16'>
                    <h1 className="text-[#233244] text-3xl font-semibold font-['Inter'] leading-[38px] lg:text-left text-center">What tenants are saying about Nolan Lubin</h1>
                    <TenentReview></TenentReview>
                </div>
                <div className='lg:mt-25 mt-16 mb-10'>
                    <h1 className="text-[#233244] lg:text-[30px] text-[20px]  font-semibold font-['Inter'] leading-[38px] lg:text-left text-center">Nolan Lubin listings</h1>
                    <PropertyDemand></PropertyDemand>
                </div>
            </div>
        </div>
    );
};

export default AboutLandlord;