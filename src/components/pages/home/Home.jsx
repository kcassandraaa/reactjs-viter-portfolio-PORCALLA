import React from "react";
import Header from "../../partials/Header";
import Banner from "./banner/Banner";
import About from "./about/About";
import Skills from "./skills/Skills";

import Footer from "../../partials/Footer";
import Contacts from "../../partials/Contacts";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Skills />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
