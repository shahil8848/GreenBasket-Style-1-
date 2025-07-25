import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <Image className="w-28 md:w-32" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
  GreenBasket is your go-to destination for sustainable living,
   offering a wide range of eco-friendly, handmade, and locally sourced products. 
   From natural hemp bags and oils to artisan-crafted home goods, GreenBasket brings 
   together quality, ethics, and style to support both people and the planet.
</p>

        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/about">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="/contact">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="privacy">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+977-9877777799</p>
              <p>contact@greenbasket</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
      Copyright 2025 © greenbasket All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;