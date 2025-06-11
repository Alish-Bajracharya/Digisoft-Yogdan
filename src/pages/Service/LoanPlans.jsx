import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PlanCard from "../../components/PlanCard";

const LoanPlans = () => {
  const loanPlans = [
    {
      id: "personal-loan",
      name: "Personal Loan",
      description: "Quick and easy personal loans for your urgent needs.",
      features: [
        "Loan up to Rs. 5,00,000",
        "Flexible repayment options",
        "Competitive interest rates",
      ],
    },
    {
      id: "education-loan",
      name: "Education Loan",
      description: "Support for students pursuing higher education.",
      features: [
        "Covers tuition and living expenses",
        "Low interest for students",
        "Grace period for repayment",
      ],
    },
    {
      id: "agriculture-loan",
      name: "Agriculture Loan",
      description: "Designed for farmers and agro-based businesses.",
      features: [
        "Loan up to Rs. 10,00,000",
        "Seasonal repayment plans",
        "No hidden charges",
      ],
    },
    {
      id: "business-loan",
      name: "Business Loan",
      description: "Boost your startup or expand your existing business.",
      features: [
        "Fast approval within 3 days",
        "Collateral-free options available",
        "Support for women entrepreneurs",
      ],
    },
  ];

  return (
    <>
    <Navbar />
        {/* Banner */}
      <section className="bg-green-700 text-white py-16 mt-24 text-center">
        <h1 className="text-4xl font-bold">Our Loan Plans</h1>
        <p className="text-orange-300 mt-4 max-w-xl mx-auto">
          Whether it's personal, educational, agricultural, or business needs, we offer a range of loan options tailored to your goals.
        </p>
      </section >
      <section>
        <div className="grid mt-10 ml-10 mr-10 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {loanPlans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
  
    </section>
    <Footer />
    </>
  );
};

export default LoanPlans;
