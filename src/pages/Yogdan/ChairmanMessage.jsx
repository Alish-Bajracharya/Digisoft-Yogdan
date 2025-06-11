import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
// import chairmanImg from "../assets/advisor/chairman.jpg"; 
import ImgB from "../../assets/member/boy.jpg"
const ChairmanMessage = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <section className="bg-green-700 py-16 mt-24 text-center text-white">
        <h1 className="text-4xl font-bold">Chairman's Message</h1>
        <p className="text-orange-300 mt-4 text-lg">
          Vision, Trust, and Commitment to Cooperative Excellence
        </p>
      </section>

      {/* Message Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Chairman Info */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-10">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-green-600 shadow-lg">
              <img
                src={ImgB}
                alt="Chairman"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-green-800">Mr. Gyanendhra Maharjan</h2>
              <p className="text-sm text-orange-600">Chairman, Yogdan Consumer Cooperative Pvt Ltd.</p>
              <p className="mt-4 text-gray-700 max-w-2xl">
                I am extremely happy to communicate my message to our esteemed members,
                spouses or partners, community and society. We are very concerned at Yogdan Consumer Cooperative
                all the way to empowering people financially by including them, clear governance,
                and sustainable development. Our cooperative is the Place of trust.
                solidarity, on the basis of laborious work of our team and financial support of
                our members.
              </p>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Moving ahead, our focus would be unchanged, to make it member-centric
                volunteer in society, facilitate financial literacy, and utilize their services.
                We share growth and accountability and we welcome yours.
                Thereby, they remained participants in this collaborative process.
              </p>
              <p className="mt-4 text-gray-700 max-w-2xl">
                Thank you for your trust and cooperation. Together, we will build a more
                prosperous and inclusive future.
              </p>
            </div>
          </div>

          {/* Signature */}
          <div className="mt-12 text-right pr-2">
            <p className="text-gray-700 font-medium">Sincerely,</p>
            <p className="text-green-700 font-semibold text-lg">Mr. Mr. Gyanendhra Maharjan</p>
            <p className="text-sm text-orange-500">Chairman, Yogdan Consumer Cooperative Pvt Ltd.</p>
            <p className="text-xs text-gray-400 mt-1">Date: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ChairmanMessage;
