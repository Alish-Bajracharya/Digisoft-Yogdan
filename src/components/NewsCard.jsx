import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const NewsCard = ({ news }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => setExpanded(!expanded);

  return (
    <div className="bg-white border border-gray-200 overflow-hidden shadow hover:shadow-lg transition-transform hover:-translate-y-1 duration-300 rounded">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-5">
        <p className="text-sm text-gray-500">{news.date}</p>
        <h3 className="text-lg font-bold text-green-700 mb-2">{news.title}</h3>

        <p className={`text-gray-600 mb-2 ${expanded ? '' : 'line-clamp-3'}`}>
          {news.summary}
        </p>

        {/* Animated expandable content */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            expanded ? 'max-h-[1000px] mt-2' : 'max-h-0'
          }`}
        >
          <p className="text-gray-700 text-sm mb-2">{news.details}</p>
          {news.extraImage && (
            <img
              src={news.extraImage}
              alt="Extra visual"
              className="w-full h-40 object-cover rounded mb-2"
            />
          )}
          {news.link && (
            <a
              href={news.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 underline"
            >
              Learn more
            </a>
          )}
        </div>

        <button
          onClick={toggleReadMore}
          className="mt-3 flex items-center gap-1 text-orange-600 hover:text-green-700 text-sm font-semibold transition"
        >
          {expanded ? (
            <>
              Show Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
