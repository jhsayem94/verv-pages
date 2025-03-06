"use client"

import React, { useEffect, useState } from 'react';
import tenentReview from "./tenentReview.json";

import profileImage from '../../assets/image/landlord-profile-img.png';
import translate from '../../assets/image/translate.png';
import marker from '../../assets/image/marker.png';
import checkMark from '../../assets/image/check-mark.png';
import tenentProfile from '../../assets/image/tenent-profile.png';
import star from '../../assets/image/star-filled.png';
import Image from 'next/image';
import PropertyDemand from '../Shared/PropertyDemand/PropertyDemand';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

const AboutLandlord = () => {

    const [api, setApi] = useState();
      const [current, setCurrent] = useState(0);
      // const [count, setCount] = useState(0);
    
      const totalSlides = tenentReview.length;
    
      useEffect(() => {
        if (!api) {
          return;
        }
    
        // setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());
    
        api.on("select", () => {
          setCurrent(api.selectedScrollSnap());
        });
      }, [api]);
    return (
        <div>
            <div className="my-12">
                <div className="bg-[#eef1f3]">
                    <div className="lg:w-[1216px] mx-auto lg:flex  lg:py-[80px] py-12 gap-x-10 px-4 lg:px-0">
                        <div><Image className="w-[104px] h-[104px] rounded-full" src={profileImage} alt="" /></div>
                        <div className='grid grid-cols-1 content-between'>
                            <h1 className="text-[#233244] lg:text-5xl text-2xl font-bold font-['Inter'] leading-[60px]"> About Nolan Lubin </h1>
                            <div className='lg:flex gap-8 '>
                                <div className='flex gap-2 '>
                                    <div><Image src={translate} alt="" /></div>
                                    <h6 className="text-[#30455f] lg:text-lg text-sm font-medium font-['Inter'] leading-7">  Speaks English and French</h6>
                                </div>
                                <div className='flex gap-2'>
                                    <div><Image src={marker} alt="" /></div>
                                    <h6 className="text-[#30455f] lg:text-lg text-sm font-medium font-['Inter'] leading-7">  Lives in London, United Kingdom</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-12'>
                <div className=' lg:w-[1216px] mx-auto lg:px-0 px-3'>
                    <div className='grid grid-cols-1 content-between gap-y-10'>
                        <h1 className="text-[#233244] text-3xl font-semibold font-['Inter'] leading-[38px] lg:text-left text-center">Nolan Lubin confirmed information</h1>
                        <div className='flex flex-wrap  lg:w-1/2  lg:gap-4 gap-2'>
                            <div className='bg-[#eef1f3] rounded px-4 py-2 flex gap-x-2'>
                                <Image src={checkMark} alt="" /> <p>Identity</p>
                            </div>
                            <div className='bg-[#eef1f3] rounded px-4 py-2 flex gap-x-2'>
                                <Image src={checkMark} alt="" /> <p>Email address</p>
                            </div>
                            <div className='bg-[#eef1f3] rounded px-4 py-2 flex gap-x-2'>
                                <Image src={checkMark} alt="" /> <p>Phone number</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-24 mb-12'>
                <div className=' lg:w-[1216px] mx-auto lg:px-0 px-3'>
                    <h1 className="text-[#233244] text-3xl font-semibold font-['Inter'] leading-[38px] lg:text-left text-center">What tenants are saying about Nolan Lubin</h1>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        setApi={setApi}
                        className= "lg:w-[1216px] mx-auto mt-12"
                    >
                        <CarouselContent className="-ml-1">
                            {tenentReview.map((review) =>
                                <CarouselItem
                                    key={review.id}
                                    className="md:basis-1/2 lg:basis-1/3"
                                >
                                    {/* <PropertyCard property={property} /> */}

                                    <div className='p-6 grid grid-cols-1 gap-y-5 bg-white rounded-[20px] border border-[#c4c6c9]/60 shadow-custom h-full'>
                                        <div className='flex gap-x-4 items-center'>
                                            <div><Image src={tenentProfile} alt="" /></div>
                                            <div className='grid grid-cols-1 gap-y-2'>
                                                <h4 className="text-[#233244] text-base font-semibold font-['Inter'] leading-normal">{review.tenentName}</h4>
                                                <p className="text-[#56677d] text-sm font-normal font-['Inter'] leading-tight">{review.reveiwDate}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-[#30455f] text-base font-normal font-['Inter'] leading-normal" >{review.comment}</p>
                                        </div>
                                        <div className='flex gap-x-2'>                                            
                                            <Image className='h-[20px] w-[20px]' src={star} alt="" />
                                            <Image className='h-[20px] w-[20px]' src={star} alt="" />
                                            <Image className='h-[20px] w-[20px]' src={star} alt="" />
                                            <Image className='h-[20px] w-[20px]' src={star} alt="" />
                                        </div>
                                    </div>
                                </CarouselItem>
                            )}
                        </CarouselContent>
                        {/* <CarouselPrevious /> */}
                        {/* <CarouselNext /> */}
                    </Carousel>

                    <div className='flex justify-center mt-12 gap-x-4'>
                        <button onClick={() => api?.scrollPrev()} className="w-10 h-10 active:bg-[#eef1f3] focus:bg-[#eef1f3] border  border-[#eef1f3] bg-white rounded-full justify-center items-center inline-flex  text-[#000000]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </button>
                        <button onClick={() => api?.scrollNext()}  className="w-10 h-10 active:bg-[#eef1f3] focus:bg-[#eef1f3] border  border-[#eef1f3] bg-white rounded-full justify-center items-center inline-flex text-[#000000]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='mt-24 mb-12'>
                <div className='lg:w-[1216px] mx-auto lg:px-0 px-3'>
                    <h1 className="text-[#233244] text-3xl font-semibold font-['Inter'] leading-[38px] lg:text-left text-center">Nolan Lubin listings</h1>

                    <PropertyDemand></PropertyDemand>
                    {/* <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-6 gap-3 mt-12 lg:p-0 p-4 '>
                        <div className=' grid grid-cols-1 gap-x-4   bg-white rounded-[20px] rounded-tl-3xl rounded-tr-3xl border border-[#c4c6c9]/60 shadow-custom'>
                            <div >
                                <Image src={listingImage} alt="" />
                            </div>
                            <div className='p-6 grid grid-cols-1 gap-5'>
                                <div className='flex justify-between items-center'>
                                    <h3 className="text-[#449a2b] text-2xl font-semibold font-['Inter'] leading-[28.80px]">£2,095 <span className=" opacity-50 text-[#000828] text-base font-normal font-['Inter'] leading-normal">/month</span></h3>
                                    <button className=" bg-white rounded-full shadow-custom border border-[#d5edce] p-2">
                                        <Image src={favoriteIcon} alt="" />
                                    </button>
                                </div>
                                <div className='grid grid-cols-1 gap-y-2'>
                                    <h4 className="text-[#30455f] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Palm Harbor</h4>
                                    <p className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal">2699 Green Valley, Highland Lake, FL</p>
                                </div>
                                <div className="h-[0px] border border-[#eef1f3]"></div>
                                <div className='flex justify-between'>
                                    <div className='flex gap-x-1'>
                                        <Image src={bedIcon} alt="" />
                                        <h6 className="text-[#56677d] text-sm font-normal font-['Inter'] leading-[21px]">3 Beds</h6>
                                    </div>
                                    <div className='flex gap-x-1'>
                                        <Image src={bathroomIcon} alt="" />
                                        <h6 className="text-[#56677d] text-sm font-normal font-['Inter'] leading-[21px]">2 Bathrooms</h6>
                                    </div>
                                    <div className='flex gap-x-1'>
                                        <Image src={squareMeterIcon} alt="" />
                                        <h6 className="text-[#56677d] text-sm font-normal font-['Inter'] leading-[21px]">5x7 m²</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' grid grid-cols-1 gap-x-4   bg-white rounded-[20px] rounded-tl-3xl rounded-tr-3xl border border-[#c4c6c9]/60 shadow-custom'>
                            <div >
                                <Image src={listingImage} alt="" />
                            </div>
                            <div className='p-6 grid grid-cols-1 gap-5'>
                                <div className='flex justify-between items-center'>
                                    <h3 className="text-[#449a2b] text-2xl font-semibold font-['Inter'] leading-[28.80px]">£2,095 <span className=" opacity-50 text-[#000828] text-base font-normal font-['Inter'] leading-normal">/month</span></h3>
                                    <button className=" bg-white rounded-full shadow-custom border border-[#d5edce] p-2">
                                        <Image src={favoriteIcon} alt="" />
                                    </button>
                                </div>
                                <div className='grid grid-cols-1 gap-y-2'>
                                    <h4 className="text-[#30455f] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Palm Harbor</h4>
                                    <p className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal">2699 Green Valley, Highland Lake, FL</p>
                                </div>
                                <div className="h-[0px] border border-[#eef1f3]"></div>
                                <div className='flex justify-between'>
                                    <div className='flex gap-x-1'>
                                        <Image src={bedIcon} alt="" />
                                        <h6 className="text-[#56677d] text-sm font-normal font-['Inter'] leading-[21px]">3 Beds</h6>
                                    </div>
                                    <div className='flex gap-x-1'>
                                        <Image src={bathroomIcon} alt="" />
                                        <h6 className="text-[#56677d] text-sm font-normal font-['Inter'] leading-[21px]">2 Bathrooms</h6>
                                    </div>
                                    <div className='flex gap-x-1'>
                                        <Image src={squareMeterIcon} alt="" />
                                        <h6 className="text-[#56677d] text-sm font-normal font-['Inter'] leading-[21px]">5x7 m²</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' grid grid-cols-1 gap-x-4   bg-white rounded-[20px] rounded-tl-3xl rounded-tr-3xl border border-[#c4c6c9]/60 shadow-custom'>
                            <div >
                                <Image src={listingImage} alt="" />
                            </div>
                            <div className='p-6 grid grid-cols-1 gap-5'>
                                <div className='flex justify-between items-center'>
                                    <h3 className="text-[#449a2b] text-2xl font-semibold font-['Inter'] leading-[28.80px]">£2,095 <span className=" opacity-50 text-[#000828] text-base font-normal font-['Inter'] leading-normal">/month</span></h3>
                                    <button className=" bg-white rounded-full shadow-custom border border-[#d5edce] p-2">
                                        <Image src={favoriteIcon} alt="" />
                                    </button>
                                </div>
                                <div className='grid grid-cols-1 gap-y-2'>
                                    <h4 className="text-[#30455f] text-2xl font-semibold font-['Inter'] leading-[28.80px]">Palm Harbor</h4>
                                    <p className="text-[#56677d] text-base font-normal font-['Inter'] leading-normal">2699 Green Valley, Highland Lake, FL</p>
                                </div>
                                <div className="h-[0px] border border-[#eef1f3]"></div>
                                <div className='flex justify-between'>
                                    <div className='flex gap-x-1'>
                                        <Image src={bedIcon} alt="" />
                                        <h6 className="text-[#56677d] text-sm font-normal font-['Inter'] leading-[21px]">3 Beds</h6>
                                    </div>
                                    <div className='flex gap-x-1'>
                                        <Image src={bathroomIcon} alt="" />
                                        <h6 className="text-[#56677d] text-sm font-normal font-['Inter'] leading-[21px]">2 Bathrooms</h6>
                                    </div>
                                    <div className='flex gap-x-1'>
                                        <Image src={squareMeterIcon} alt="" />
                                        <h6 className="text-[#56677d] text-sm font-normal font-['Inter'] leading-[21px]">5x7 m²</h6>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='flex justify-center mt-12 gap-x-4 w-auto'>
                        <button className="w-10 h-10 active:bg-[#50b533] focus:bg-[#50b533] border  border-[#50b533] bg-white rounded-full justify-center items-center inline-flex active:text-white focus:text-white text-[#50b533]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </button>
                        <button className="w-10 h-10 active:bg-[#50b533] focus:bg-[#50b533] border  border-[#50b533] bg-white rounded-full justify-center items-center inline-flex active:text-white focus:text-white text-[#50b533]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div> */}
                </div>
            </div>


        </div>
    );
};

export default AboutLandlord;