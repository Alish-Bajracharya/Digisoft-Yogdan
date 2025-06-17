import { useParams } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";
import { FaFileUpload } from "react-icons/fa";

const ApplyForJob = () => {
  const { slug } = useParams();
  const jobTitle = slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

  const [cvFileName, setCvFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCvFileName(file.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
  };

  return (
    <>
      <Navbar />
      <Banner 
        title="Join With Us"
        subtitle="We are ready to collaborate with you!"
      />

      <section className="min-h-screen py-20 px-4 md:px-0 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-green-700 mb-6">
            Apply for {jobTitle}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-4 md:p-6 border shadow-sm">
            {/* Grid Inputs */}
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="input" required />
              <input type="email" placeholder="Email Address" className="input" required />
              <input type="tel" placeholder="Phone Number" className="input" required />
              <input type="text" placeholder="Address" className="input" required />
              <input type="text" placeholder="Years of Experience" className="input" required />
            </div>

            {/* Job position (auto-filled & disabled) */}
            <input
              type="text"
              className="input bg-gray-100 cursor-not-allowed"
              value={jobTitle}
              disabled
            />

            {/* File Upload */}
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-3 cursor-pointer text-sm text-gray-600">
                <FaFileUpload className="text-lg text-green-700" />
                Upload CV
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={handleFileChange}
                  required
                />
              </label>
              {cvFileName && (
                <span className="text-sm text-gray-500 truncate">{cvFileName}</span>
              )}
            </div>

            {/* Message box */}
            <textarea
              rows="4"
              placeholder="Why do you want to work with us?"
              className="input"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-700 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ApplyForJob;
