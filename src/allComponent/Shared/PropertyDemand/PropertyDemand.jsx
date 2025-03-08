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
import { ArrowLeft, ArrowRight } from "lucide-react";
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
    <section className=" lg:mt-12 mt-8">
      <Carousel
        opts={{
          align: "start",
        }}
        setApi={setApi}
        className=""
      >
        <CarouselContent className="lg:-ml-2">
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

      <div className='flex justify-center lg:mt-8 mt-6 gap-x-4 w-auto'>
        <button onClick={() => api?.scrollPrev()} className="w-10 h-10 active:bg-[#50b533] focus:bg-[#50b533] border  border-[#50b533] bg-white rounded-full justify-center items-center inline-flex active:text-white focus:text-white text-[#50b533]">
          <ArrowLeft className="h-[20px] w-[20px]" />
        </button>
        <button onClick={() => api?.scrollNext()} className="w-10 h-10 active:bg-[#50b533] focus:bg-[#50b533] border  border-[#50b533] bg-white rounded-full justify-center items-center inline-flex active:text-white focus:text-white text-[#50b533]">
          <ArrowRight className="h-[20px] w-[20px]" />
        </button>
      </div>
    </section>
  );
};

export default PropertyDemand;
