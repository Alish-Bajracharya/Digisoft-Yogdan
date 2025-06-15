import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";
import Sidebar from "../../components/Sidebar";

import { FileDown } from "lucide-react";

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
  return (
    <>
      <Navbar />
      <Banner
        title="Cooperative Application Form Center"
        subtitle="Download & submit essential cooperative forms easily"
      />

      <section className="bg-gradient-to-br from-white to-green-50 py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow-lg p-8 border-l-4 border-green-600">
              <h2 className="text-3xl font-bold text-green-800 mb-4">
                 Download Application Forms
              </h2>
              <p className="text-gray-700 mb-6">
                Please download and fill out the necessary forms before physical submission. 
                Forms are available in printable PDF format.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {downloadableForms.map((form, index) => (
                  <a
                    key={index}
                    href={form.file}
                    download
                    className="flex items-center justify-between p-4 bg-green-100 rounded-lg shadow hover:bg-green-200 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <FileDown className="text-green-800 group-hover:scale-110 transition" />
                      <span className="text-green-900 font-medium">{form.name}</span>
                    </div>
                    <span className="text-orange-600 font-bold text-xl group-hover:animate-bounce">
                      ⬇
                    </span>
                  </a>
                ))}
              </div>

              {/* Tips or Help Section */}
              <div className="mt-10 bg-green-50 border border-green-200 p-5 rounded-lg">
                <h4 className="text-green-800 font-semibold mb-2">
                  Need Help Choosing the Right Form?
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>New members should start with the "Account Opening Form".</li>
                  <li>Existing members applying for financial support should download the "Loan Form".</li>
                  <li>For savings upgrades, use the "Saving Form".</li>
                  <li>Activate your digital access with the "Mobile Banking Request Form".</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="h-fit">
            <Sidebar />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ApplicationForm;
