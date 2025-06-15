import { useEffect, useState } from "react";
import GalleryImage from "../../components/GalleryImage";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";
import axios from "axios";

const Gallery = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch albums with images
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        // Replace this with your actual API endpoint
        const { data } = await axios.get("https://your-api.com/api/gallery");
        setAlbums(data);
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <>
      <Navbar />
      <Banner
        title="Photo Gallery"
        subtitle="Explore key moments, events, and memories from our cooperative journey."
      />

      <section className="min-h-screen bg-gradient-to-tr from-green-50 via-white to-orange-50 py-20 px-4">
        <div className="container mx-auto">
          {loading ? (
            <p className="text-center text-lg">Loading albums...</p>
          ) : (
            albums.map((album) => (
              <div key={album.id} className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-green-800 border-b border-green-400 pb-2">
                  {album.name}
                </h3>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {album.images.map((img) => (
                    <GalleryImage key={img.id} image={img} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Gallery;
