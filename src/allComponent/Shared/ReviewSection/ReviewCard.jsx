import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import tenentProfile from '../../../assets/image/tenent-profile.png';
const ReviewCard = ({ review }) => {
    return (

        <div className='p-6 grid grid-cols-1 gap-y-6 bg-white rounded-[20px] border border-[#c4c6c9]/60 shadow-custom h-full'>
            <div className='flex gap-x-4 items-center h-auto'>
                <div><Image className='h-[48px] w-[48px]' src={tenentProfile} alt="profile" /></div>
                <div className='grid grid-cols-1 '>
                    <h4 className="text-[#233244] text-[16px] font-semibold  ">{review.tenentName}</h4>
                    <p className="text-[#56677d] text-[14px] font-normal ">{review.reviewDate}</p>
                </div>
            </div>
            <div className=''>
                <p className=" h-[192px] text-[#30455f] text-base font-normal  leading-normal overflow-hidden text-ellipsis " >{review.comment}</p>
            </div>
            <div className='flex gap-x-1'>
                <Star className='h-[20px] w-[20px] text-[#FABA1D] fill-[#FABA1D]' />
                <Star className='h-[20px] w-[20px] text-[#FABA1D] fill-[#FABA1D]' />
                <Star className='h-[20px] w-[20px] text-[#FABA1D] fill-[#FABA1D]' />
                <Star className='h-[20px] w-[20px] text-[#FABA1D] fill-[#FABA1D]' />
            </div>
        </div>
    );
};

export default ReviewCard;