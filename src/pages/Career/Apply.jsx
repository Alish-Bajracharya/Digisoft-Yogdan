import { useParams } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";

const ApplyForJob = () => {
  const { slug } = useParams();

  return (
    <>.
   <Navbar />
   <Banner 
   title="Join With Us"
   subtitle="We are ready to collaborate with you!"
   />
    <section className="min-h-screen py-16 px-4 -mb-96 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-green-700 mb-4">
          Apply for {slug.replace("-", " ").toUpperCase()}
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded"
          />
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="w-full p-3 border rounded"
          />
          <button className="bg-orange-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition font-semibold">
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
