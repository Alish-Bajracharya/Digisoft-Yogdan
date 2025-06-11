import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaAngleUp,
  FaRegNewspaper,
  FaRegImage,
  FaRegCreditCard,
  FaPiggyBank,
  FaMoneyCheckAlt,
  FaCalculator,
  FaRegBuilding,
} from "react-icons/fa";
import time from "../assets/images/time.png";

const Footer = () => {
  return (
    <section className="relative bg-[#007338] text-white pt-12 footer">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">

          {/* About */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h4 className="font-semibold mb-5 text-lg">About</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaRegBuilding />
                <a href="#" className="hover:text-[#f7941e]">Yogdan Coop</a>
              </li>
              <li className="flex items-center gap-2">
                <FaRegNewspaper />
                <a href="#" className="hover:text-[#f7941e]">News</a>
              </li>
              <li className="flex items-center gap-2">
                <FaRegNewspaper />
                <a href="#" className="hover:text-[#f7941e]">Notices</a>
              </li>
              <li className="flex items-center gap-2">
                <FaRegImage />
                <a href="#" className="hover:text-[#f7941e]">Gallery</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/2 lg:w-1/6 mb-8">
            <h4 className="font-semibold mb-5 text-lg">Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaPiggyBank />
                <a href="/saving-plans" className="hover:text-[#f7941e]">Saving Plans</a>
              </li>
              <li className="flex items-center gap-2">
                <FaMoneyCheckAlt />
                <a href="/loan-plans" className="hover:text-[#f7941e]">Loan Plans</a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="w-full md:w-1/2 lg:w-1/4 mb-8">
            <h4 className="font-semibold mb-5 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaRegCreditCard />
                <a href="#" className="hover:text-[#f7941e]">Account Opening</a>
              </li>
              <li className="flex items-center gap-2">
                <FaMoneyCheckAlt />
                <a href="#" className="hover:text-[#f7941e]">Apply for Loan</a>
              </li>
              <li className="flex items-center gap-2">
                <FaPiggyBank />
                <a href="#" className="hover:text-[#f7941e]">Interest Rate</a>
              </li>
              <li className="flex items-center gap-2">
                <FaCalculator />
                <a href="#" className="hover:text-[#f7941e]">EMI Calculator</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="w-full md:w-full lg:w-1/4 mb-8">
            <h4 className="font-semibold mb-5 text-lg">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>Khokana 21, Lalitpur Metropolitan City</span>
              </li>
              <li className="flex items-start gap-2">
                <FaPhoneAlt className="mt-1" />
                <a href="callto:+977-9860709940" className="hover:text-[#f7941e]">+977-9860709940</a>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="mt-1" />
                <a href="mailto:info@yogdan.coop.np" className="hover:text-[#f7941e]">info@yogdan.coop.np</a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-5">
              {[
                { icon: <FaFacebookF />, link: "https://www.facebook.com/" },
                { icon: <FaTwitter />, link: "https://twitter.com/" },
                { icon: <FaInstagram />, link: "https://instagram.com/" }
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
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 -translate-x-1/2 hidden group-hover:flex flex-col bg-[#f58220] text-black p-4 rounded shadow-xl min-w-[200px]">
                <h4 className="mb-2  font-semibold border-b border-[#924a0c]">Office Hour</h4>
                <p className="mb-1"><strong>Mon-Sat</strong> 7:00 AM-5:00 PM</p>
                <p><strong>Sunday</strong> Holiday</p>
                </div>
            </div>
        </div>
        </div>

      <div className="bg-[#00a651] mt-12 py-4">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between text-sm">
          <p>© 2025 Yogdan Saving & Credit Cooperative Ltd. All rights reserved.</p>
          <p>
            Website by{" "}
            <a href="http://www.digisoft.com.np" target="_blank" rel="noopener noreferrer" className="hover:text-[#99ffcb]">
              DigiSoft Developers Pvt Ltd.
            </a>
          </p>
        </div>
      </div>

      {/* Back To Top */}
      <a href="#top" className="fixed bottom-5 right-5 text-white text-3xl bg-[#00a651] p-2 rounded-full hover:bg-[#f7941e] transition">
        <FaAngleUp />
      </a>
    </section>
  );
};

export default Footer;
