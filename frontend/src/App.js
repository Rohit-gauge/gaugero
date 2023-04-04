import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/AboutPage/About";
import Contact from "./components/pages/ContactPage/Contact";
import HomePage from "./components/pages/HomePage";
import Terms from "./components/pages/terms&condition/Index";
import Privacy from "./components/pages/privacy/Index";



function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/contact-us-two" element={<Contact />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  </Router>
  );
}

export default App;
