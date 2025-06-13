import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";
import Img1 from "../../assets/service/save.jpg"

const ApplyJob = () => {

  const [cvFileName, setCvFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setCvFileName(file.name);
  };
  
  return (
   <>.
   <Navbar />
   <Banner 
   title="Join With Us"
   subtitle="We are ready to collaborate with you!"
   />
    <div className="min-h-screen bg-gray-50 py-16 px-4 -mb-32 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info Section */}
          <div className="bg-white p-6 rounded-xl shadow-md border">
            <h2 className="text-2xl font-semibold text-orange-600 mb-4">Join Our Team</h2>
            <p className="text-gray-700 mb-6">
              At our Cooperative, we are always seeking passionate and skilled individuals
              to grow with us. Whether you're experienced or a fresh graduate, we welcome your application.
            </p>
   
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Transparent Hiring Process</li>
              <li>Friendly and Professional Work Environment</li>
              <li>Opportunities for Growth</li>
              <li>Training and Skill Development</li>
            </ul>
            <img src={Img1} alt="" className="mt-2 h-60 w-full"/>
          </div>

          {/* Form Section */}
          <form className="bg-white p-6 rounded-xl shadow-md border space-y-5">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Application Form</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="input" required />
              <input type="email" placeholder="Email Address" className="input" required />
              <input type="tel" placeholder="Phone Number" className="input" required />
              <input type="text" placeholder="Address" className="input" required/>
             <input type="text" placeholder="Year of Experience" className="input" required/>

            </div>

            <select className="input" required>
              <option value="">Select Job Position</option>
              <option value="accountant">Accountant</option>
              <option value="customer_support">Customer Support</option>
              <option value="loan_officer">Loan Officer</option>
              <option value="it_admin">IT Administrator</option>
            </select>

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

            <textarea
              rows="4"
              placeholder="Why do you want to work with us?"
              className="input"
            ></textarea>

            <button
              type="submit"
              className="bg-green-700 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ApplyJob;
