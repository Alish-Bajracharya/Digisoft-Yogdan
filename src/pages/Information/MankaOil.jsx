import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import MemberSection from "../../components/MemberSection";
import Chairman from "../../assets/member/gyanendra-maharjan.jpg";
import processingImg from "../../assets/images/processing.webp";
import productionImg from "../../assets/images/production.jpg";
import Banner from "../../components/Banner";
import Img2 from "../../assets/member/prem-nath.jpg";
import Img3 from "../../assets/member/hera-bahadur.jpg";
import Img13 from "../../assets/member/ramesh.jpg";
import Img14 from "../../assets/member/kul-ratna.jpg"


const mankaOilMillCommittee = [
  { id: 14, image: Chairman, name: "Mr. Gyanendra Maharjan", position: "Coordinator" },
  { id: 15, image: Img3, name: "Mr. Buddhi Ratna Dangol", position: "Member" },
  { id: 16, image: Img2, name: "Mr. Premnath Maharjan", position: "Member" },
  { id: 17, image: Img13, name: "Mr. Ramesh kr. Maharjan", position: "Member" },
  { id: 18, image: Img14, name: "Mr. Kul-Ratna Maharjan", position: "Member" },
];

const MankaOil = () => {
  return (
    <>
      <Navbar />
      <Banner 
      title="Manka Oil - Pure, Local & Trusted"
      subtitle=""
      />

      {/* History */}
      <section className="py-12 px-4 bg-emerald-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-emerald-500 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-8 text-lg">
            Manka Oil is a collaborative project with Yogdan Consumer Cooperative Pvt. Ltd. 
            We initiated this venture to promote local production, empower farmers, and ensure 
            pure and chemical-free cooking oil. Established in 2080 B.S., Manka Oil reflects 
            our commitment to sustainability, quality, and community development.
            </p>
          </div>
          <img
            src={productionImg}
            alt="Oil Production"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>
    

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <MemberSection title="Manka Oil Mill Committee"  members={mankaOilMillCommittee} />
      </section>

      {/* Processing Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={processingImg}
            alt="Oil Processing"
            className="rounded-xl shadow-lg object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold text-orange-600 mb-4">How We Process</h2>
            <p className="text-gray-700 leading-7 text-lg">
              Manka Oil is extracted using traditional and cold-pressed methods to retain 
              nutrients and original flavors. Seeds are cleaned, sun-dried, and crushed 
              without chemical solvents, ensuring you get the purest oil on your plate.
            </p>
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">Our Production Capacity</h2>
            <p className="text-gray-700 leading-7 text-lg">
              With advanced machinery and cooperative-driven operations, we produce 
              up to 1000+ liters of oil monthly. From mustard to sunflower, 
              every batch meets strict quality standards.
            </p>
          </div>
          <img
            src={productionImg}
            alt="Oil Production"
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MankaOil;
