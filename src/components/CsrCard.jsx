const CsrCard = ({ activity }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden">
      <img
        src={activity.image}
        alt={activity.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-green-800 mb-2">
          {activity.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-3">
          {activity.description}
        </p>
        <span className="text-xs text-orange-600 font-medium">
          {activity.date}
        </span>
      </div>
    </div>
  );
};

export default CsrCard;
