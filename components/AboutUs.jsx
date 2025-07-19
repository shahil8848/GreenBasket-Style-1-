import React from "react";
import {
  Leaf,
  Truck,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    icon: <Leaf className="w-10 h-10 text-green-700" />,
    title: "100% Eco-Friendly",
    description:
      "All our products are sustainably sourced and packaged with minimal environmental impact.",
  },
  {
    icon: <Truck className="w-10 h-10 text-green-700" />,
    title: "Free Shipping",
    description:
      "Enjoy free shipping on all orders over Nrs 500 with eco-friendly, carbon-neutral delivery.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-700" />,
    title: "Quality Guaranteed",
    description:
      "We prioritize durability and quality with a satisfaction guarantee and easy returns.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-green-700" />,
    title: "Support Local Artisans",
    description:
      "Every purchase directly supports talented local artisans and sustainable communities.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-green-700" />,
    title: "Natural Hemp Oils",
    description:
      "Our cold-pressed hemp oils are natural, chemical-free, and packed with nutrients for wellness.",
  },
  {
    icon: <Truck className="w-10 h-10 text-green-700" />,
    title: "Locally-Sourced Hemp Bags",
    description:
      "Stylish, durable bags crafted from locally grown Nepali hemp—designed with purpose and sustainability.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-700" />,
    title: "Plastic-Free Packaging",
    description:
      "We’re committed to zero plastic: all packaging is compostable or recyclable to protect the planet.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-green-700" />,
    title: "Artisan-Crafted Decor",
    description:
      "Discover handmade wooden and brass home decor that blends tradition, elegance, and craftsmanship.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-green-700" />,
    title: "Empowering Women Entrepreneurs",
    description:
      "We partner with women-led cooperatives to uplift local talent and promote gender equality.",
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#f0fdf4] to-[#ffffff] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About GreenBasket</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14 text-lg">
          GreenBasket is committed to sustainability, wellness, and empowering local communities through eco-conscious living.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;