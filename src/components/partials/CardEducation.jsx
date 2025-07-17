import React from "react";
import { IoSchool } from "react-icons/io5";

const CardEducation = ({ level, year, school, course }) => {
  return (
    <>
      <div className="bg-rose-300 p-5 rounded-lg shadow-md mb-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-5 mb-2">
            <IoSchool className="text-2xl text-white/90" />
            <h4 className="font-semibold text-xl text-white/90">{level}</h4>
          </div>
          <span className=" rounded-full px-3 py-[0.5rem] text-[0.75rem] font-semibold bg-rose-200 text-rose-400 ">
            {year}
          </span>
        </div>

        <div className="text-gray-700">
          <p>{school}</p>
          <p>{course}</p>
        </div>
      </div>
    </>
  );
};

export default CardEducation;
