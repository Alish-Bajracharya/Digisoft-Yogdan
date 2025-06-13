const Banner = ({ title, subtitle, bgColor = "bg-green-800" }) => {
  return (
    <section className={`${bgColor} py-16 mt-24 text-center text-white`}>
      <h1 className="text-4xl font-bold">{title}</h1>
      {subtitle && (
        <p className="text-orange-400 mt-4 text-lg">{subtitle}</p>
      )}
    </section>
  );
};

export default Banner;
