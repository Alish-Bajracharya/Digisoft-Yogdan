import Banner from "../../components/Banner.jsx";
import Footer from "../../components/footer.jsx";
import JobCard from "../../components/JobCard.jsx";
import Navbar from "../../components/navbar.jsx";
import Sidebar from "../../components/Sidebar";


const jobs = [
  {
    title: "Accountant",
    type: "Full Time",
    location: "Head Office",
    description: `
      As a cooperative accountant, you'll manage financial transactions, generate reports, and ensure compliance with government regulations. 
      Responsibilities include preparing financial statements, maintaining ledgers, monitoring budgets, and conducting internal audits. 
      You'll also coordinate with external auditors and support strategic financial planning for sustainable growth.
    `,
    slug: "accountant",
  },
  {
    title: "Loan Officer",
    type: "Full Time",
    location: "Branch Office",
    description: `
      The Loan Officer is responsible for evaluating, authorizing, and recommending loan applications. 
      You'll assess borrowers’ creditworthiness, analyze financial documents, and explain loan types, terms, and payment plans. 
      Regular follow-ups, maintaining client relationships, and helping members understand borrowing responsibilities are key parts of the role.
    `,
    slug: "loan-officer",
  },
  {
    title: "Customer Support Representative",
    type: "Part Time",
    location: "Itahari Branch",
    description: `
      You’ll serve as the first point of contact for members, handling queries regarding savings, loans, and mobile banking. 
      Responsibilities include resolving complaints, providing accurate information, assisting with form submissions, 
      and escalating issues when necessary. Strong communication skills and a service-first mindset are essential.
    `,
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
    <section className="min-h-screen bg-gray-50 py-16 px-4 md:px-12 -mb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Main Content: Job Listings */}
        <div className="lg:col-span-3">
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.slug} {...job} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

      </div>
    </section>

    <Footer />
    </>
  );
};

export default Hiring;
