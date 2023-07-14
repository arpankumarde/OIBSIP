import React from 'react'
import { MdTaskAlt } from 'react-icons/md'

const Navbar = () => {
  return (
    <nav className='gap-2 items-center px-4 text-2xl font-bold text-white'>
      <MdTaskAlt className='text-3xl'/>
      <h1>Todo List</h1>
    </nav>
  )
}

export default Navbar