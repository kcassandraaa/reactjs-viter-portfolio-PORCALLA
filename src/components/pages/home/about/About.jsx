import React from "react";
import { IoSchool } from "react-icons/io5";
import CardEducation from "../../../partials/CardEducation";

const About = () => {
  return (
    <>
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <h2 className="font-bold text-4xl bg-gradient-to-r from-fuchsia-700 to-rose-500 text-transparent bg-clip-text mb-10">
              ABOUT ME
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-32">
            <div className="">
              <h3 className="font-bold text-3xl text-gray-800 mb-7">
                Who Am I
              </h3>
              <p className="text-justify mb-5 text-gray-800">
                I'm Kyla Cassandra L. Porcalla, 21 years old, from Binatagan,
                Ligao City, Albay. I'm a passionate and curious learner in the
                world of tech. I have a foundational understanding of HTML, CSS,
                Tailwind CSS, and ReactJS, which I enjoy using to create clean,
                responsive user interfaces. I have experience with C++, Java,
                Microsoft Office applications, basic database management.
              </p>
              <p className="text-justify text-gray-800">
                I'm always eager to enhance my skills, solve problems
                creatively, and adapt to new tools and technologies. Whether
                working independently or as part of a team, I strive to
                contribute effectively through strong time management and
                leadership abilities. Let's build something awesome together!
              </p>
            </div>

            <div className="">
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
