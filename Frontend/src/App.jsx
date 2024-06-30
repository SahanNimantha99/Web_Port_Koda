import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  return (
    <div>
      <Cursor />

      <section id="Home">
        <Navbar />
        <Hero />
      </section>

      <section id="About">
        <About />
      </section>

      <section id="Services">
        <Services />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
