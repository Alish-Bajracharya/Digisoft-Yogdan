// components/EMICalculatorModal.jsx
import React, { useState } from "react";
import { X, Download } from "lucide-react";
import dayjs from "dayjs";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const EMICalculator = ({ isOpen, onClose }) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [firstPaymentDate, setFirstPaymentDate] = useState("");
  const [amortizationType, setAmortizationType] = useState("monthly");
  const [schedule, setSchedule] = useState([]);
  const [summary, setSummary] = useState(null);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseInt(loanTerm) * 12;

    if (!P || !R || !N || !firstPaymentDate) return;

    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    let balance = P;
    const scheduleData = [];
    let currentDate = dayjs(firstPaymentDate);

    for (let i = 1; i <= N; i++) {
      const interest = balance * R;
      const principal = emi - interest;
      balance -= principal;

      if (
        (amortizationType === "monthly") ||
        (amortizationType === "yearly" && i % 12 === 0)
      ) {
        scheduleData.push({
          date: currentDate.format("MMM YYYY"),
          principal: principal.toFixed(2),
          interest: interest.toFixed(2),
          balance: balance > 0 ? balance.toFixed(2) : "0.00",
        });
      }

      currentDate = currentDate.add(1, "month");
    }

    setSchedule(scheduleData);
    setSummary({
      monthlyPayment: emi.toFixed(2),
      totalPayment: (emi * N).toFixed(2),
      payoffDate: currentDate.format("MMM YYYY"),
    });
  };

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("EMI Amortization Schedule", 14, 16);

    autoTable(doc, {
      startY: 20,
      head: [["Date", "Principal", "Interest", "Balance"]],
      body: schedule.map(row => [row.date, `Rs ${row.principal}`, `Rs ${row.interest}`, `Rs ${row.balance}`]),
      foot: [[
        "Total",
        `Rs ${schedule.reduce((acc, r) => acc + parseFloat(r.principal), 0).toFixed(2)}`,
        `Rs ${schedule.reduce((acc, r) => acc + parseFloat(r.interest), 0).toFixed(2)}`,
        "-"
      ]],
    });

    doc.save("EMI_Schedule.pdf");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-[9999] inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white max-w-5xl w-full rounded-lg shadow-lg p-8 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">EMI Calculator</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="number"
            placeholder="Loan Amount (Rs)"
            className="border p-3 rounded w-full"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
          <input
            type="number"
            placeholder="Loan Term (Years)"
            className="border p-3 rounded w-full"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
          <input
            type="number"
            placeholder="Interest Rate (%)"
            className="border p-3 rounded w-full"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />
          <input
            type="date"
            placeholder="First Payment Date"
            className="border p-3 rounded w-full"
            value={firstPaymentDate}
            onChange={(e) => setFirstPaymentDate(e.target.value)}
          />

          <select
            className="border p-3 rounded w-full md:col-span-2"
            value={amortizationType}
            onChange={(e) => setAmortizationType(e.target.value)}
          >
            <option value="monthly">Amortization: Monthly</option>
            <option value="yearly">Amortization: Yearly</option>
          </select>
        </div>

        <button
          onClick={calculateEMI}
          className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 w-full md:w-auto mx-auto block"
        >
          Calculate EMI
        </button>

        {summary && (
          <div className="mt-8 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-green-700">Results</h3>
            <p><strong>Monthly Payment:</strong> Rs {summary.monthlyPayment}</p>
            <p><strong>Total Payment:</strong> Rs {summary.totalPayment}</p>
            <p><strong>Payoff Date:</strong> {summary.payoffDate}</p>
          </div>
        )}

        {schedule.length > 0 && (
          <>
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-green-700 text-white">
                    <th className="p-2 border">Date</th>
                    <th className="p-2 border">Principal</th>
                    <th className="p-2 border">Interest</th>
                    <th className="p-2 border">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((row, i) => (
                    <tr key={i} className="text-center hover:bg-gray-100">
                      <td className="p-2 border">{row.date}</td>
                      <td className="p-2 border">Rs {row.principal}</td>
                      <td className="p-2 border">Rs {row.interest}</td>
                      <td className="p-2 border">Rs {row.balance}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-orange-100 font-semibold text-center">
                    <td className="p-2 border">Total</td>
                    <td className="p-2 border">
                      Rs {schedule.reduce((acc, r) => acc + parseFloat(r.principal), 0).toFixed(2)}
                    </td>
                    <td className="p-2 border">
                      Rs {schedule.reduce((acc, r) => acc + parseFloat(r.interest), 0).toFixed(2)}
                    </td>
                    <td className="p-2 border">-</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-4 text-right">
              <button
                onClick={exportToPDF}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 inline-flex items-center gap-2"
              >
                <Download size={18} /> Export PDF
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EMICalculator;
