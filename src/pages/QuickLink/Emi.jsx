// pages/EMI.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EMICalculatorModal from "../../components/EMICalculator";

const EMI = () => {
  const [showEMI, setShowEMI] = useState(false);
  const navigate = useNavigate();

  // Open popup automatically when page loads
  useEffect(() => {
    setShowEMI(true);
  }, []);

  // Handle close and redirect
  const handleClose = () => {
    setShowEMI(false);
    setTimeout(() => {
      navigate("/");
    }, 100); 
  };

  return (
    <>
      <EMICalculatorModal isOpen={showEMI} onClose={handleClose} />
    </>
  );
};

export default EMI;
