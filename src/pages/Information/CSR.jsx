import CsrCard from "../../components/CsrCard";
import Img1 from "../../assets/news//1.jpg"
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Banner from "../../components/Banner";

const activities = [
  {
    id: 1,
    title: "Free Health Camp for Rural Communities",
    image: Img1,
    description:
      "We conducted a free health camp with over 500 beneficiaries including medical checkups, medication, and consultation in remote areas.",
    date: "April 2025",
  },
  {
    id: 2,
    title: "Tree Plantation Drive in Godawari, Lalitpur",
    image: Img1,
    description:
      "Planted over 1000 native trees across three districts to support reforestation and promote environmental awareness.",
    date: "June 2025",
  },
  {
    id: 3,
    title: "Women Empowerment Workshop in Dulikhel",
    image: Img1,
    description:
      "Organized skill-building programs and micro-loan assistance for over 200 women to promote entrepreneurship.",
    date: "December 2024",
  },
  {
    id: 4,
    title: "Educational Support to Underprivileged Children",
    image: Img1,
    description:
      "Distributed educational materials and sponsored tuition fees for 120 underprivileged schoolchildren in rural areas.",
    date: "February 2024",
  },
];

const Csr = () => {
  return (
    <>
    <Navbar />
    <Banner 
    title="Our CSR Activities"
    subtitle="Committed to sustainable community development, we invest in health,
    education, environment, and empowerment."
    />
    <section className="bg-gradient-to-br -mb-60 from-green-50 via-white to-orange-50 min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {activities.map((activity) => (
            <CsrCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Csr;
