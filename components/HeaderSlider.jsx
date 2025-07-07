import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Reconnect with Nature – Experience the Purity of Hemp Living",
      offer: "Transform your lifestyle with eco-conscious, plant-powered essentials.",
      imgSrc: assets.banner_1,
    },
    {
      id: 2,
      title: "Handmade with Heart – Celebrate the Soul of Artisanal Craft",
      offer: "Timeless creations, crafted by loving hands, just for you.",
      imgSrc: assets.banner_2,
    },
    {
      id: 3,
      title: "Live Gracefully – Indulge in Ethical Elegance & Organic Beauty",
      offer: "Consciously curated luxuries for the mindful modern soul.",
      imgSrc: assets.banner_3,
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-r from-[#f0f4f8] to-[#e6f0ea] py-6 md:px-14 px-5 mt-6 rounded-2xl min-w-full shadow-sm"
          >
            <div className="md:pl-8 mt-6 md:mt-0 text-center md:text-left">
              <p className="text-sm text-green-700 pb-1 font-medium tracking-wide uppercase">
                {slide.offer}
              </p>
              <h1 className="max-w-xl md:text-[34px] md:leading-[42px] text-2xl font-semibold text-gray-800">
                {slide.title}
              </h1>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-64 w-40 drop-shadow"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index ? "bg-green-700 scale-110" : "bg-gray-400/40"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
