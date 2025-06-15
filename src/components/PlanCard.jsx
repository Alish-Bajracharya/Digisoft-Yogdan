import { Link } from "react-router-dom";

const PlanCard = ({ plan }) => {
  return (
    <div className="bg-white max-w-md w-full h-full shadow-md border border-gray-200 hover:shadow-xl hover:border-green-500 transition-transform transform hover:scale-[1.03] p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-bold text-green-700 mb-2">{plan.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
        <ul className="text-sm text-gray-700 list-disc list-inside space-y-1 mb-4">
          {plan.features?.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
      <div>
        <Link
          to="/application-form"
          state={{ selectedPlan: plan }}
          className="inline-block bg-green-600 text-white px-5 py-2 rounded-md hover:bg-orange-500 transition-colors text-sm font-semibold"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default PlanCard;
