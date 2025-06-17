// import { useState } from "react";
// import { FaChevronDown, FaBars, FaTimes, FaPhoneAlt, FaEnvelope, } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo1 from "../assets/images/logo1.png";
// import logo2 from "../assets/images/logo2.png";


// const menuItems = [
//   {
//     title: "Yogdan",
//     submenu: [
//       { name: "About Us", path: "/about-us" },
//       { name: "Advisors", path: "/advisors" },
//       { name: "Chairman's Message", path: "/chairman-message" },
//       { name: "Meet Our Teams", path: "/directors" },
//       { name: "Office Hours", path: "/office-hours" },
     
//     ],
//   },
//   {
//     title: "Services",
//     submenu: [
//       { name: "Loan Plans", path: "/loan-plans" },
//       { name: "Saving Plans", path: "/saving-plans" },
//     ],
//   },
//   {
//     title: "Downloads",
//     submenu: [
//       { name: "Application Form", path: "/application-form" },
//       { name: "Financial Reports", path: "/financial-reports" },
      
//     ],
//   },
//   {
//     title: "Information Center",
//     submenu: [
//       { name: "News", path: "/news" },
//       { name: "Notices", path: "/notices" },
//       { name: "Photo Gallery", path: "/gallery" },
//       { name: "Manka Oil", path: "/manka" },
//     ],
//   },
//   {
//     title: "Career",
//     submenu: [
//       { name: "Apply for Job", path: "/apply-job" },
//       { name: "Positions Hiring", path: "/positions-hiring" },
//     ],
//   },
// ];



// const quickLinks = [
//   { title: "Interest Rate", href: "/interest" },
//   { title: "EMI Calculator", href: "/Emi" },
//   { title: "Contact", href: "/contact" },
//   { title: "Login", href: "/login" },
  
// ];

// const LeftLogos = () => (
//   <div className="flex gap-3 items-center px-4 py-2">
//     <Link to="/" className="hover:scale-105 transition-transform">
//       <img src={logo1} alt="Logo 1" className="h-20 object-contain" />
//     </Link>
//     <Link to="/" className="hover:scale-105 transition-transform">
//       <img src={logo2} alt="Logo 2" className="h-20 object-contain" />
//     </Link>
//   </div>
// );

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
//   const toggleSubMenu = (index) =>
//     setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
//       {/* Top contact and quick links */}
//       <div className="hidden md:flex justify-between items-center text-sm px-6 py-2 bg-green-100 text-green-900 border-b border-orange-300">
//         <div className="flex items-center gap-6">
//             <li className="flex items-start gap-2 h-4">
//               <FaPhoneAlt className="mt-1" />
//               <a href="callto:+977-9860709940" className="hover:text-[#f7941e]">+977-9860709940</a>
//             </li>
//             <li className="flex items-start gap-2 h-4">
//               <FaEnvelope className="mt-1" />
//               <a href="mailto:info@yogdan.coop.np" className="hover:text-[#f7941e]">info@yogdan.coop.np</a>
//             </li>
//         </div>
//         <ul className="flex items-center space-x-4">
//           {quickLinks.map(({ title, href }) => (
//             <li key={title}>
//               <a href={href} className="hover:text-orange-600 transition-colors">{title}</a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Nav */}
//       <div className="flex items-center justify-between px-4 md:px-8 h-20 bg-transparent">
//         <LeftLogos />

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex items-center gap-8 text-green-900 font-semibold">
//           {menuItems.map(({ title, submenu }) => (
//             <li key={title} className="relative group cursor-pointer">
//               <button className="flex items-center gap-1 hover:text-orange-600 transition">
//                 {title}
//                 <FaChevronDown size={12} className="mt-1" />
//               </button>
//               <ul className="absolute top-full -ml-6 mt-2  bg-white shadow-md rounded-md w-44 text-sm opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-40">
//                 {submenu.map(({ name, path }) => (
//                   <li key={name}>
//                     <Link
//                       to={path}
//                       className="block px-4 py-2 hover:bg-orange-100 hover:text-orange-700"
//                     >
//                       {name}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </li>
//           ))}
//         </ul>


//         {/* Mobile menu toggle */}
//         <button
//           onClick={toggleMobileMenu}
//           className="md:hidden text-green-800 p-2"
//           aria-label="Toggle mobile menu"
//         >
//           {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 z-50 bg-white text-green-900 flex flex-col w-full h-full md:hidden">
//           {/* Header */}
//           <div className="flex justify-between items-center px-6 py-4 border-b shadow-md bg-green-900">
//             <h2 className="text-xl text-green-100 font-bold">Menu</h2>
//             <button className="text-green-100" onClick={toggleMobileMenu} aria-label="Close menu ">
//               <FaTimes size={28} />
//             </button>
//           </div>

//           {/* Menu Items */}
//           <div className="overflow-y-visible flex-col justify-between items-center px-6 py-4 border-b shadow-md bg-green-100 bg-opacity-90 flex-1 p-6 space-y-4">
//             {menuItems.map(({ title, submenu }, idx) => (
//               <div key={title} className="border-b pb-2">
//                 <button
//                   onClick={() => toggleSubMenu(idx)}
//                   className="w-full flex justify-between items-center font-semibold text-lg py-2"
//                 >
//                   {title}
//                   <FaChevronDown
//                     className={`transition-transform duration-300 ${
//                       openSubMenuIndex === idx ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>

//                 {openSubMenuIndex === idx && (
//                   <ul className="mt-2 space-y-2 pl-4 text-base  py-2">
//                     {submenu.map(({ name, path }) => (
//                       <li key={name}>
//                         <Link
//                           to={path}
//                           className="block py-1 hover:text-orange-600 transition-colors"
//                           onClick={toggleMobileMenu}
//                         >
//                           {name}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             ))}


