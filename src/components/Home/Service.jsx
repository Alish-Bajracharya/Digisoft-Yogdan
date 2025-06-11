import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bgImg from "../../assets/service/bg.jpg";
import savingImg from "../../assets/service/savi.jpg";
import loansImg from "../../assets/service/loans.jpg";
import mobileImg from "../../assets/service/mobile-banking.jpg";
import remitImg from "../../assets/service/remitance.jpg";

const slides = [
  {
    title: "Our Services",
    description: "If you want to be rich, learn not only to earn but also to save money.",
    image: savingImg,
  },
  {
    title: "Our Services",
    description: "Get the best offers from our debit cards and mobile banking.",
    image: loansImg,
  },
  {
    title: "Our Services",
    description: "Mobile banking made secure and convenient with top-tier offers.",
    image: mobileImg,
  },
  {
    title: "Our Services",
    description: "Seamless international money transfers with our remittance services.",
    image: remitImg,
  },
];

const Service = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section
      className="text-white relative mt-16 py-16"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0,166,81,0.4), rgba(0,166,81,0.9)), url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index}>
              <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px]">
                {/* Left Text Content */}
                <div className="space-y-6 px-4">
                  <h5 className="text-2xl font-semibold uppercase text-orange-400">{slide.title}</h5>
                  <p className="text-3xl leading-snug font-light">{slide.description}</p>
                  <a
                    href="#"
                    className="inline-block border border-orange-400 bg-orange-500 hover:bg-orange-600 transition-all duration-300 text-white px-6 py-3 rounded-md font-medium text-lg"
                  >
                    Learn More
                  </a>
                </div>

                {/* Right Image */}
                <div className="h-[400px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Service;
