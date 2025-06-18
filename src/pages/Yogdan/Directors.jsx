import React from "react";

import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "../../components/Banner";
import MemberSection from "../../components/MemberSection";

import Chairman from "../../assets/member/gyanendra-maharjan.jpg";
import Img1 from "../../assets/member/buddhi Dangol.pp.jpg";
import Img2 from "../../assets/member/prem-nath.jpg";
import Img3 from "../../assets/member/hera-bahadur.jpg";
import Img4 from "../../assets/member/keshar-bahadur.jpg";
import Img5 from "../../assets/member/suryabati.jpg";
import Img6 from "../../assets/member/maheswori.jpg";
import Img7 from "../../assets/member/renu-maharjan.jpg";
import Img9 from "../../assets/member/bharat.jpg";
import Img10 from "../../assets/member/boy.jpg";
import Img11 from "../../assets/member/keshar-bahadur.jpg";
import Img13 from "../../assets/member/ramesh.jpg";
import Img14 from "../../assets/member/kul-ratna.jpg"


const boardOfDirectors = [
  { id: 1, image: Chairman, name: "Mr. Gyanendra Maharjan", position: "Chairman" },
  { id: 2, image: Img1, name: "Mr. Buddhi Ratna Dangol", position: "Secretary" },
  { id: 3, image: Img2, name: "Mr. Premnath Maharjan", position: "Treasurer" },
  { id: 4, image: Img3, name: "Mr. Hera Br. Dangol", position: "Member" },
  { id: 5, image: Img4, name: "Mr. Keshar Br. Dangol", position: "Member" },
  { id: 6, image: Img5, name: "Mr. Surya Bati Maharjan", position: "Member" },
  { id: 7, image: Img7, name: "Ms. Renu Maharjan", position: "Member" },
];

const accountsCommittee = [
  { id: 8, image: Img10, name: "Mr. Krishna Govinda Maharjan", position: "Coordinator" },
  { id: 9, image: Img9, name: "Mr. Bharat Maharjan", position: "Member" },
  { id: 10, image: Img10, name: "Mr. Saroj Maharjan", position: "Member" },
];


const CreditandValuationCommittee = [
  { id: 11, image: Img11, name: "Mr. Keshar Bahadir Dangol", position: "Coordinator" },
  { id: 12, image: Img3, name: "Mr. Hera Bahadur Dangol", position: "Member" },
  { id: 13, image: Img10, name: "Mr. Gyanlal Maharjan", position: "Member" },
];

const mankaOilMillCommittee = [
  { id: 14, image: Chairman, name: "Mr. Gyanendra Maharjan", position: "Coordinator" },
  { id: 15, image: Img3, name: "Mr. Buddhi Ratna Dangol", position: "Member" },
  { id: 16, image: Img2, name: "Mr. Premnath Maharjan", position: "Member" },
  { id: 17, image: Img13, name: "Mr. Ramesh kr. Maharjan", position: "Member" },
  { id: 18, image: Img14, name: "Mr. Kul-Ratna Maharjan", position: "Member" },
];

const Director = () => {
  return (
    <>
      <Navbar />
      <Banner
      title="Our Executive Members"
      subtitle="Meet the Dedicated Individuals Powering Our Cooperative’s Vision"
    />

      <MemberSection title="Board of Directors" members={boardOfDirectors} />
      <MemberSection title="Accounts Committee" members={accountsCommittee} />
      <MemberSection title="Credit and Valuation Committee" members={CreditandValuationCommittee} />
      <MemberSection title="Manka Oil Mill Committee" members={mankaOilMillCommittee} />

      <Footer />
    </>
  );
};

export default Director;
