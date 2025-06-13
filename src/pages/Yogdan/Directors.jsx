import React from "react";
import BlogCard from "../../components/BlogCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Chairman from "../../assets/advisor/chairman.jpg"
import ImgG from "../../assets/member/girl.jpg"
import ImgB from "../../assets/member/boy.jpg"
import Banner from "../../components/Banner"


const people = [
  {
    id: 1,
    image: ImgB,
    name: "Mr. Gyannendra Maharjan",
    position: "Chairman",
  },
  {
    id: 2,
    image: ImgB,
    name: "Sangit Pradhan",
    position: "Vice President",
  },
  
];

const BlogSection = () => {
  return (
    <>
    <Navbar />
    <Banner 
      title="Our Board of Directors"
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
