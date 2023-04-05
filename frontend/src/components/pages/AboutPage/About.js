import React, { useEffect } from "react";
import Footer from "../../Home/Footer";
import CoFOunder from "./CoFOunder";
import KnowMore from "./KnowMore";
import OurCompany from "./OurCompany";
import OurStory from "./OurStory";
import Team from "./Team";
import Chatbot from "../../whatsapp/index";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
 
      <OurCompany />
      <KnowMore />
      <CoFOunder />
      <OurStory />
      <Team />
      <Chatbot />
      <Footer />
    </>
  );
};

export default About;
