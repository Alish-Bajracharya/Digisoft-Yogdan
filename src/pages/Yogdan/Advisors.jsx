import React from "react";
import BlogCard from "../../components/BlogCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Chairman from "../../assets/member/gyanendra-maharjan.jpg"
import ImgM from "../../assets/member/boy.jpg"
import ImgT from "../../assets/member/buddhi Dangol.pp.jpg"
import Banner from "../../components/Banner"


const people = [
  {
    id: 1,
    image: Chairman,
    name: "Mr. Saroj Rajbhandari",
    position: "Law Advisor",
  },
  {
    id: 2,
    image: ImgT,
    name: "Mr. BuddhiNath Dangol",
    position: "Technical Advisor",
  },
  {
    id: 3,
    image: ImgM,
    name: "Mr. Jiwan Jyoti Bajracharya",
    position: "Medical Advisor",
  },
  
];

const Advisor = () => {
  return (
    <>
    <Navbar />
    <Banner 
      title="Our Advisors"
      subtitle="Vision, Trust, and Commitment to Cooperative Excellence"
    />

    <section className="py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {people.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Advisor;
