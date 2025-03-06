"use client";

import propertyData from "./propertyData.json";
import { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
const PropertyDemand = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  // const [count, setCount] = useState(0);

  const totalSlides = propertyData.length;

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
    <section className="w-[345px] md:w-[1216px] m-auto mt-10 md:mt-[100px]">
      <Carousel
        opts={{
          align: "start",
        }}
        setApi={setApi}
        className="w-[1216px]"
      >
        <CarouselContent className="-ml-2">
          {propertyData.map((property) => (
            <CarouselItem
              key={property.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <PropertyCard property={property} />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
      
      <div className='flex justify-center mt-12 gap-x-4 w-auto'>
                        <button onClick={() => api?.scrollPrev()} className="w-10 h-10 active:bg-[#50b533] focus:bg-[#50b533] border  border-[#50b533] bg-white rounded-full justify-center items-center inline-flex active:text-white focus:text-white text-[#50b533]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                            </svg>
                        </button>
                        <button onClick={() => api?.scrollNext()} className="w-10 h-10 active:bg-[#50b533] focus:bg-[#50b533] border  border-[#50b533] bg-white rounded-full justify-center items-center inline-flex active:text-white focus:text-white text-[#50b533]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div> 
    </section>
  );
};

export default PropertyDemand;
