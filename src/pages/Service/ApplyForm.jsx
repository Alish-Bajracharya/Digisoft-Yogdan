import { useParams } from "react-router-dom";

const ApplyForm = () => {
  const { planId } = useParams();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-4 text-green-700">Apply for: {planId}</h2>
        {/* Replace with real form */}
        <p className="text-gray-600">Application form coming soon...</p>
      </div>
    </div>
  );
};

export default ApplyForm;
