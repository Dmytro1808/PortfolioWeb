import "./styles/main.css";
import NavBar from "../src/components/NavBar/NavBar";
import Projects from "./containers/Projects/Projects";
import Footer from "../src/components/Footer/Footer";
import StartPage from "./containers/StartPage/StartPage";
import Contacts from "./containers/Contacts/Contacts";
import Skills from "./containers/Skills/Skills";
import ScrollToTop from "./Utilities/scrollToTop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
