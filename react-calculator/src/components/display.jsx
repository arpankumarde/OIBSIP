import React from 'react'

const Display = ({ display, topDisplay }) => {
    return (
        <div className='bg-[#CCE5FF] text-cyan-950 select-text font-bold w-96 h-24 rounded-lg px-6 pt-2 pb-4 flex flex-col justify-between'>
            <div>{topDisplay}</div>
            <div className='text-right text-4xl'>{display}</div>
        </div>
    )
}

export default Display