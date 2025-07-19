'use client';
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20 px-4">
        <AboutUs />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;