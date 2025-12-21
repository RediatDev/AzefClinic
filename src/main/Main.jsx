import Hero from "../Component/Hero/Hero";
import Services from "../Component/Services/Services";
import About from "../Component/About/About";
import Contact from "../Component/Contact/Contact";

function Main() {
  return (
    <main>
      <section id="home">
        <Hero />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}

export default Main;
