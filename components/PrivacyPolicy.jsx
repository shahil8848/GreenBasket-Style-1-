import React from "react";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, User, Database, RefreshCcw, Bell } from "lucide-react";

const policies = [
  {
    title: "1. Information We Collect",
    icon: <User className="text-green-600 w-5 h-5 inline mr-2" />,
    content:
      "We collect personal data like your name, email, contact number, and address when you register, place orders, or interact with our platform. We also gather technical information via cookies for analytics.",
  },
  {
    title: "2. How We Use Your Information",
    icon: <Database className="text-green-600 w-5 h-5 inline mr-2" />,
    content:
      "Your data helps us fulfill orders, provide support, personalize your shopping experience, and send important updates or promotions (with your consent).",
  },
  {
    title: "3. Data Sharing and Disclosure",
    icon: <ShieldCheck className="text-green-600 w-5 h-5 inline mr-2" />,
    content:
      "We do not sell your information. We only share it with trusted services like payment gateways and delivery partners to process your requests securely.",
  },
  {
    title: "4. Data Security",
    icon: <Lock className="text-green-600 w-5 h-5 inline mr-2" />,
    content:
      "We use encryption and secure technologies to safeguard your information. While we strive for full security, we also recommend users protect their own credentials.",
  },
  {
    title: "5. Your Rights",
    icon: <RefreshCcw className="text-green-600 w-5 h-5 inline mr-2" />,
    content:
      "You can access, update, or delete your personal data anytime. Just contact our team at privacy@greenbasket.com to make a request.",
  },
  {
    title: "6. Updates to This Policy",
    icon: <Bell className="text-green-600 w-5 h-5 inline mr-2" />,
    content:
      "We may update this policy occasionally. Changes will be reflected on this page and communicated when significant.",
  },
];

const PrivacyPolicy = () => {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Privacy Policy</h2>
          <p className="text-gray-600 text-lg mt-2">
            Learn how GreenBasket handles your personal data and protects your privacy.
          </p>
        </div>

        <div className="space-y-4">
          {policies.map((policy, index) => (
            <motion.details
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition-all"
            >
              <summary className="cursor-pointer font-medium text-lg text-green-700 flex items-center justify-between">
                <span>
                  {policy.icon}
                  {policy.title}
                </span>
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p className="mt-3 text-gray-700 leading-relaxed">{policy.content}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
