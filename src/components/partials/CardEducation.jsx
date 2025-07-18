import React from "react";
import { IoSchool } from "react-icons/io5";

const CardEducation = ({ src, level, year, school, course }) => {
  return (
    <>
      <div className="bg-rose-300 p-4 gap-5 items-center rounded-lg shadow-md mb-5 grid grid-cols-[0.5fr_2fr] ">
        <img
          src={src}
          alt="school logo"
          className="size-16 md:size-20 object-cover"
        />
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5 mb-2">
              <IoSchool className="text-xl md:text-2xl text-white/90" />
              <h4 className="font-semibold text-lg md:text-xl text-white/90">
                {level}
              </h4>
            </div>
            <span className=" rounded-full px-3 py-[0.5rem] place-self-end text-[0.75rem] font-semibold bg-rose-200 text-rose-400 ">
              {year}
            </span>
          </div>

          <div className="text-gray-700 text-sm md:text-base">
            <p>{school}</p>
            <p>{course}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardEducation;
