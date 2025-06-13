import NewsCard from "../../components/NewsCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Banner from "../../components/Banner";
import Img1 from "../../assets/news/2.jpg"
import Img2 from "../../assets/news/1.jpg"



const News = () => {
  const newsList = [
    {
      id: "1",
      image: Img1,
      title: "Annual General Meeting 2081 Held Successfully On Dulikhel",
      summary:
        "The AGM highlighted our yearly performance, new savings schemes, and loan policy revisions for our cooperative members.",
      date: "2082/02/15",
    },
    {
      id: "2",
      image: Img2,
      title: "New Online Loan Application Portal Launched  With Team",
      summary:
        "Members can now apply for loans digitally through our newly launched online loan portal available 24/7 with active member participation.",
      date: "2082/01/01",
    },
    {
      id: "3",
      image: Img1,
      title: "Cooperative Day Celebration with Community Support",
      summary:
        "On the occasion of National Cooperative Day, we organized health camps and tree plantations with active member participation.",
      date: "2081/11/20",
    },
    {
      id: "3",
      image: Img2,
      title: "Cooperative Day Celebration with Community Support",
      summary:
        "On the occasion of National Cooperative Day, we organized health camps and tree plantations with active member participation.",
      date: "2081/11/20",
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
