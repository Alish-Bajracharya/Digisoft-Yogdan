import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import PlanCard from "../../components/PlanCard";
import Banner from "../../components/Banner";

const LoanPlans = () => {
  
  const plans = [
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
    <Banner 
      title="Our Loan Plans"
      subtitle="Whether it's personal, educational, agricultural, or business needs, we offer a range of loan options tailored to your goals."
    />
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>

    <Footer />
    </>
  );
};

export default LoanPlans;
