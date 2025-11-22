import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopBar from "@/components/TopBar";
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
