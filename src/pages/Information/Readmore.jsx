import { useParams } from "react-router-dom";

const ReadMore = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        News Title: {id}
      </h1>
      <p className="text-sm text-gray-500 mb-6">Published on: 2078/10/15</p>
      <img
        src= {id}
        alt="News"
        className="rounded-lg mb-6 w-full h-80 object-cover"
      />
      <p className="text-gray-700 leading-relaxed">
        [This is where the full news content would be shown. Pull this content from your backend or CMS.]
      </p>
    </div>
  );
};

export default ReadMore;
