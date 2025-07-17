import React from "react";

const CardContact = ({ icon: Icon, color, title, name }) => {
  return (
    <>
      <div className="flex items-center gap-4 w-[22rem] bg-gray-50 p-4 rounded-lg shadow-md">
        <Icon className={`text-5xl  ${color}`} />
        <div className="">
          <p className="text-xl font-semibold">{title}</p>
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};

export default CardContact;
