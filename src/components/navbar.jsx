import { useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import callIcon from "../assets/icon/call.png";
import mailIcon from "../assets/icon/mail.png";

const menuItems = [
  {
    title: "Yogdan",
    submenu: [
      { name: "Chairman's Message", path: "/chairman-message" },
      { name: "Advisors", path: "/advisors" },
      { name: "Board of Directors", path: "/directors" },
      { name: "Office Hours", path: "/office-hours" },
    ],
  },
  {
    title: "Services",
    submenu: [
      { name: "Saving Plans", path: "/saving-plans" },
      { name: "Loan Plans", path: "/loan-plans" },
    ],
  },
  {
    title: "Downloads",
    submenu: [
      { name: "Financial Reports", path: "/financial-reports" },
      { name: "Application Form", path: "/application-form" },
    ],
  },
  {
    title: "Information Center",
    submenu: [
      { name: "News", path: "/news" },
      { name: "Notices", path: "/notices" },
      { name: "CSR Activities", path: "/csr-activities" },
      { name: "Photo Gallery", path: "/gallery" },
    ],
  },
  {
    title: "Career",
    submenu: [
      { name: "Positions Hiring", path: "/positions-hiring" },
      { name: "Apply for Job", path: "/apply-job" },
    ],
  },
];



const quickLinks = [
  { title: "Interest Rate", href: "#" },
  { title: "EMI Calculator", href: "#" },
  { title: "Contact", href: "/contact" },
  { title: "Login", href: "Login" },
  
];

const LeftLogos = () => (
  <div className="flex gap-3 items-center px-4 py-2">
    <Link to="/" className="hover:scale-105 transition-transform">
      <img src={logo1} alt="Logo 1" className="h-20 object-contain" />
    </Link>
    <Link to="/" className="hover:scale-105 transition-transform">
      <img src={logo2} alt="Logo 2" className="h-20 object-contain" />
    </Link>
  </div>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleSubMenu = (index) =>
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
      {/* Top contact and quick links */}
      <div className="hidden md:flex justify-between items-center text-sm px-6 py-2 bg-green-100 text-green-900 border-b border-green-300">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src={callIcon} alt="Call" className="h-4" />
            <span>+977-9860709940</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={mailIcon} alt="Mail" className="h-4" />
            <span>info@yogdan.coop.np</span>
          </div>
        </div>
        <ul className="flex items-center space-x-4">
          {quickLinks.map(({ title, href }) => (
            <li key={title}>
              <a href={href} className="hover:text-orange-600 transition-colors">{title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Nav */}
      <div className="flex items-center justify-between px-4 md:px-8 h-20 bg-transparent">
        <LeftLogos />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 text-green-900 font-semibold">
          {menuItems.map(({ title, submenu }) => (
            <li key={title} className="relative group cursor-pointer">
              <button className="flex items-center gap-1 hover:text-orange-600 transition">
                {title}
                <FaChevronDown size={12} className="mt-1" />
              </button>
              <ul className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md w-52 text-sm opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-40">
                {submenu.map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      to={path}
                      className="block px-4 py-2 hover:bg-orange-100 hover:text-orange-700"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>


        {/* Mobile menu toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-green-800 p-2"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white text-green-900 flex flex-col w-full h-full md:hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b shadow-md bg-green-900">
            <h2 className="text-xl text-green-100 font-bold">Menu</h2>
            <button className="text-green-100" onClick={toggleMobileMenu} aria-label="Close menu ">
              <FaTimes size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <div className="overflow-y-visible flex-col justify-between items-center px-6 py-4 border-b shadow-md bg-green-100 bg-opacity-90 flex-1 p-6 space-y-4">
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
                  <ul className="mt-2 space-y-2 pl-4 text-base rounded-md py-2">
                    {submenu.map(({ name, path }) => (
                      <li key={name}>
                        <Link
                          to={path}
                          className="block py-1 hover:text-orange-600 transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {name}
                        </Link>
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



































































































// import { useState, useEffect } from "react";
// import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
// import logo1 from "../assets/images/logo1.png";
// import logo2 from "../assets/images/logo2.jpg";
// import logo3 from "../assets/images/logo1.png";
// import logo4 from "../assets/images/logo2.jpg";
// // import logo3 from "../assets/images/logo2.jpg";
// // import logo4 from "../assets/images/logo1.png";
// import callIcon from "../assets/icon/call.png";
// import mailIcon from "../assets/icon/mail.png";


// const LeftLogos = () => {
//   const [showAlt, setShowAlt] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowAlt((prev) => !prev);
//     }, 5000); // every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const logos = showAlt
//     ? [logo3, logo4]
//     : [logo1, logo2];

//   return (
//     <div className="flex-shrink-0 w-56 md:w-72 lg:w-88 xl:w-104 flex h-full">
//       {logos.map((logoSrc, i) => (
//         <img
//           key={i}
//           src={logoSrc}
//           alt={`Logo ${i + 1}`}
//           className="w-1/2 h-full object-contain transition-opacity duration-1000"
//           style={{ minHeight: "110px" }}
//           loading="lazy"
//         />
//       ))}
//     </div>
//   );
// };


// const menuItems = [
//   {
//     title: "Yogdan",
//     submenu: [
//       "Chairmans Message",
//       "Advisors",
//       "Board of Directors",
//       "Office Hours",
//     ],
//   },
//   {
//     title: "Services",
//     submenu: ["Saving Plans", "Loan Plans"],
//   },
//   {
//     title: "Downloads",
//     submenu: ["Financial Reports", "Application Form"],
//   },
//   {
//     title: "Information Center",
//     submenu: ["News", "Notices", "CSR Activities", "Photo Gallery"],
//   },
//   {
//     title: "Career",
//     submenu: ["Positions Hiring", "Apply for Job"],
//   },
// ];

// const quickLinks = [
//   { title: "Interest Rate", href: "#" },
//   { title: "EMI Calculator", href: "#" },
//   { title: "Login", href: "#" },
//   { title: "Contact", href: "contact" },
// ];

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
//   const toggleSubMenu = (index) =>
//     setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);

//   return (
//     <header className="font-sans shadow-md">
//       {/* Container flex for logo + right side content */}
//       <div className="flex bg-orange-500">

//     {/* Left logo section - fixed width, full combined height */}
//         <LeftLogos />

//         {/* Right side - grow full width, flex-col */}
//         <div className="flex-grow flex flex-col w-full">

//           {/* Top Bar: Quick links */}
//           <div className="bg-gray-100 py-2 text-sm flex justify-end items-center px-4 md:px-8 border-b border-orange-600 select-none">
//             <ul className="flex items-center space-x-3 text-gray-700">
//               {quickLinks.map(({ title, href }, idx) => (
//                 <li key={title} className="flex items-center space-x-2">
//                   <a
//                     href={href}
//                     className="hover:text-gray-900 transition-colors duration-200"
//                   >
//                     {title}
//                   </a>
//                   {idx !== quickLinks.length - 1 && (
//                     <span className="text-gray-400 select-none">|</span>
//                   )}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info Bar */}
//           <div className="bg-white border-b border-orange-600 py-2 text-sm hidden md:flex justify-end px-4 md:px-8 space-x-8 text-gray-600">
//             <div className="flex items-center space-x-2">
//               <img src={callIcon} alt="Call icon" className="h-4" loading="lazy" />
//               <span>+977-9860709940</span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <img src={mailIcon} alt="Mail icon" className="h-4" loading="lazy" />
//               <span>info@yogdan.coop.np</span>
//             </div>
//           </div>

//           {/* Navigation Bar */}
//           <nav className="bg-orange-600 shadow-inner border-t border-orange-700">
//             <div className="container mx-auto flex items-center px-4 md:px-8 h-16">
//               {/* Menu Items */}
//               <ul className="hidden md:flex ml-auto items-center space-x-10 text-white font-semibold tracking-wide">
//                 {menuItems.map(({ title, submenu }) => (
//                   <li key={title} className="relative group cursor-pointer">
//                     <button
//                       className="flex items-center gap-1 hover:text-yellow-300 transition-colors duration-300"
//                       aria-haspopup="true"
//                       aria-expanded="false"
//                     >
//                       {title} <FaChevronDown className="mt-1" />
//                     </button>

//                     <ul
//                       className="absolute left-0 top-full mt-0 w-48 bg-white text-gray-800 border border-gray-300 shadow-lg rounded-md opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-200 z-30"
//                     >
//                       {submenu.map((item) => (
//                         <li key={item}>
//                           <a
//                             href="#"
//                             className="block px-4 py-2 hover:bg-yellow-200"
//                             tabIndex={0}
//                           >
//                             {item}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>

//               {/* Mobile Menu Toggle */}
//               <button
//                 className="md:hidden ml-auto text-white p-3 focus:outline-none"
//                 onClick={toggleMobileMenu}
//                 aria-label="Toggle menu"
//               >
//                 {mobileMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
//               </button>
//             </div>

//             {/* Mobile Navigation */}
//             {mobileMenuOpen && (
//               <nav className="md:hidden bg-orange-100 fixed inset-0 z-40 overflow-auto shadow-lg">
//                 <div className="container mx-auto p-6">
//                   <ul>
//                     {menuItems.map(({ title, submenu }, idx) => (
//                       <li key={title} className="border-b border-orange-300">
//                         <button
//                           className="w-full flex justify-between items-center py-4 text-left font-semibold text-orange-700"
//                           onClick={() => toggleSubMenu(idx)}
//                           aria-expanded={openSubMenuIndex === idx}
//                         >
//                           {title}
//                           <FaChevronDown
//                             className={`transition-transform duration-300 ${
//                               openSubMenuIndex === idx ? "rotate-180" : ""
//                             }`}
//                           />
//                         </button>
//                         {openSubMenuIndex === idx && (
//                           <ul className="pl-6 pb-3 space-y-2 text-orange-900">
//                             {submenu.map((item) => (
//                               <li key={item}>
//                                 <a
//                                   href="#"
//                                   className="block py-2 hover:text-orange-700 hover:underline"
//                                 >
//                                   {item}
//                                 </a>
//                               </li>
//                             ))}
//                           </ul>
//                         )}
//                       </li>
//                     ))}

//                     {/* Quick links on mobile */}
//                     {quickLinks.map(({ title, href }) => (
//                       <li key={title} className="border-b border-orange-300">
//                         <a
//                           href={href}
//                           className="block py-4 font-semibold text-orange-700 hover:text-orange-900"
//                         >
//                           {title}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </nav>
//             )}
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
