"use client"

import React, { useEffect, useState } from 'react';
import tenentReview from "./tenentReview.json";
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ReviewCard from './ReviewCard';

const TenentReview = () => {
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
            <Carousel
                opts={{
                    align: "start",
                }}
                setApi={setApi}
                className=" lg:mt-12 mt-8"
            >
                <CarouselContent className="lg:-ml-1">
                    {tenentReview.map((review) =>
                        <CarouselItem
                            key={review.id}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <ReviewCard review={review} ></ReviewCard>
                        </CarouselItem>
                    )}
                </CarouselContent>
                {/* <CarouselPrevious /> */}
                {/* <CarouselNext /> */}
            </Carousel>

            <div className='flex justify-center lg:mt-8 mt-6 gap-x-4'>
                <button onClick={() => api?.scrollPrev()} className="w-10 h-10 active:bg-[#eef1f3] focus:bg-[#eef1f3] border  border-[#eef1f3] bg-white rounded-full justify-center items-center inline-flex  text-[#000000]">
                    <ArrowLeft className='h-[20px] w-[20px]' />
                </button>
                <button onClick={() => api?.scrollNext()} className="w-10 h-10 active:bg-[#eef1f3] focus:bg-[#eef1f3] border  border-[#eef1f3] bg-white rounded-full justify-center items-center inline-flex text-[#000000]">
                    <ArrowRight className='h-[20px] w-[20px]' />
                </button>
            </div>
        </div>
    );
};

export default TenentReview;