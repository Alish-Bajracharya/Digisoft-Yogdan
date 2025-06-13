// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/QuickLink/Contact.jsx';
import Login from './pages/QuickLink/Login.jsx';
import Advisors from './pages/Yogdan/Advisors.jsx';
import Directors from "./pages/Yogdan/Directors.jsx"
import OfficeHours from './pages/Yogdan/OfficeHours.jsx';
import ChairmanMessage from './pages/Yogdan/ChairmanMessage.jsx';
import SavingPlans from './pages/Service/SavingPlans.jsx';
import ApplyForm from './pages/Service/ApplyForm.jsx';
import LoanPlans from './pages/Service/LoanPlans.jsx';
import News from "./pages/Information/yNews.jsx";
import ReadMore from './pages/Information/Readmore.jsx';
import Notice from './pages/Information/Notice.jsx';
import Gallery from './pages/Information/Gallery.jsx';
import Csr from './pages/Information/CSR.jsx';
import ApplicationForm from './pages/Download/ApplicationForm.jsx';
import FinancialReport from './pages/Download/FinancialReport.jsx';
import ApplyJob from './pages/Career/ApplyJob.jsx';
import Hiring from './pages/Career/Hiring.jsx';
import Apply from "./pages/Career/Apply.jsx";
import AboutUs from './pages/Yogdan/AboutUs.jsx';
import Emi from './pages/QuickLink/Emi.jsx';
import Interest from './pages/QuickLink/Interest.jsx';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/advisors" element={<Advisors />} />
        <Route path="/directors" element={<Directors />} />
        <Route path="/office-hours" element={<OfficeHours />} />
        <Route path="/chairman-message" element={<ChairmanMessage />} />
        <Route path="/saving-plans" element={<SavingPlans />} />
        <Route path="/loan-plans" element={<LoanPlans />} />
        <Route path="/apply/:planId" element={<ApplyForm/>} />

        <Route path="/news" element={<News />} />
        <Route path="/news/:id" element={<ReadMore />} />
        <Route path="/notices" element={<Notice />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/csr-activities" element={<Csr />} />
        <Route path="/application-form" element={<ApplicationForm />} />
        <Route path="/financial-reports" element={<FinancialReport />} />
        <Route path="/positions-hiring" element={<Hiring />} />
        <Route path="/hiring/apply/:slug" element={<Apply />} />
        <Route path="/apply-job" element={<ApplyJob />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/emi" element={<Emi />} />
        <Route path="/interest" element={<Interest />} />

        

        






      </Routes>
    </Router>
  );
}

export default App;
