import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";
import Loan from "../../assets/download/loan-form.pdf";
import newAcc from "../../assets/download/account-opening-form.pdf";
import mb from "../../assets/download/Mobile-Banking-app.pdf";

const downloadableForms = [
  { name: "Account Opening Form", file: newAcc },
  { name: "Saving Form", file: Loan },
  { name: "Loan Form", file: Loan },
  { name: "Mobile Banking Request Form", file: mb },
];

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    applicationType: "",
    message: "",
    document: null,
  });

  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileType, setFileType] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "document" && files?.[0]) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setPreviewUrl(fileUrl);
      setFileType(file.type);

      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    alert("Application Submitted Successfully!");
  };

  return (
    <>
    <Navbar />
    <Banner 
    title="Cooperative Application Form"
    subtitle="Fill out the form below to apply for membership, savings, or loan plans."
    />
    <section className="bg-gradient-to-br from-white to-green-50 py-20 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section - Downloads */}
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Download Application Forms
          </h2>
          <p className="text-red-900 mb-6">
            NOTE: Please download and fill the required form before submitting it online.
          </p>
          <ul className="space-y-4">
            {downloadableForms.map((form, index) => (
              <li
                key={index}
                className="bg-white border-l-4 border-green-600 px-5 py-3 rounded-md shadow hover:bg-green-50 transition"
              >
                <a
                  href={form.file}
                  download
                  className="flex items-center justify-between text-green-800 font-medium"
                >
                  {form.name}
                  <span className="text-orange-500">⬇</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Online Form */}
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold text-green-700 mb-4">
           Online Application Submission
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700">Citizenship</label>
                <input
                  type="citizenshipid"
                  name="citizenshipid"
                  value={formData.citizenshipid}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Application Type
              </label>
              <select
                name="applicationType"
                value={formData.applicationType}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                required
              >
                <option value="">-- Select --</option>
                <option value="account">Account Opening</option>
                <option value="saving">Saving</option>
                <option value="loan">Loan</option>
                <option value="mobile-banking">Mobile Banking Request</option>
              </select>
            </div>

            {/* Document Upload */}
            <div>
                <label className="block mb-1 font-medium text-gray-700">Document Upload</label>
                <input
                type="file"
                name="document"
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                required
                />
                {/* Preview */}
                {previewUrl && (
                <div className="mt-3">
                    <h4 className="text-sm font-semibold text-gray-700 mb-1">Preview:</h4>
                    {fileType.startsWith("image/") ? (
                    <img
                        src={previewUrl}
                        alt="Preview"
                        className="max-h-48 rounded border border-gray-300"
                    />
                    ) : fileType === "application/pdf" ? (
                    <iframe
                        src={previewUrl}
                        title="PDF Preview"
                        className="w-full h-64 border rounded"
                    ></iframe>
                    ) : (
                    <p className="text-gray-500">File uploaded: {formData.document?.name}</p>
                    )}
                </div>
                )}
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full border rounded-lg px-4 py-2"
              ></textarea>
            </div>

            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition"
            >
                Submit Application
            </button>
            
          </form>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ApplicationForm;

