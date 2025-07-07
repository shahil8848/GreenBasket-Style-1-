import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:pl-14 py-10 bg-gradient-to-r from-[#eaf4ea] to-[#e6f0e6] my-12 rounded-xl overflow-hidden shadow-sm">
      {/* Left Image – Hemp Oil */}
      <Image
        className="max-w-32 md:max-w-48 object-contain"
        src={assets.hempoil_image}
        alt="hempoil_image"
      />

      {/* Center Text Section */}
      <div className="flex flex-col items-center justify-center text-center px-5 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug max-w-[300px] md:max-w-md">
          Nature’s Finest, Handpicked for You
        </h2>
        <p className="text-gray-700/80 font-medium mt-2 text-sm md:text-base max-w-[340px]">
          Embrace sustainable elegance with ethically made hemp products and handcrafted goods from local artisans.
        </p>
      </div>

      {/* Right Image – Hemp Bag */}
      <Image
        className="hidden md:block max-w-60 object-contain"
        src={assets.bag_image}
        alt="hempbag_image"
      />
    </div>
  );
};

export default Banner;
