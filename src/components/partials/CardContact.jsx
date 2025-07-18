import React from "react";

const CardContact = ({ link, icon: Icon, color, title, name }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        className="flex items-center gap-4 w-[22rem] bg-white p-4 rounded-lg shadow-md hover:bg-rose-200 hover:scale-105 transition"
      >
        <Icon className={`text-5xl  ${color}`} />
        <div className="">
          <p className="text-xl font-semibold">{title}</p>
          <p>{name}</p>
        </div>
      </a>
    </>
  );
};

export default CardContact;
