import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortfolioOverview from "./components/PortfolioOverview";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="portfolio-app min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <PortfolioOverview />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
