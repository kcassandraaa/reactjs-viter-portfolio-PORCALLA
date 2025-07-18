import React from "react";
import Header from "../../partials/Header";
import Banner from "./banner/Banner";
import About from "./about/About";
import Skills from "./skills/Skills";

import Footer from "../../partials/Footer";
import Contacts from "../../partials/Contacts";
import Projects from "./projects/Projects";

const Home = () => {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Header />
          <Banner />
          <About />
          <Skills />
          <Projects/>
          <Contacts />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
