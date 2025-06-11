import { Link } from "react-router-dom";

const PlanCard = ({ plan }) => {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition transform hover:scale-105 border border-gray-200 hover:border-green-500 p-6">
      <h3 className="text-xl font-bold text-green-700 mb-2">{plan.name}</h3>
      <p className="text-gray-600 mb-4">{plan.description}</p>
      <ul className="text-sm text-gray-700 mb-4 list-disc list-inside space-y-1">
        {plan.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <Link
        to={`/apply/${plan.id}`}
        className="inline-block bg-green-600 text-white px-5 py-2 rounded hover:bg-orange-500 transition text-sm font-semibold"
      >
        Apply Now
      </Link>
    </div>
  );
};

export default PlanCard;
