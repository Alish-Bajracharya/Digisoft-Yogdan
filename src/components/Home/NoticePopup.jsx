import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import logo from "../../assets/images/logo1.png";

const NoticePopup = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
      <div className="relative bg-white max-w-3xl w-full rounded-lg shadow-2xl overflow-hidden animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl z-10"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6">
          {/* Logo */}
          <div className="w-24 md:w-32 flex-shrink-0">
            <img src={logo} alt="Logo" className="w-full" />
          </div>

          {/* Notice Content */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">
              जरुरी सूचना !
            </h1>
            <h5 className="text-orange-500 font-semibold text-lg mb-3">
              सदस्यको पहिचान सम्वन्धी कागजात तथा विवरण (KYM) भर्ने सम्वन्धि सूचना
            </h5>
            <p className="text-gray-700 mb-4 leading-relaxed">
              ज्योतिपुञ्ज बचत तथा ऋण सहकारी संस्थाका सदस्यहरुलाई यस संस्थाको कार्यालयमा उपस्थित भई सदस्यको पहिचान सम्वन्धी कागजात तथा विवरण (KYM) भरिदिनु हुन अनुरोध गर्दछौं ।
            </p>
            <a
              href="/notices"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow-md transition"
            >
              View All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticePopup;
