import React from "react";
import BlogCard from "../../components/BlogCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Chairman from "../../assets/advisor/chairman.jpg"
import Img1 from "../../assets/member/1.jpg"
import Img2 from "../../assets/member/2.jpg"
import Img3 from "../../assets/member/3.jpg"
import Img4 from "../../assets/member/4.jpg"
import Img5 from "../../assets/member/5.jpg"
import Img6 from "../../assets/member/6.jpg"
import Img7 from "../../assets/member/7.jpg"
import Img8 from "../../assets/member/8.jpg"
import Img9 from "../../assets/member/9.jpg"
import Img10 from "../../assets/member/10.jpg"
import Banner from "../../components/Banner"

const people = [
  {
    id: 1,
    image: Img1,
    name: "Mr. Rajesh Adhikari",
    position: "Senior Advisor",
  },
  {
    id: 2,
    image: Img2,
    name: "Mr. Buddhi Dangol",
    position: "Technical Advisor",
  },
  {
    id: 3,
    image: Img3,
    name: "Dr. Angel Sharma",
    position: "Medical Advisor",
  },
  {
    id: 4,
    image: Img4,
    name: "Mrs. Rina Bista",
    position: "Law Advisor",
  },
  {
    id: 5,
    image: Img5,
    name: "Mrs. Rina Bista",
    position: "Law Advisor",
  },
  {
    id: 6,
    image: Img6,
    name: "Mrs. Rina Bista",
    position: "Law Advisor",
  },
  {
    id: 7,
    image: Img7,
    name: "Mrs. Rina Bista",
    position: "Law Advisor",
  },
  {
    id: 8,
    image: Img8,
    name: "Mrs. Rina Bista",
    position: "Law Advisor",
  },
  {
    id: 9,
    image: Img9,
    name: "Mrs. Rina Bista",
    position: "Law Advisor",
  },
  {
    id: 10,
    image: Img10,
    name: "Mrs. Rina Bista",
    position: "Law Advisor",
  },
];

const BlogSection = () => {
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

export default BlogSection;
