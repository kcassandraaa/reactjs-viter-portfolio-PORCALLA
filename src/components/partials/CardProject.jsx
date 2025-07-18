import React from 'react'

const CardProject = ({src}) => {
  return (
    <>
      <img
        src={src}
        alt="project picture"
        className="border-2 border-gray-700 rounded-3xl h-[40rem] w-[23rem] max-w-[20rem]"
      />
    </>
  );
}

export default CardProject
