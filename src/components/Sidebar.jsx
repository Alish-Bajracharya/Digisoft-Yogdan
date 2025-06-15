import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  FileText,
  ClipboardList,
  Download,
  Calendar,
  PhoneCall,
  Mail,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

// Static date
const getFormattedDate = () => {
  const today = new Date();
  return today.toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const upcomingEvents = [
  { id: 1, title: "Loan Awareness Seminar", time: "10:00 AM, 18 June 2025" },
  { id: 2, title: "Yearly Audit Report Meeting", time: "2:00 PM, 21 June 2025" },
  { id: 3, title: "Savings Plan Orientation", time: "11:00 AM, 25 June 2025" },
];

const Sidebar = () => {
  const [noticesOpen, setNoticesOpen] = useState(true);

  return (
    // Sticky wrapper here
    <div className="sticky top-24">
      <aside className="bg-green-900 text-white shadow-lg w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-800 to-green-600 p-4 flex justify-between items-center">
          <div className="text-lg font-semibold tracking-wide">
            Yogdan Consumer Coop
          </div>
          <span className="text-sm text-green-100">{getFormattedDate()}</span>
        </div>

        {/* Today Event */}
        <div className="p-4 border-b border-green-700">
          <div className="flex items-start gap-2">
            <Calendar className="w-5 h-5 mt-1 text-green-300" />
            <div className="text-sm">
              <p className="text-green-200">Event Today:</p>
              <p className="italic text-orange-400 font-medium">
                Annual Member Meeting
              </p>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="p-4 border-b border-green-700">
          <h3 className="text-sm font-semibold mb-3">Upcoming Events</h3>
          <ul className="space-y-3 text-xs text-green-100 leading-relaxed">
            {upcomingEvents.map((event) => (
              <li key={event.id} className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 text-green-300" />
                <div>
                  <p className="font-medium">{event.title}</p>
                  <p className="text-green-300 text-xs">{event.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* News & Notices */}
        <div className="border-b border-green-700">
          <button
            className="w-full px-4 py-3 flex items-center justify-between text-sm font-semibold hover:bg-green-800 transition"
            onClick={() => setNoticesOpen(!noticesOpen)}
          >
            <span>📢 News & Notices</span>
            {noticesOpen ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>

          {noticesOpen && (
            <div className="space-y-1 px-4 pb-4">
              <SidebarItem
                to="/notices"
                icon={<FileText className="w-5 h-5" />}
                label="Official Notices"
              />
              <SidebarItem
                to="/news"
                icon={<ClipboardList className="w-5 h-5" />}
                label="Latest News"
              />
              <SidebarItem
                to="/application-form"
                icon={<Download className="w-5 h-5" />}
                label="Downloads (PDFs)"
              />
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="p-4 space-y-2">
          <h3 className="text-sm font-semibold text-green-100">📞 Contact Support</h3>
          <div className="flex items-start gap-2 text-sm">
            <PhoneCall className="w-4 h-4 mt-1 text-green-300" />
            <span>01-1234567, 9851234567</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <Mail className="w-4 h-4 mt-1 text-green-300" />
            <span>support@yogdancoop.com.np</span>
          </div>
        </div>
      </aside>
    </div>
  );
};

const SidebarItem = ({ to, icon, label }) => (
  <Link
    to={to}
    className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-green-700 transition"
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </Link>
);

export default Sidebar;
