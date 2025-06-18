
import { useState, useEffect } from "react";
import axios from "axios";
import GalleryImage from "../../components/GalleryImage";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";
import Img1 from "../../assets/news/1.jpg";
import Img2 from "../../assets/news/2.jpg";
import Img3 from "../../assets/news/1.jpg";

const Gallery = () => {
  const [ setAlbums] = useState([]);
  const [ setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const { data } = await axios.get("https://localhost:5000/api/gallery");
        setAlbums(data);
      } catch (error) {
        console.error("Failed to fetch gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const dummyAlbums = [
    {
      albumName: "Annual General Meeting",
      images: [
        { id: 1, url: Img2, caption: "Opening Ceremony" },
        { id: 2, url: Img1, caption: "Keynote Speech" },
        { id: 3, url: Img2, caption: "Group Photo" },
      ],
    },
    {
      albumName: "Branch Inauguration",
      images: [
        { id: 4, url: Img2, caption: "Ribbon Cutting" },
        { id: 5, url: Img3, caption: "New Office Tour" },
      ],
    },
    {
      albumName: "Community Outreach",
      images: [
        { id: 6, url: Img1, caption: "Tree Plantation" },
        { id: 7, url: Img2, caption: "Health Camp" },
        { id: 8, url: Img3, caption: "Volunteer Group" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <Banner
        title="Photo Gallery"
        subtitle="Explore key moments, events, and memories from our cooperative journey."
      />

      <section className="min-h-screen bg-gradient-to-tr from-green-50 via-white to-orange-50 py-20 px-4">
        <div className="container mx-auto">
          {dummyAlbums.map((album, idx) => (
            <div key={idx} className="mb-16">
              <h3 className="text-2xl font-bold text-green-700 mb-6 border-b pb-2">
                {album.albumName}
              </h3>
              <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {album.images.map((image) => (
                  <GalleryImage key={image.id} image={image} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;

