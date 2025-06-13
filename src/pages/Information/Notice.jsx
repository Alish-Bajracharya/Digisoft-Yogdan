import NoticeCard from "../../components/NoticeCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "../../components/Banner";
import Img1 from "../../assets/news/1.jpg"

const Notice = () => {
  const notices = [
    {
      id: 1,
      title: "Annual General Meeting Announcement",
      description:
        "All cooperative members are invited to attend the AGM on Baisakh 20, 2082. Important decisions will be discussed.",
      date: "2082/02/25",
      type: "pdf",
      link: Img1,
    },
    {
      id: 2,
      title: "Holiday Notice – National Cooperative Day",
      description:
        "The cooperative office will remain closed on Falgun 15 to observe National Cooperative Day.",
      date: "2082/01/28",
      type: "text",
      link: null,
    },
    {
      id: 3,
      title: "Interest Rate Adjustment on Savings Accounts",
      description:
        "Please review the revised interest rates effective from Jestha 1, 2082. See the PDF for full details.",
      date: "2081/12/05",
      type: "pdf",
      link: Img1,
    },
    
    {
      id: 4,
      title: "Holiday Notice – National Cooperative Day",
      description:
        "The cooperative office will remain closed on Falgun 15 to observe National Cooperative Day.",
      date: "2081/11/28",
      type: "text",
      link: null,
    },
    {
      id: 5,
      title: "Interest Rate Adjustment on Savings Accounts",
      description:
        "Please review the revised interest rates effective from Jestha 1, 2082. See the PDF for full details.",
      date: "2081/12/05",
      type: "pdf",
      link: Img1,
    },
  ];

  return (
    <>
    <Navbar />
    <Banner 
    title= "Official Notices & Announcements"
    subtitle="Stay informed about the latest decisions, updates, holidays, and policies of our cooperative."
    />
    <section className="min-h-screen -mb-60 bg-gradient-to-tr from-green-50 via-white to-orange-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {notices.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Notice;
