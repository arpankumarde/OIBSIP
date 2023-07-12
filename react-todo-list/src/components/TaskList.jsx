import React from 'react'

const TaskList = ({ tasks, setTasks }) => {
  return (
    <section className='bg-pink-200 w-2/3 flex items-center justify-center px-20'>
      <div className="container bg-slate-400 min-h-[40vh] p-4">
        TaskList
        {tasks.map((value, key) => (
          <div key={key} className='flex justify-between'>
            <div>{value.title}</div>
            <div>{value.desc}</div>
            <div>{value.status ? 'complete' : 'incomplete'}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TaskList