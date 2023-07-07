import React from 'react'

const Button = ({ value, type, splclass }) => {
  return (
    <button type='button'
      className={`${splclass} bg-[#CCE5FF] rounded-lg w-full h-full flex justify-center items-center`}>
      {value}
    </button>
  )
}

export default Button