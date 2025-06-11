import React, { useEffect, useState } from 'react';
import appleImg from '../../assets/images/apple.png';
import googlePlayImg from '../../assets/images/google-play.png';
import post1 from '../../assets/service/loan.jpg';
import post2 from '../../assets/service/save.jpg';
import post3 from '../../assets/service/mobile-banking.jpg';
import post4 from '../../assets/service/remitance.jpg';

const staticPosts = [
  {
    img: post1,
    date: '05 Jun, 2025',
    title: '१६ औ वार्षिक साधारण  सभा सम्बन्धी सूचना !!!',
  },
  {
    img: post2,
    date: '28 May, 2023',
    title: 'ब्याजदर परिवर्तन सम्बन्धि सूचना!!!',
  },
  {
    img: post3,
    date: '10 May, 2020',
    title: 'संस्था संचालनका विगत पाँच बर्षका उपलब्धीहरु',
  },
  {
    img: post4,
    date: '28 Apr, 2020',
    title: 'संस्था संचालन',
  },
];

const NewsPanel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(staticPosts);
  }, []);

  return (
    <section className="bg-[#efefef] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#333] mb-2">Latest News & Updates</h2>
          <p className="text-gray-600">Stay informed about the latest activities and announcements from our cooperative.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 justify-center">

          {/* News Panel */}
          <div className="w-full lg:w-[48%] bg-white p-6 rounded-xl shadow-md">
            <h5 className="text-[#f7941e] font-semibold uppercase border-b border-gray-300 pb-2 mb-6 text-lg">
              Recent Posts
            </h5>
            {posts.map((post, idx) => (
              <div key={idx} className={`flex gap-4 mb-4 p-3 rounded-md hover:bg-gray-50 transition-all duration-200 ${idx !== posts.length - 1 ? 'border-b border-dashed' : ''}`}>
                <img src={post.img} alt="news" className="w-24 h-20 object-cover rounded-md shadow-sm" />
                <div>
                  <span className="text-sm text-gray-500 block mb-1">
                    <i className="fa fa-calendar pr-1 text-[#18b162]"></i>{post.date}
                  </span>
                  <h4 className="text-base font-semibold text-gray-800 hover:text-[#f7941e] transition-all duration-150">
                    <a href="#">{post.title}</a>
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Banking Section */}
          <div className="w-full lg:w-[48%] bg-white p-6 rounded-xl shadow-md">
            <h5 className="text-black font-semibold uppercase mb-2">Mobile Banking</h5>
            <h2 className="text-[#f7941e] font-semibold text-2xl relative pb-4 mb-6 border-b border-gray-300">
              See What's New With Our Mobile Banking App
            </h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Experience banking right from your phone or tablet - fast, secure, and easy to use.
            </p>
            <div>
              <h3 className="font-medium text-lg mb-4">Download the App</h3>
              <div className="flex gap-4 flex-wrap">
                <a href="#" className="bg-[#333] hover:bg-black text-white px-5 py-3 flex items-center rounded-lg transition-all duration-200">
                  <img src={appleImg} alt="App Store" className="w-6 h-auto mr-2" /> App Store
                </a>
                <a href="#" className="bg-[#333] hover:bg-black text-white px-5 py-3 flex items-center rounded-lg transition-all duration-200">
                  <img src={googlePlayImg} alt="Play Store" className="w-6 h-auto mr-2" /> Play Store
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NewsPanel;
