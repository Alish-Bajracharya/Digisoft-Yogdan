import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <div className="bg-white border border-gray-200 overflow-hidden shadow hover:shadow-lg transition-transform hover:-translate-y-1">
      <img
        src={news.image}
        alt={news.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <p className="text-sm text-gray-500">{news.date}</p>
        <h3 className="text-lg font-bold text-green-700 mb-2">{news.title}</h3>
        <p className="text-gray-600 mb-2 line-clamp-3">{news.summary}</p>
        <Link
          to={`/news/${news.id}`}
          className="inline-block bg-orange-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
