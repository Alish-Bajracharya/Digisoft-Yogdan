import NewsCard from "../../components/NewsCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "../../components/Banner";

import Img1 from "../../assets/news/2.jpg";
import Img2 from "../../assets/news/1.jpg";

const News = () => {
  const newsList = [
    {
      id: "1",
      image: Img1,
      title: "Annual General Meeting 2081 Held Successfully On Dulikhel",
      summary:
        "The AGM highlighted our yearly performance, new savings schemes, and loan policy revisions for our cooperative members.",
      details:
        "During the AGM, key milestones were presented including an increase in member participation and digital services adoption. Various departments gave presentations on performance, and members voted on important proposals. The event concluded with cultural programs and networking sessions.",
      extraImage: Img2,
      date: "2082/02/15",
    },
    {
      id: "2",
      image: Img2,
      title: "New Online Loan Application Portal Launched With Team",
      summary:
        "Members can now apply for loans digitally through our newly launched online loan portal available 24/7 with active member participation.",
      details:
        "The loan portal allows registered users to submit documents, track application progress, and get automated alerts. The cooperative plans to further integrate KYC verification and online EMI tracking features in the next release.",
      link: "/loan-plans",
      date: "2082/01/01",
    },
    {
      id: "3",
      image: Img1,
      title: "Cooperative Day Celebration with Community Support",
      summary:
        "On the occasion of National Cooperative Day, we organized health camps and tree plantations with active member participation.",
      details:
        "We provided free health checkups to over 500 local residents and planted 300+ trees across nearby community areas. Our volunteers and staff worked alongside local schools to make the event a success.",
      date: "2081/11/20",
    },
    {
    id: "4",
    image: Img2,
    title: "New Savings Scheme for Women Empowerment Launched",
    summary:
      "Our cooperative proudly launched a new savings scheme tailored to support women entrepreneurs and small business owners.",
    details:
      "The scheme offers higher interest rates, flexible withdrawal options, and financial literacy workshops specifically designed for women members. This initiative aligns with our mission to promote inclusive economic growth.",
    date: "2082/03/10",
    link: "/saving-plans",
  },
  {
    id: "5",
    image: Img1,
    title: "Digital Payment Integration Now Live",
    summary:
      "Members can now make loan repayments and savings deposits using multiple digital payment platforms for seamless transactions.",
    details:
      "We integrated popular mobile wallets and banking apps with our core system, enabling quick, secure, and trackable payments. Training sessions for members on using these digital options were conducted across branches.",
    date: "2082/04/01",
  },
  {
    id: "6",
    image: Img2,
    title: "Annual Health Checkup Camp for Members",
    summary:
      "In partnership with local health providers, we organized a free health checkup camp for all cooperative members and their families.",
    details:
      "The camp included general checkups, blood tests, eye exams, and awareness sessions on nutrition and wellness. Over 600 members benefited from the initiative, reflecting our commitment to member welfare.",
    date: "2082/04/15",
  },
  {
    id: "7",
    image: Img1,
    title: "Cooperative Wins Award for Best Community Service",
    summary:
      "We were honored to receive the 'Best Community Service Award' for outstanding contributions to social and economic development.",
    details:
      "The award recognizes our work in education scholarships, environmental projects, and financial inclusion efforts that positively impacted the local community over the past year.",
    date: "2082/05/05",
  },
  {
    id: "8",
    image: Img2,
    title: "Mobile App Launch for Member Convenience",
    summary:
      "Our new mobile app is now available for download, providing easy access to account management, loan applications, and real-time notifications.",
    details:
      "The app features biometric login, transaction history, service requests, and an in-app chat support system to enhance member experience. Tutorials and support materials are available on our website.",
    date: "2082/05/20",
  },
  ];

  return (
    <>
      <Navbar />
      <Banner
        title="Latest News & Updates"
        subtitle="Stay updated with the latest developments in our cooperative."
      />
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsList.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default News;
