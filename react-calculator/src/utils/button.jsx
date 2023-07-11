import React from 'react'

const Button = ({ value, type, splclass, event }) => {
  return (
    <button
      type='button'
      onClick={event}
      className={`${splclass} ${type == 'special' ? 'bg-[#A2D0FA]' : 'bg-[#CCE5FF]'} text-lg rounded-lg w-full h-full flex justify-center items-center font-bold`}>
      {value}
    </button>
  )
}

export default Button