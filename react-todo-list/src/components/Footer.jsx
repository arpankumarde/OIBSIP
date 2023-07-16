import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center text-sm my-4 lg:my-0 lg:py-0 lg:px-4 lg:h-[6vh] w-screen text-slate-100'>
      <div>
        <a className='hidden lg:block' href='https://www.pexels.com/photo/concrete-bridge-near-buildings-during-golden-hour-1755683/' target='_blank' referrerPolicy='no-referrer'>
          Photo by Guilherme Rossi from Pexels
        </a>
        <a className='block lg:hidden bg-[#0000008e] rounded-xl px-2 py-1' href='https://www.pexels.com/photo/pink-flowers-photograph-1083822/' target='_blank' referrerPolicy='no-referrer'>
          Photo by Lisa Fotios from Pexels
        </a>
      </div>
    </footer>
  )
}

export default Footer