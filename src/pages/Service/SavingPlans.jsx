import SavingPlanCard from "../../components/PlanCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
const SavingPlans = () => {
  const plans = [
    {
      id: "daily",
      name: "Daily Saving Plan",
      description: "Ideal for small daily savings with flexible terms.",
      features: [
        "Daily deposit starting from Rs. 50",
        "Attractive interest rates",
        "Withdraw anytime after minimum tenure",
      ],
    },
    {
      id: "monthly",
      name: "Monthly Saving Plan",
      description: "Designed for consistent monthly savers.",
      features: [
        "Minimum Rs. 500/month",
        "Interest compounded quarterly",
        "Eligibility for cooperative loans",
      ],
    },
    {
      id: "fixed",
      name: "Fixed Deposit Plan",
      description: "Lock-in your savings and grow securely.",
      features: [
        "Tenure: 6 months to 5 years",
        "Higher interest rates for longer durations",
        "Premature withdrawal with partial penalty",
      ],
    },
    {
      id: "child",
      name: "Child Education Plan",
      description: "Plan your child's future with discipline.",
      features: [
        "Min. Rs. 200/month until maturity",
        "Bonus on maturity",
        "Nominee benefit options",
      ],
    },
    {
        id: "senior",
        name: "Senior Citizen Saving",
        description: "Tailored for members aged 60+, this plan ensures worry-free golden years.",
        features: [
        "Bonus interest rates",
        "Free medical consultation tie-ups",
        "Quarterly dividend payouts",
        ],
    },
  ];

  return (
    <>
    <Navbar />
        {/* Banner */}
      <section className="bg-green-700 text-white py-16 mt-24 text-center">
        <h1 className="text-4xl font-bold">Our Saving Plans</h1>
        <p className="text-orange-300 mt-4 max-w-xl mx-auto">
          Discover a range of personalized saving schemes designed to secure your financial future with trust and transparency.
        </p>
      </section >
      <section>
        <div className="grid mt-10 ml-10 mr-10 mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <SavingPlanCard key={plan.id} plan={plan} />
          ))}
        </div>
  
    </section>
    <Footer/>
    </>
  );
};

export default SavingPlans;
