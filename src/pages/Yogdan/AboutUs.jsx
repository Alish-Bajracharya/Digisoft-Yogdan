import React from "react";
import aboutImg from "../../assets/images/logo1.png";
import mdImage from "../../assets/member/10.jpg"; 
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

const AboutUs = () => {
  return (
    <>
    <Navbar />
    <section className="bg-white text-gray-800 mt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-orange-400 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">About Yogdan Cooperative</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Empowering communities through sustainable savings and financial inclusion.
          </p>
        </div>
      </div>

      {/* About Us Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img src={aboutImg} alt="About Yogdan" className="rounded-xl shadow-md w-full h-auto object-cover" />
        <div>
          <h2 className="text-3xl font-semibold text-green-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Yogdan Cooperative is a leading community-focused financial institution dedicated to improving the lives of its members through accessible savings plans, loan options, and modern financial services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Since our inception, we have aimed to uplift underrepresented sectors by providing ethical, transparent, and innovative financial solutions that build trust and create lasting impact.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              To foster economic empowerment and self-sufficiency in the community by offering secure and affordable financial services.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-orange-400">
            <h3 className="text-2xl font-bold text-orange-600 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              To be a trusted, innovative, and member-driven cooperative that promotes financial literacy and inclusion at every level.
            </p>
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-10">Our Milestones</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
            <h4 className="text-xl font-bold text-gray-800 mb-2">5000+ Members</h4>
            <p className="text-gray-600 text-sm">Actively contributing to growth and development.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
            <h4 className="text-xl font-bold text-gray-800 mb-2">NPR 10 Cr+ Savings</h4>
            <p className="text-gray-600 text-sm">Strong financial foundation backed by our members.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
            <h4 className="text-xl font-bold text-gray-800 mb-2">Award-Winning Cooperative</h4>
            <p className="text-gray-600 text-sm">Recognized for transparency and service excellence.</p>
          </div>
        </div>
      </div>

      {/* Optional: Leadership or Message */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <img
            src={mdImage}
            alt="Chairman"
            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-green-600"
          />
          <h3 className="text-xl font-semibold text-green-700">Mr. Gyanendra Maharjan</h3>
          <p className="text-sm text-orange-500 mb-6">Chairman, Yogdan Cooperative</p>
          <blockquote className="italic text-gray-700 max-w-3xl mx-auto">
            “We believe in the strength of cooperation. At Yogdan, our goal is to create a financially empowered society where each member contributes and benefits equally.”
          </blockquote>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default AboutUs;
