import Banner from "../../components/Banner.jsx";
import Footer from "../../components/footer.jsx";
import JobCard from "../../components/JobCard.jsx";
import Navbar from "../../components/navbar.jsx";
import Sidebar from "../../components/Sidebar";


const jobs = [
  {
    title: "Loan Officer",
    type: "Full Time",
    location: "Branch Office",
    slug: "loan-officer",
    brief: `We are looking for a Loan Officer to evaluate, authorize approval or deny loan applications for people or for businesses. You will act as a liaison between customers and our financial institution and help qualified applicants acquire loans in a timely manner.`,
    responsibilities: [
      "Evaluate credit worthiness by processing loan applications and documentation within specified limits",
      "Interview applicants to determine financial eligibility",
      "Set up debt payment plans and determine applicable ratios",
      "Communicate with clients for information and documentation",
      "Complete loan contracts and counsel clients on policies",
      "Maintain and update account records and job knowledge",
      "Develop referral networks and cross-sell services",
      "Operate in compliance with lending laws and guidelines"
    ],
    requirements: [
      "Proven experience as a Loan Officer",
      "Familiarity with banking applications/software",
      "Strong understanding of lending products and practices",
      "Excellent communication and interpersonal skills",
      "Customer-first mindset and sales competencies",
      "Bachelor’s degree in finance, economics or related field"
    ]
  },
  {
    title: "Accountant",
    type: "Full Time",
    location: "Head Office",
    slug: "accountant",
    brief: `We're seeking a detail-oriented Accountant to manage financial records, ensure compliance with regulations, and support strategic financial decisions.`,
    responsibilities: [
      "Prepare financial statements and maintain ledgers",
      "Ensure regulatory compliance and manage budgets",
      "Conduct internal audits and financial analysis",
      "Coordinate with external auditors and tax agencies",
      "Contribute to long-term financial planning"
    ],
    requirements: [
      "Bachelor's degree in Accounting or Finance",
      "Proven experience in accounting roles",
      "Proficiency in accounting software and MS Excel",
      "Strong analytical and problem-solving skills",
      "Excellent attention to detail and accuracy"
    ]
  },
  {
    title: "Customer Support Representative",
    type: "Part Time",
    location: "Itahari Branch",
    slug: "customer-support",
    brief: `We’re looking for a friendly and professional Customer Support Representative to assist our cooperative members and provide exceptional service.`,
    responsibilities: [
      "Answer queries related to savings, loans, and services",
      "Resolve complaints and escalate issues when needed",
      "Assist with form submissions and process updates",
      "Maintain positive relationships with clients",
      "Document customer interactions for improvement"
    ],
    requirements: [
      "Strong communication and listening skills",
      "Experience in a customer-facing role is a plus",
      "Basic computer proficiency",
      "Ability to multitask and handle pressure",
      "Service-first attitude and willingness to help"
    ]
  }
];




const Hiring = () => {
  return (
    <>
    <Navbar />
    <Banner 
    title="Current Job Openings"
    subtitle="Explore exciting career opportunities and be a part of our growing cooperative family. We believe in talent, commitment, and continuous growth."
    />
    <section className="min-h-screen bg-gray-50 py-16 px-4 md:px-12 ">
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
