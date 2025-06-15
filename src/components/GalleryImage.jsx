const Gallery = ({ image }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300">
      <img
        src={image.url}
        alt={image.caption || "Gallery image"}
        className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-sm px-3 py-2 opacity-0 group-hover:opacity-100 transition">
        {image.caption}
      </div>
    </div>
  );
};

export default Gallery;
