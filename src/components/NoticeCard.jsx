import { FileText, Info } from "lucide-react";

const NoticeCard = ({ notice }) => {
  return (
    <div className="relative bg-white/70 backdrop-blur-md  border border-green-200 shadow-md hover:shadow-xl transition-all duration-300 p-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold text-green-800">{notice.title}</h3>
        <span className="text-sm text-gray-500">{notice.date}</span>
      </div>

      <p className="text-gray-700 text-sm mb-4">{notice.description}</p>

      <div className="flex justify-between items-center">
        <span className="text-xs px-2 py-1 rounded-full bg-orange-100 text-orange-700 flex items-center gap-1">
          {notice.type === "pdf" ? (
            <>
              <FileText size={14} /> PDF Notice
            </>
          ) : (
            <>
              <Info size={14} /> Announcement
            </>
          )}
        </span>

        {notice.link && (
          <a
            href={notice.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white bg-gradient-to-r from-green-600 to-orange-500 hover:opacity-90 px-4 py-1.5 rounded-lg"
          >
            View
          </a>
        )}
      </div>
    </div>
  );
};

export default NoticeCard;
