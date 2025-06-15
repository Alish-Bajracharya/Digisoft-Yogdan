import { useState } from "react";
import { Link } from "react-router-dom";
import { BriefcaseIcon } from "lucide-react";

const JobCard = ({ title, type, location, description, slug }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="bg-white border shadow-md hover:shadow-lg transition-all p-6 flex flex-col justify-between">
      {/* Title */}
      <div className="flex items-center gap-3 mb-2">
        <BriefcaseIcon className="text-green-700" />
        <h3 className="text-xl font-semibold text-green-800">{title}</h3>
      </div>

      {/* Description */}
      <p className={`text-sm text-gray-600 ${expanded ? "" : "line-clamp-3"}`}>
        {description} {/* Can replace this with long description if needed */}
      </p>

      {/* Read More button */}
      <button
        onClick={toggleExpand}
        className="text-sm text-orange-600 mt-2 hover:underline focus:outline-none"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>

      {/* Job Details & CTA */}
      <div className="mt-4 space-y-3">
        <div className="flex justify-between text-sm text-gray-500">
          <span>{type}</span>
          <span>{location}</span>
        </div>

        <Link
          to={`/hiring/apply/${slug}`}
          className="block w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition text-center font-semibold"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
