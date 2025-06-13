import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "../../components/Banner";

const Interest = () => {
  const interestData = [
    { title: "Regular Saving", depositRate: "5.5%", loanRate: "13%" },
    { title: "Fixed Deposit (1 Year)", depositRate: "9%", loanRate: "13.5%" },
    { title: "Fixed Deposit (3 Year)", depositRate: "10%", loanRate: "14%" },
    { title: "Child Saving", depositRate: "6.5%", loanRate: "N/A" },
    { title: "Senior Citizen Saving", depositRate: "7%", loanRate: "N/A" },
    { title: "Agriculture Loan", depositRate: "N/A", loanRate: "11%" },
    { title: "Business Loan", depositRate: "N/A", loanRate: "13%" },
    { title: "Housing Loan", depositRate: "N/A", loanRate: "12.5%" },
  ];

  return (
    <>
    <Navbar />
    <Banner 
    title="Interest Rates"
    subtitle="Explore our competitive deposit and loan interest rates to find a plan that suits your financial needs. All rates are subject to periodic revision as per cooperative policies."
    />
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16 px-4 -mb-40">
      <div className="max-w-6xl mx-auto">
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-green-600 text-white text-lg">
              <tr>
                <th className="py-4 px-6 text-left">Plan Name</th>
                <th className="py-4 px-6 text-left">Deposit Rate</th>
                <th className="py-4 px-6 text-left">Loan Rate</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-md">
              {interestData.map((item, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 hover:bg-green-50 transition duration-200`}
                >
                  <td className="py-4 px-6 font-medium">{item.title}</td>
                  <td className="py-4 px-6">{item.depositRate}</td>
                  <td className="py-4 px-6">{item.loanRate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            * Rates are subject to change based on market conditions and cooperative decisions.
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Interest;