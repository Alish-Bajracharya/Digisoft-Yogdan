import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

const days = [
  { day: "Sunday", hours: "9:00 AM - 5:00 PM" },
  { day: "Monday", hours: "9:00 AM - 5:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
  { day: "Friday", hours: "9:00 AM - 1:00 PM" },
  { day: "Saturday", hours: "Closed" },
];

const getToday = () => {
  const todayIndex = new Date().getDay();
  return days[todayIndex].day;
};

const OfficeHours = () => {
  const today = getToday();

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-green-700 py-16 mt-24 text-white text-center">
        <h1 className="text-4xl font-bold">Office Hours</h1>
        <p className="mt-4 text-lg text-orange-300">
          Visit us during working hours or contact us for more details.
        </p>
      </section>

      {/* Office Hours Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-semibold text-center text-green-800 mb-10">
            Weekly Office Schedule
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full table-auto border border-gray-200 shadow-sm rounded-lg">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="px-6 py-3 text-left text-sm font-semibold">Day</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Office Hours</th>
                </tr>
              </thead>
              <tbody>
                {days.map(({ day, hours }) => (
                  <tr
                    key={day}
                    className={`${
                      today === day ? "bg-orange-100" : "bg-white"
                    } border-b hover:bg-green-50 transition`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-700">{day}</td>
                    <td className="px-6 py-4 text-gray-600">{hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 text-center text-sm text-red-700">
            <p>
              Note: Office hours may vary on public holidays or during special cooperative events.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OfficeHours;
