import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopBar from "@/components/TopBar";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import React from "react";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
