import Banner from "../../components/Banner.jsx";
import Footer from "../../components/footer.jsx";
import JobCard from "../../components/JobCard.jsx";
import Navbar from "../../components/navbar.jsx";

const jobs = [
  {
    title: "Accountant",
    type: "Full Time",
    location: "Head Office",
    description: "Responsible for managing cooperative accounting and financial reporting.",
    slug: "accountant",
  },
  {
    title: "Loan Officer",
    type: "Full Time",
    location: "Branch Office",
    description: "Evaluate, authorize, and monitor loan applications and disbursements.",
    slug: "loan-officer",
  },
  {
    title: "Customer Support Representative",
    type: "Part Time",
    location: "Itahari Branch",
    description: "Assist members with inquiries and service-related issues.",
    slug: "customer-support",
  },
];

const Hiring = () => {
  return (
    <>
    <Navbar />
    <Banner 
    title="Current Job Openings"
    subtitle="Explore exciting career opportunities and be a part of our growing cooperative family. We believe in talent, commitment, and continuous growth."
    />
    <section className="min-h-screen bg-gray-50 py-16 px-4 -mb-96 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <JobCard key={job.slug} {...job} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Hiring;
