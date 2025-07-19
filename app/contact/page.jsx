'use client';
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-20 px-4">
        <ContactUs />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;