'use client';
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";

const PrivacyPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20 px-4">
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPage;
