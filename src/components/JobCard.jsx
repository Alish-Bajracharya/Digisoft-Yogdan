import { useState } from "react";
import { Link } from "react-router-dom";
import { BriefcaseIcon } from "lucide-react";

const Section = ({ title, items }) => (
  <div className="mt-3">
    <h4 className="text-sm font-semibold text-green-800 mb-1">{title}</h4>
    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
);

const JobCard = ({ title, type, location, slug, brief, responsibilities, requirements }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border shadow-md hover:shadow-lg transition-all p-6 rounded-md flex flex-col justify-between">
      {/* Title */}
      <div className="flex items-center gap-3 mb-2">
        <BriefcaseIcon className="text-green-700" />
        <h3 className="text-xl font-semibold text-green-800">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600">{brief}</p>

      {expanded && (
        <>
          <Section title="Responsibilities" items={responsibilities} />
          <Section title="Requirements and Skills" items={requirements} />
        </>
      )}

      {/* Buttons */}
      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sm text-orange-600 hover:underline focus:outline-none self-start"
        >
          {expanded ? "Show Less" : "View Full Details"}
        </button>

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
