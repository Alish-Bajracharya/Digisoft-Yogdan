const BlogCard = ({ image, name, position }) => {
  return (
    <div className="relative bg-white w-full max-w-xs h-[250px] border border-gray-200shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-2 group p-5 flex flex-col items-center overflow-hidden animate-fade-in-up">
      
      {/* Decorative ring on hover */}
      <div className="w-32 h-32 rounded-full mb-4 relative">
        <div className="absolute inset-0 rounded-full group-hover:border-gradient-to-tr group-hover:from-green-600 group-hover:to-lime-400 transition-all duration-500"></div>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full transition-transform duration-500 transform group-hover:scale-110 border-4 border-orange-400 z-10 relative"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-green-800 group-hover:text-green-900 transition-colors duration-300">
        {name}
      </h3>

      {/* Position */}
      <p className="text-sm text-gray-500 mt-3 px-2 text-center italic">
        {position}
      </p>

      {/* Decorative background shape */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-100 rounded-full blur-2xl opacity-30 z-0"></div>
    </div>
  );
};

export default BlogCard;
