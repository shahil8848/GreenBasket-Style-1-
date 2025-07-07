'use client';
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: assets.girl_withbag,
    title: "Eco-Friendly Hemp Bags",
    description: "Carry sustainability with style using our durable hemp bags.",
  },
  {
    id: 2,
    image: assets.girl_withtiffin,
    title: "Local Artisan Product",
    description: "Celebrate heritage with handmade treasures crafted by local artisans.",
  },
  {
    id: 3,
    image: assets.hempoil,
    title: "Pure Hemp Oil",
    description: "Nourish your skin and soul with cold-pressed hemp oil.",
  },
];

const FeaturedProduct = () => {
  return (
    <div className="mt-14">
      <div className="flex flex-col items-center">
        <p className="text-3xl font-medium">Featured Products</p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="relative group overflow-hidden rounded-xl shadow-md bg-[#3C4F3F]"
          >
            <div className="w-full h-[460px] relative flex items-center justify-center opacity-70">
              <Image
                src={image}
                alt={title}
                fill
                className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="absolute bottom-8 left-8 text-[#F5F5DC] group-hover:-translate-y-4 transition duration-300">
              <p className="font-semibold text-lg lg:text-2xl drop-shadow-md">{title}</p>
              <p className="text-sm lg:text-base drop-shadow-md max-w-xs mt-1">{description}</p>
              <Link
                href="/all-products"
                className="inline-flex items-center gap-1.5 bg-orange-600 text-white px-4 py-2 mt-3 rounded hover:bg-orange-700 transition"
              >
                Explore more
                <Image
                  className="h-3 w-3"
                  src={assets.redirect_icon}
                  alt="Redirect Icon"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
