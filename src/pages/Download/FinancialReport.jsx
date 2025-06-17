import { FaFilePdf } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import mb from "../../assets/download/Mobile-Banking-app.pdf";
import acc from "../../assets/download/account-opening-form.pdf";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";
import Sidebar from "../../components/Sidebar";

const financialReports = [
  {
    year: 2024,
    reports: [
      {
        title: "Annual Financial Report",
        fileUrl: mb,
      },
      {
        title: "Q1 Financial Summary",
        fileUrl: acc,
      },
    ],
  },
  {
    year: 2023,
    reports: [
      {
        title: "Annual Financial Report",
        fileUrl: mb,
      },
      {
        title: "Q4 Financial Summary",
        fileUrl: acc,
      },
    ],
  },
];

const FinancialReport = () => {
  return (
    <>
      <Navbar />
      <Banner
        title="Financial Reports"
        subtitle="Our Fiscal Year Report"
      />
      <section className="bg-gradient-to-br from-white to-green-50 py-16 px-6">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Financial Reports */}
          <div className="lg:col-span-2">
            {financialReports.map((yearGroup, index) => (
              <div key={index} className="mb-10">
                <h2 className="text-2xl font-semibold text-orange-600 mb-4 border-b pb-2">
                  {yearGroup.year}
                </h2>

                <div className="grid sm:grid-cols-2 gap-6">
                  {yearGroup.reports.map((report, idx) => (
                    <div
                      key={idx}
                      className="bg-white shadow-md border border-gray-200 rounded-xl p-6 hover:shadow-lg transition group"
                    >
                      <div className="flex items-start gap-4">
                        <FaFilePdf className="text-red-600 text-4xl group-hover:scale-110 transition" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">
                            {report.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">PDF Document</p>
                          <a
                            href={report.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-orange-600 text-sm font-medium transition"
                          >
                            <MdDownload className="text-xl" />
                            Download
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: Sidebar */}
          <div className="h-fit">
            <Sidebar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FinancialReport;
