import bgImage from "../assets/icon/bg.webp";

const Banner = ({ title, subtitle }) => {
  return (
    <section
      className="relative py-20 mt-24 text-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-60 absolute inset-0"></div>

      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {subtitle && (
          <p className="text-orange-400 mt-4 text-lg md:text-xl font-medium">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Banner;
