import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ id, image, name, position}) => {
  return (
    <Link
      to={`/profile/${id}`}
      className="block group transition-transform transform hover:scale-[1.02]"
    >
      <div className="bg-white w-11/12 border border-transparent hover:border-green-600 shadow-md hover:shadow-lg overflow-hidden transition duration-300">
        {/* Image with zoom */}
        <div className="overflow-hidden w-full h-64 bg-gray-200">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => (e.target.src = "/default-profile.png")}
          />
        </div>

        {/* Info */}
        <div className="p-5 text-center">
          <h3 className="text-xl font-bold text-green-900 mb-1">{name}</h3>
          <p className="text-orange-400 font-semibold text-sm mb-2 uppercase tracking-wide">
            {position}
          </p>
          {/* {description && (
            <p className="text-gray-600 text-sm">{description}</p>
          )} */}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
