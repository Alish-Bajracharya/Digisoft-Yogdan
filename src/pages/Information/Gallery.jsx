import { useState } from "react";
import GalleryImage from "../../components/GalleryImage";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";
import Imaag1 from "../../assets/news/2.jpg"

const Gallery = () => {
  const [category, setCategory] = useState("all");

  const allImages = [
    {
      id: 1,
      url: Imaag1,
      caption: "Annual General Meeting",
      category: "events",
    },
    {
      id: 2,
      url: Imaag1,
      caption: "Advisor Member Interaction",
      category: "members",
    },
    {
      id: 3,
      url: Imaag1,
      caption: "New Branch Inauguration",
      category: "office",
    },
    {
      id: 4,
      url: Imaag1,
      caption: "Community Development Event",
      category: "events",
    },
    {
      id: 5,
      url: Imaag1,
      caption: "Member Recognition Ceremony",
      category: "members",
    },
  ];

  const filteredImages =
    category === "all"
      ? allImages
      : allImages.filter((img) => img.category === category);

  const categories = ["all", "events", "members", "office"];

  return (
    <>
    <Navbar/>
    <Banner 
    title= "Photo Gallery"
    subtitle="Explore key moments, events, and memories from our cooperative journey."
    />
    <section className="min-h-screen bg-gradient-to-tr from-green-50 via-white to-orange-50 py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition ${
                category === cat
                  ? "bg-green-600 text-white"
                  : "bg-white text-green-700 border-green-400 hover:bg-green-100"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredImages.map((img) => (
            <GalleryImage key={img.id} image={img} />
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default Gallery;
