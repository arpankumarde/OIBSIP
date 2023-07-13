import React from 'react'

const TaskList = ({ tasks, setTasks }) => {
  const toggleStatus = (event) => {
    let id = event.target.dataset.taskid;
    let newStatus = !tasks[id].status;
    let copyTasks = [...tasks];
    copyTasks[id].status = newStatus;
    // console.log(copyTasks);
    setTasks(copyTasks);
    // console.log(tasks);
  };

  return (
    <section className='bg-pink-200 w-2/3 flex items-center justify-center px-20'>
      <div className="container bg-slate-400 max-h-[75vh] p-4">
        <div>TaskList</div>
        <div className='overflow-auto max-h-[65vh] bg-orange-300'>
          {!tasks.length == 0 ?
            (tasks.map((value, key) => (
              <div key={key} className='flex justify-between'>
                <div>{value.title}</div>
                <div>{value.desc}</div>
                <div key={`${key}-${value.status}1`}>{value.status ? 'complete' : 'incomplete'}</div>
                <button data-taskid={key} key={`${key}-${value.status2}`} onClick={toggleStatus}>mark {!value.status ? 'complete' : 'incomplete'}</button>
              </div>
            )))
            : 'No data to show'}
          {/* {tasks.map((value, key) => (
            <div key={key} className='flex justify-between'>
              <div>{value.title}</div>
              <div>{value.desc}</div>
              <div>{value.status ? 'complete' : 'incomplete'}</div>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  )
}

export default TaskList