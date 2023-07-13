import React, { useState } from 'react';

const TaskEntry = ({ tasks, setTasks }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name.replace(/\s{2,}/g, ' ').trim();
    const value = event.target.value;
    // console.log("in here")
    // console.log(inputs)
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs);
    setInputs(inputs.status = false)
    console.log(inputs);
    setTasks(prev => [...prev, inputs]);
    setInputs({});
    console.log(tasks);
  }

  return (
    <div className='bg-gray-300 w-1/3 flex justify-center items-center'>
      <div className="bg-yellow-300 p-4 rounded-lg w-2/3">
        <form onSubmit={handleSubmit} className='flex flex-col gap-4' autoComplete='disabled'>
          <fieldset className='flex flex-col'>
            <span>Title</span>
            <input type="text" name='title'
              value={inputs.title || ""} onChange={handleChange}
              placeholder='Enter a title'
              autoComplete='disabled'
              className='w-full px-2 py-1'
              autoFocus required
            />
          </fieldset>
          <fieldset className='flex flex-col'>
            <span>Description</span>
            <textarea type='text' name='desc'
              value={inputs.desc || ""} onChange={handleChange}
              placeholder='Enter Task description'
              className='w-full p-2 h-36 resize-none'
              autoComplete='disabled'
            >
            </textarea>
          </fieldset>
          <button type="submit" className='bg-green-300 rounded-md p-1'>Add to list</button>
        </form>
      </div>
    </div>
  )
}

export default TaskEntry