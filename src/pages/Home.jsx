import React from 'react';
import Navbar from '../components/navbar';
import HomeSlider from "../components/Home/HomeSlider";
import OfferPanel from '../components/Home/OfferPanel';
import Service from '../components/Home/Service';
import NewsPanel from '../components/Home/NewsPanel';
import Footer from '../components/footer';
import NoticePopup from '../components/Home/NoticePopup';


const Home = () => {
  
  return (
    <div>
      <NoticePopup />
        <Navbar />
        <HomeSlider />
        <OfferPanel />
        <Service />
        <NewsPanel />
        <Footer />
      
      </div>
 
  );
};
export default Home;
