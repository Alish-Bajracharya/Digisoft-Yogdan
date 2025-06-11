import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

    
const Contact = () => {
  return (
    <>
    <Navbar />
      {/* Banner Section */}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold">Head Office</h2>
          </div>

                {/* Contact Info Boxes */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Address */}
        <div className="flex items-start border-r border-gray-300 pr-6">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-green-600 w-6 h-6 mr-4 mt-1" />
            <div>
            <h6 className="font-semibold">Address</h6>
            <span className="block text-gray-600 text-base font-semibold">
                Khokana 21, Lalitpur Metropolitan City
            </span>
            </div>
        </div>

        {/* Phone */}
        <div className="flex items-start border-r border-gray-300 pr-6">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-green-600 w-6 h-6 mr-4 mt-1" />
            <div>
            <h6 className="font-semibold">Phone</h6>
            <a href="callto:+977-9860709940" className="block text-gray-600 text-base font-semibold hover:text-[#f7941e]">+977-9860709940</a>
            <span className="block text-gray-600 text-base font-semibold">+977-9860709940</span>
            </div>
        </div>

        {/* Email */}
        <div className="flex items-start">
            <FontAwesomeIcon icon={faEnvelope} className="text-green-600 w-6 h-6 mr-4 mt-1" />
            <div>
            <h6 className="font-semibold">Email</h6>
            <span className="block text-gray-600 text-base font-semibold">yogdan@gmail.com</span>
            <a href="mailto:info@yogdan.coop.com" className="block text-gray-600 text-base font-semibold hover:text-[#f7941e]">info@yogdan.coop.com</a>
            </div>
        </div>
        </div>


          {/* Contact Form & Map */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gray-100 p-8 rounded">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="uname"
                    placeholder="Name"
                    required
                    className="p-4 border border-gray-300 rounded text-sm font-semibold w-full"
                  />
                  <input
                    type="email"
                    name="mail"
                    placeholder="Email"
                    required
                    className="p-4 border border-gray-300 rounded text-sm font-semibold w-full"
                  />
                </div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="p-4 border border-gray-300 rounded text-sm font-semibold w-full"
                />
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Message"
                  className="p-4 border border-gray-300 rounded text-sm font-semibold w-full"
                ></textarea>
                <button
                  type="submit"
                  className="bg-green-600 text-white uppercase px-6 py-4 rounded hover:bg-green-700 transition text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Google Map */}
            <div>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28269.943835948765!2d85.29948437945944!3d27.66342263735123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb175610927fa1%3A0xff9120f3154f323b!2sYogdan%20Consumer%20Cooperative%20Ltd!5e0!3m2!1sen!2snp!4v1749617450664!5m2!1sen!2snp"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height='450px'
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
