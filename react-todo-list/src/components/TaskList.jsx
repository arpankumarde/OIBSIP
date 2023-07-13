import { MdDone } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { Tooltip } from 'react-tooltip'

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
    <section className='w-2/3 flex items-center justify-center px-20'>
      <div className="container backdrop-blur-sm bg-[#ffffff21] max-h-[86vh] px-6 py-4 rounded-lg">
        <h2 className='text-slate-100 font-bold text-xl mb-3'>TaskList</h2>
        <div className='overflow-auto max-h-[75vh] flex flex-col gap-3 scrollbar-hide'>
          {!tasks.length == 0 ?
            (tasks.map((value, key) => (
              <div key={key} className='flex justify-between items-center gap-4 p-4 bg-white rounded-lg'>
                <div className='bg-yelow-300 h-full w-3/4'>
                  <div className='font-semibold'>{value.title}</div>
                  <div className='text-sm text-gray-800'>{value.desc}</div>
                </div>
                <div className="bg-green-200 flex w-1/4 justify-between items-center">
                  <div key={`${key}-${value.status}1`} className='inline'>
                    {value.status ? 'Complete' : 'Incomplete'}
                  </div>
                  <button className='bg-pink-200 rounded-full inline-flex justify-center items-center h-10 w-10'
                    data-taskid={key} key={`${key}-${value.status2}`} onClick={toggleStatus}
                    data-tooltip-id="action-tooltip" data-tooltip-variant='dark' data-tooltip-content={value.status ? 'Mark as incomplete' : 'Mark as complete'}

                  >
                    {!value.status ? <MdDone className='text-xl object-contain' /> : <GrClose />}
                  </button>
                </div>
              </div>
            )))
            : <span className='text-slate-100'>No data to show</span>}
          {/* {tasks.map((value, key) => (
            <div key={key} className='flex justify-between'>
              <div>{value.title}</div>
              <div>{value.desc}</div>
              <div>{value.status ? 'complete' : 'incomplete'}</div>
            </div>
          ))} */}
          <Tooltip id="action-tooltip" style={{ backgroundColor: '#000000cd', borderRadius: '0.5rem', paddingTop: '2.5px', paddingBottom: '2.5px' }} />
        </div>
      </div>
    </section>
  )
}

export default TaskList