//             {/* Quick Links */}
//             <div className="mt-6 border-t pt-4">
//               <ul className="space-y-2">
//                 {quickLinks.map(({ title, href }) => (
//                   <li key={title}>
//                     <a
//                       href={href}
//                       className="block py-1 text-base hover:text-orange-600"
//                     >
//                       {title}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}



//     </header>
//   );
// };

// export default Navbar;


































import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo1 from "../assets/images/image.png";
import callIcon from "../assets/icon/call.png";
import mailIcon from "../assets/icon/mail.png";

const menuItems = [
  {
    title: "Yogdan",
    submenu: [
      { label: "About Us", href: "/about-us" },
      { label: "Chairman's Message", href: "/chairman-message" },
      { label: "Advisors", href: "/advisors" },
      { label: "Board of Directors", href: "/directors" },
      { label: "Office Hours", href: "/office-hours" },
    ],
  },
  {
    title: "Services",
    submenu: [
      { label: "Saving Plans", href: "/saving-plans" },
      { label: "Loan Plans", href: "/loan-plans" },
    ],
  },
  {
    title: "Downloads",
    submenu: [
      { label: "Financial Reports", href: "/financial-reports" },
      { label: "Application Form", href: "/application-form" },
    ],
  },
  {
    title: "Information Center",
    submenu: [
      { label: "News", href: "/news" },
      { label: "Notices", href: "/notices" },
      { label: "CSR Activities", href: "/csr-activities" },
      { label: "Photo Gallery", href: "/gallery" },
      { label: "Manka Oil", href: "/manka" },
    ],
  },
  {
    title: "Career",
    submenu: [
      { label: "Positions Hiring", href: "/positions-hiring" },
      { label: "Apply for Job", href: "/apply-job" },
    ],
  },
];

const quickLinks = [
  { title: "Interest Rate", href: "/interest" },
  { title: "EMI Calculator", href: "/emi" },
  { title: "Login", href: "/login" },
  { title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleSubMenu = (index) =>
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);

  return (
    <header className="font-sans fixed top-0 w-full z-50 shadow-md bg-white">
      {/* Top bar with quick links and logo */}
      <div className="bg-gray-200 relative z-20">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-10 relative flex justify-between items-center">
          {/* Logo: small for mobile, large for desktop */}
          <a href="/" className="flex md:absolute  md:left-4 md:top-full md:transform md:-translate-y-1/2">
            <img
              src={logo1}
              alt="Yogdan Logo"
              className="h-10 object-contain  md:h-40 md:mt-16"
              loading="lazy"
            />
          </a>

          {/* Quick Links - Desktop Only */}
          <ul className="hidden md:flex justify-end items-center space-x-4 text-sm text-green-700 hover:text-orange-500 w-full">
            {quickLinks.map(({ title, href }, idx) => (
              <li key={title} className="flex items-center space-x-2">
                <a
                  href={href}
                  className="hover:text-gray-900 transition-colors duration-200"
                >
                  {title}
                </a>
                {idx !== quickLinks.length - 1 && (
                  <span className="text-gray-400">|</span>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-orange-600"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="hidden md:flex justify-end items-center bg-white border-b py-2 px-4 md:px-8 text-sm text-gray-600 max-w-screen-xl mx-auto h-14 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <img src={callIcon} alt="Call" className="h-4" />
            <a href="callto:+977-9860709940" className="hover:text-[#f7941e]">
              +977-9860709940
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <img src={mailIcon} alt="Mail" className="h-4" />
            <a href="mailto:info@yogdan.coop.np" className="hover:text-[#f7941e]">
              info@yogdan.coop.np
            </a>
          </div>
        </div>
      </div>

      {/* MenuItems with logo aligned */}
      <nav className="bg-orange-500 relative z-10">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 md:px-8 h-14">
          <div className="w-32 hidden md:block"></div> {/* Spacer */}
          <ul className="hidden md:flex items-center space-x-10 text-white font-semibold tracking-wide">
            {menuItems.map(({ title, submenu }) => (
              <li key={title} className="relative group cursor-pointer">
                <button className="flex items-center gap-1 hover:text-yellow-300 transition-colors duration-300">
                  {title}
                  <FaChevronDown />
                </button>
                <ul className="absolute top-full  w-52 bg-white text-gray-800 border border-gray-300 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-30">
                  {submenu.map(({ label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="block px-4 py-2 hover:bg-yellow-200"
                        onClick={toggleMobileMenu}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white text-green-900 flex flex-col w-full h-full md:hidden">
          {/* Header inside panel */}
          <div className="flex justify-between items-center px-6 py-4 border-b shadow-md bg-green-900">
            <h2 className="text-xl text-green-100 font-bold">Menu</h2>
            <button
              className="text-green-100"
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <FaTimes size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-green-100 bg-opacity-90">
            {menuItems.map(({ title, submenu }, idx) => (
              <div key={title} className="border-b pb-2">
                <button
                  onClick={() => toggleSubMenu(idx)}
                  className="w-full flex justify-between items-center font-semibold text-lg py-2"
                >
                  {title}
                  <FaChevronDown
                    className={`transition-transform duration-300 ${
                      openSubMenuIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openSubMenuIndex === idx && (
                  <ul className="mt-2 space-y-2 pl-4 text-base py-2">
                    {submenu.map(({ label, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          className="block py-1 hover:text-orange-600 transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Quick Links */}
            <div className="mt-6 border-t pt-4">
              <ul className="space-y-2">
                {quickLinks.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      href={href}
                      className="block py-1 text-base hover:text-orange-600"
                      onClick={toggleMobileMenu}
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
