import Navbar  from "../components/Navbar";
import Hero    from "../components/Hero";
import About   from "../components/About";
import Services from "../components/Services";
import Stack   from "../components/Stack";
import Contact from "../components/Contact";
import Footer  from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stack />
      <Contact />
    </>
  );
}