import React, { useState } from 'react';

const TaskEntry = () => {
  const [tasks, setTasks] = useState([]);
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log("in here")
    // console.log(inputs)
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(inputs);
    console.log(inputs);
    setTasks(prev => [...prev, inputs]);
    setInputs({});
    console.log(tasks);
  }

  return (
    <div className='bg-gray-300 w-1/3 flex justify-center items-center'>
      <div className="bg-yellow-300 p-4 rounded-lg">
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <fieldset className='flex flex-col'>
            <span>Title</span>
            <input type="text" name='title'
              value={inputs.title || ""}
              onChange={handleChange}
              placeholder='Enter a title'
              required
            />
          </fieldset>
          <fieldset className='flex flex-col'>
            <span>Description</span>
            <textarea name='desc' value={inputs.desc || ""}
              onChange={handleChange}
              placeholder='Enter Task description'
              className='w-full'
            >
            </textarea>
          </fieldset>
          <button type="submit">Add to list</button>
        </form>
      </div>
    </div>
  )
}

export default TaskEntry