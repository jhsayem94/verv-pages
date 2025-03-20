"use client"
import HeroSection from "./HeroSection";
import Location from "./Location";
import { useState } from "react";

const HomePage = () => {
  const [location, setLocation] = useState({ lat: 40.7128, lng: -74.0060 });
  return (
   <div>
     <div className=' bg-[#50B533]'>
      <div className='lg:w-[900px] mx-auto py-20 h-[450px]'>
        <h1 className="text-center justify-start text-white text-5xl [#50B533]" >Rent Smarter with Verified Reviews</h1>
        <HeroSection></HeroSection>
        <h4 className="text-center justify-start mt-6"><span className="text-white text-[18px] font-normal ">Want more visibility? </span><span className="text-white text-[18px] font-semibold">List with Verv.</span></h4>
      </div>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Location</h1>
      <Location  />
    </div>
   </div>
  );
};

export default HomePage;