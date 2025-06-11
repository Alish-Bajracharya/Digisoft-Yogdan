import React from "react";
import BlogCard from "../../components/BlogCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Chairman from "../../assets/advisor/chairman.jpg"
import ImgG from "../../assets/member/girl.jpg"
import ImgB from "../../assets/member/boy.jpg"

const people = [
  {
    id: 1,
    image: ImgB,
    name: "Mr. Rajesh Adhikari",
    position: "Senior Advisor",
  },
  {
    id: 2,
    image: ImgB,
    name: "Mr. Buddhi Dangol",
    position: "Technical Advisor",
  },
  {
    id: 3,
    image: ImgG,
    name: "Dr. Angel Sharma",
    position: "Medical Advisor",
  },
  {
    id: 4,
    image: ImgG,
    name: "Mrs. Rina Bista",
    position: "Law Advisor",
  },
];

const BlogSection = () => {
  return (
    <>
    <Navbar />
    <section className="py-16 mt-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-10">
          Our Advisors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {people.map((person) => (
            <BlogCard
              key={person.id}
              id={person.id}
              image={person.image}
              name={person.name}
              position={person.position}
            />
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default BlogSection;
