import { useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");

            // animate only once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />

      {/* HERO */}
      <section className="animate-on-scroll hero-motion">
        <Hero />
      </section>

      {/* ABOUT */}
      <section className="animate-on-scroll about-motion">
        <About />
      </section>

      {/* PROJECTS */}
      <section className="animate-on-scroll project-motion">
        <Projects />
      </section>

      {/* RESUME */}
      <section className="animate-on-scroll resume-motion">
        <Resume />
      </section>

      {/* CONTACT */}
      <section className="animate-on-scroll contact-motion">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;
