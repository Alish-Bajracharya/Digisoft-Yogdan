import { Link } from "react-router-dom";
import { BriefcaseIcon } from "lucide-react";

const JobCard = ({ title, type, location, description, slug }) => {
  return (
    <div className="bg-white border rounded-xl shadow-md hover:shadow-lg transition-all p-6 space-y-4">
      <div className="flex items-center gap-3">
        <BriefcaseIcon className="text-green-700" />
        <h3 className="text-xl font-semibold text-green-800">{title}</h3>
      </div>
      <p className="text-sm text-gray-600">{description}</p>

      <div className="flex justify-between text-sm text-gray-500">
        <span>{type}</span>
        <span>{location}</span>
      </div>

    <Link
        to={`/hiring/apply/${slug}`}
        className="inline-block bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition font-semibold"
        >
        Apply Now
    </Link>

    </div>
  );
};

export default JobCard;
