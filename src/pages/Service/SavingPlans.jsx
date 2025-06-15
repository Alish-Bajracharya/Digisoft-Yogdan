import PlanCard from "../../components/PlanCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "../../components/Banner";
import Sidebar from "../../components/Sidebar";

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
      <Banner
        title="Our Saving Plans"
        subtitle="Discover a range of personalized saving schemes designed to secure your financial future with trust and transparency."
      />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            {/* Plan Cards */}
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 flex-1">
              {plans.map((plan) => (
                <PlanCard key={plan.id} plan={plan} />
              ))}
            </div>

            {/* Sticky Right Sidebar */}
            <aside className="lg:w-1/3 w-full">
              <div className="sticky top-24"> 
                <Sidebar />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SavingPlans;
