import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaAngleUp,
} from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa"; // simpler icon
import time from "../assets/images/time.png";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight - 100; // 100px from bottom
      setShowBackToTop(scrollPosition >= threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-[#007338] text-white pt-8 footer">
      <div className="container mx-auto px-6 -mb-6">
        <div className="flex flex-wrap justify-between">

          {/* About */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
            <h4 className="font-semibold mb-4 text-lg">About</h4>
            <ul className="space-y-1">
              {["Yogdan Coop", "News", "Notices", "Gallery"].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaChevronRight className="text-[#f7941e] text-sm mt-[2px]" />
                  <a href="#" className="hover:text-[#f7941e] text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/2 lg:w-1/6 mb-6">
            <h4 className="font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <FaChevronRight className="text-[#f7941e] text-sm mt-[2px]" />
                <a href="/saving-plans" className="hover:text-[#f7941e] text-sm">
                  Saving Plans
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaChevronRight className="text-[#f7941e] text-sm mt-[2px]" />
                <a href="/loan-plans" className="hover:text-[#f7941e] text-sm">
                  Loan Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-6">
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-1">
              {[
                { text: "Account Opening", href: "/application-form" },
                { text: "EMI Calculator", href: "/EMI" },
                { text: "Apply for Loan", href: "/loan-plans" },
                { text: "Interest Rate", href: "/interest" },
              ].map(({ text, href }, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaChevronRight className="text-[#f7941e] text-sm mt-[2px]" />
                  <a href={href} className="hover:text-[#f7941e] text-sm">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="w-full md:w-full lg:w-1/4 mb-6">
            <h4 className="font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 text-base flex-shrink-0" />
                <span>Khokana 21, Lalitpur Metropolitan City</span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1 text-base flex-shrink-0" />
                <a href="callto:+977-9860709940" className="hover:text-[#f7941e]">
                  +977-9860709940
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="mt-1 text-base flex-shrink-0" />
                <a href="mailto:info@yogdan.coop.np" className="hover:text-[#f7941e]">
                  info@yogdan.coop.np
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
                { icon: <FaTwitter />, link: "https://twitter.com/" },
                { icon: <FaInstagram />, link: "https://instagram.com/" },
              ].map(({ icon, link }, idx) => (
                <a
                  href={link}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center border border-[#00a651] rounded-full hover:bg-[#f7941e] hover:border-[#f7941e] transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Office Hour Tooltip */}
        <div className="absolute top-12 right-6 group z-10">
          <div className="relative w-[70px]">
            <img src={time} alt="Office Time" className="w-full" />
            <div className="absolute bottom-full mb-2 -translate-x-1/2 hidden group-hover:flex flex-col bg-[#f58220] text-black p-4 rounded shadow-xl min-w-[200px]">
              <h4 className="mb-2 font-semibold border-b border-[#924a0c]">Office Hour</h4>
              <p className="mb-1">
                <strong>Mon-Sat</strong> 7:00 AM-5:00 PM
              </p>
              <p>
                <strong>Sunday</strong> Holiday
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#00a651] mt-8 py-4">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between text-sm">
          <p>© 2025 Yogdan Saving & Credit Cooperative Ltd. All rights reserved.</p>
          <p>
            Website by{" "}
            <a
              href="https://www.archiesoft.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#99ffcb]"
            >
              ArchieSoft Technology
            </a>
          </p>
        </div>
      </div>

      {/* Back To Top */}
      {showBackToTop && (
        <a
          href="#top"
          className="fixed bottom-5 right-5 text-white text-3xl bg-[#f7941e] p-2 rounded-full hover:bg-[#00a651] transition"
          aria-label="Back to top"
        >
          <FaAngleUp />
        </a>
      )}
    </section>
  );
};

export default Footer;
