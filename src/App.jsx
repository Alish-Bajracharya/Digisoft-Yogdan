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
      </Routes>
    </Router>
  );
}

export default App;
