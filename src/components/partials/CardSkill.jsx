import React from 'react'

const CardSkill = ({icon:Icon, color, size, title}) => {
  return (
    <>
       <div className="bg-white py-5 px-7 w-36 rounded-md shadow-md flex flex-col items-center justify-center hover:scale-105 duration-300">
            <Icon className={`text-7xl ${color}`} />
            <p className={`${size} font-semibold text-rose-400 mt-4 text-center`}>{title}</p>
        </div>
    </>
  )
}

export default CardSkill