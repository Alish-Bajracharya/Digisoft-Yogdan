import savingImg from "../../assets/offer/saving.jpg";
import loanImg from "../../assets/offer/loan.jpg";
import accountOpenImg from "../../assets/offer/account-open.jpg";

const OfferPanel = () => {
  const offers = [
    { image: savingImg, alt: "Saving Offer", link: "/saving-plans" },
    { image: loanImg, alt: "Loan Offer", link: "/loan-plans" },
    { image: accountOpenImg, alt: "Account Opening", link: "/application-form" },
  ];

  return (
    <section className="offer-panel -mt-20 bg-white py-2"> 
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap -mx-3">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/3 px-3 mb-4"
            >
              <div className="overflow-hidden rounded shadow hover:shadow-lg transition-shadow duration-300">
                <a href={offer.link}>
                  <img
                    src={offer.image}
                    alt={offer.alt}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferPanel;
