const BlogCard = ({ image, name, position }) => {
  return (
    <div className="group relative bg-white w-full max-w-sm h-[400px] border border-gray-200  overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02] flex flex-col">
      
      {/* Image */}
      <div className="h-96 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 mt-1 flex flex-col items-center text-center justify-between flex-1 relative z-10">
        {/* Name with underline */}
        <h3 className="text-xl font-semibold text-emerald-700 relative after:content-[''] after:block after:w-12 after:h-[2px] after:bg-emerald-500 after:mx-auto after:mt-1 group-hover:after:w-16 after:transition-all">
          {name}
        </h3>

        {/* Position */}
        <p className="text-sm text-gray-600 mt-3 italic leading-relaxed">{position}</p>
      </div>

      {/* Decorative background blur */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-100 rounded-full blur-2xl opacity-30 z-0"></div>
    </div>
  );
};

export default BlogCard;
