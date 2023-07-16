import { MdDeleteOutline, MdDone } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { Tooltip } from 'react-tooltip'

const TaskList = ({ tasks, setTasks }) => {
  const toggleStatus = (id) => {
    let copyTasks = [...tasks];
    let newStatus = !copyTasks[id].status;
    copyTasks[id].status = newStatus;
    setTasks(copyTasks);
  };

  const delTask = (id) => {
    let c = 0;
    setTasks(tasks.filter(item => c++ !== id));
  }

  return (
    <section className='flex items-center justify-center w-full lg:w-2/3 px-4 lg:px-16'>
      <div className="container backdrop-blur-sm bg-[#0000002f] lg:bg-[#ffffff21] min-h-[15rem] lg:min-h-[10rem] lg:max-h-[86vh] p-4 rounded-lg">
        <h2 className='text-slate-100 font-bold text-xl mb-3 text-center'>TaskList</h2>
        <div className='overflow-auto lg:max-h-[75vh] flex flex-col gap-3 rounded-lg scrollbar-hide'>
          {!tasks.length == 0 ?
            (tasks.map((value, key) => (
              <div key={key} className='flex flex-col lg:flex-row justify-between lg:items-center gap-2 lg:gap-4 p-4 bg-white rounded-lg'>
                <div className='h-full w-full lg:w-2/3'>
                  <div className='font-semibold'>{value.title}</div>
                  <div className='text-sm text-gray-800 text-justify'>{value.desc}</div>
                </div>
                <div className="flex w-full lg:w-1/3 justify-around items-center">
                  <span className={`${value.status ? 'bg-green-300 text-green-950' : 'bg-red-300 text-red-950'} w-20 flex justify-center rounded-full px-2 py-1 text-xs`}>
                    {value.status ? 'Complete' : 'Incomplete'}
                  </span>
                  <button type='button' key={`${key}-${value.status2}`} onClick={() => toggleStatus(key)}
                    className={`${value.status ? 'bg-red-300 hover:bg-red-400' : 'bg-green-300 hover:bg-green-400'} rounded-full inline-flex justify-center items-center h-10 w-10`}
                    data-tooltip-id="action-tooltip" data-tooltip-variant='dark' data-tooltip-content={value.status ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {!value.status ? <MdDone className='text-xl object-contain text-green-950' /> : <GrClose className='text-red-950' />}

                  </button>
                  <button type='button' className="bg-red-600 hover:bg-red-700 text-white inline-flex justify-center items-center rounded-full h-10 w-10"
                    data-tooltip-id="action-tooltip" data-tooltip-variant='dark' data-tooltip-content='Delete Task'
                    onClick={() => { delTask(key) }}
                  >
                    <MdDeleteOutline className='text-xl' />
                  </button>
                </div>
              </div>
            )))
            : <span className='text-slate-200 text-center'>No data to show</span>}
          <Tooltip id="action-tooltip" style={{ backgroundColor: '#000000cd', borderRadius: '0.5rem', paddingTop: '2.5px', paddingBottom: '2.5px' }} />
        </div>
      </div>
    </section>
  )
}

export default TaskList