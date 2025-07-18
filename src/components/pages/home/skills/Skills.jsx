import React from "react";
import { FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import CardSkill from "../../../partials/CardSkill";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";

const Skills = () => {
  return (
    <>
      <section id="skills" className="bg-gray-100 pt-32 pb-40">
        <div className="container mx-auto px-4 md:px-10">
          <h2 className="font-bold text-center text-gray-800 text-3xl lg:text-4xl xl:text-5xl mb-16">
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-10 md:w-[50rem] place-self-center justify-center">
            <CardSkill
              icon={FaHtml5}
              color={"text-orange-500"}
              size={"text-2xl"}
              title={"HTML"}
            />
            <CardSkill
              icon={FaCss3}
              color={"text-blue-500"}
              size={"text-2xl"}
              title={"CSS"}
            />
            <CardSkill
              icon={RiTailwindCssFill}
              color={"text-blue-300"}
              size={"text-xl"}
              title={"Tailwind CSS"}
            />
            <CardSkill
              icon={IoLogoJavascript}
              color={"text-yellow-400"}
              size={"text-xl"}
              title={"Java Script"}
            />
            <CardSkill
              icon={FaReact}
              color={"text-blue-300"}
              size={"text-2xl"}
              title={"ReactJS"}
            />
            <CardSkill
              icon={FaJava}
              color={"text-blue-400"}
              size={"text-2xl"}
              title={"Java"}
            />
            <CardSkill
              icon={SiCplusplus}
              color={"text-blue-500"}
              size={"text-2xl"}
              title={"C++"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
