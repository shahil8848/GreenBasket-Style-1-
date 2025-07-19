import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-b from-[#f0fdf4] to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h2>
          <p className="text-gray-600 text-lg">
            We're here to help. Reach out for any questions, feedback, or support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <div className="flex items-start gap-4">
              <Mail className="text-green-700 mt-1" />
              <p className="text-gray-700">
                <strong>Email:</strong> contact@greenbasket
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-green-700 mt-1" />
              <p className="text-gray-700">
                <strong>Phone:</strong> +977-9876543210
              </p>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-green-700 mt-1" />
              <p className="text-gray-700">
                <strong>Address:</strong> Ramnagar, Butwal, Nepal
              </p>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="w-full rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-[350px] rounded-xl"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=650&height=410&hl=en&q=butwal%2Cramnagar&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              title="GreenBasket Butwal Map"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;