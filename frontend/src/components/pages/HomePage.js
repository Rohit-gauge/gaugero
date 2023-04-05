import React, { useEffect } from "react";
import Affordable from "../Home/Affordable";
import CustomerNeed from "../Home/CustomerNeed";
import Experience from "../Home/Experience";
import Faq from "../Home/Faq";
import Footer from "../Home/Footer";
import Gurantee from "../Home/Gurantee";
import HealthAbove from "../Home/HealthAbove";
import Landing from "../Home/Landing";
import MainTable from "../Home/MainTable";
import PureWater from "../Home/PureWater";
import Chatbot from "../whatsapp/index";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Landing />
      <CustomerNeed />
      <PureWater />
      <Gurantee />
      <HealthAbove />
      <Experience />
      <MainTable />
      <Affordable />
      <Faq />
      <Chatbot />
      <Footer />
    </div>
  );
};

export default HomePage;
