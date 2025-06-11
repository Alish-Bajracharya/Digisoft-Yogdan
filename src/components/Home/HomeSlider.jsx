import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/slider/1.jpg";
import slide2 from "../../assets/slider/2.jpg";

const slides = [slide1, slide2];

const HomeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 4000,
    onAutoplayPause: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="slider w-full h-screen mt-14 overflow-hidden">
      <Slider {...settings}>
        {slides.map((image, index) => (
          <div key={index} className="w-full h-screen">
            <div
              className="w-full h-5/6 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HomeSlider;
