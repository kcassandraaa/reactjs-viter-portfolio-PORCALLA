import React from "react";
import { IoSchool } from "react-icons/io5";
import CardEducation from "../../../partials/CardEducation";

const About = () => {
  return (
    <>
      <section id="about" className="bg-white py-24">
        <div className="container mx-auto px-32 ">
          <h2 className="font-bold text-gray-800 text-5xl text-center mb-10">
            ABOUT ME
          </h2>

          <div className="grid xl:grid-cols-2 gap-10 md:gap-16">
            <div className="bg-gray-50 p-10 rounded-lg shadow-md">
              <h3 className="font-bold text-3xl text-gray-800 mb-7">
                Who Am I
              </h3>
              <div className="bg-rose-300 p-5 rounded-lg shadow-md">
                <p className="text-justify mb-5 text-gray-800">
                  I'm Kyla Cassandra L. Porcalla, 21 years old, from Binatagan,
                  Ligao City, Albay. I'm a passionate and curious learner in the
                  world of tech.
                </p>
                <p className="text-justify text-gray-800">
                  I'm always eager to enhance my skills, solve problems
                  creatively, and adapt to new tools and technologies. Whether
                  working independently or as part of a team, I strive to
                  contribute effectively through strong time management and
                  leadership abilities. Let's build something awesome together!
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-10 rounded-lg shadow-md">
              <h3 className="font-bold text-3xl text-gray-800 mb-7">
                Education
              </h3>

              <CardEducation
                level={"College"}
                year={"2022-2026"}
                school={"Bicol University Polangui"}
                course={"Bachelor of Science in Computer Science"}
              />

              <CardEducation
                level={"High School"}
                year={"2016-2022"}
                school={"Ligao National High School"}
                course={"Accountancy and Business Management (ABM)"}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
