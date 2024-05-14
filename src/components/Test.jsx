import { Modal } from './Modal'
import { useState, useEffect } from 'react'

function Test () {
  const [toDoList, setToDoList] = useState([])

  useEffect(() => {
    const storedList = localStorage.getItem('toDoList')
    if (storedList) {
      setToDoList(JSON.parse(storedList))
    }
  }, [])

  const handleClick = () => {
    const newTaskText = document.getElementById('taskText').value

    if (newTaskText === '') {
      setShow(true)
    } else {
      const updatedToDoList = [...toDoList, newTaskText]
      setToDoList(updatedToDoList)
      localStorage.setItem('toDoList', JSON.stringify(updatedToDoList))
      document.getElementById('taskText').value = ''
    }
  }

  const handleDeleteTask = (index) => {
    const updatedToDoList = [...toDoList]
    updatedToDoList.splice(index, 1)
    setToDoList(updatedToDoList)
    localStorage.setItem('toDoList', JSON.stringify(updatedToDoList))
  }

  return (
    <div className='flex justify-around'>
      <div className='gap-5 p-2 min-w-[370px] max-w-[600px] flex flex-col place-content-center items-center text-center border border-solid  border-zinc-200/35 mt-2 rounded-lg'>
        <div className='w-auto px-10'><h1 className='font-bold text-2xl'>To Do List</h1></div>
        <div className='flex gap-5'>
          <input id='taskText' type='text' placeholder='Type your task' className=' bg-zinc-950/35 px-2 rounded-md w-60 placeholder:italic placeholder:text-gray-300/35 placeholder:p-2 transition-all duration-200' />
          <button
            onClick={handleClick}
            className=' bg-gradient-to-tr from-teal-300 to-teal-800 transition-all duration-200 rounded-lg px-3 py-1 hover:bg-teal-900
                       active:scale-95 active:bg-gradient-to-tr active:from-teal-800 active:to-teal-300   active:font-normal'
          >Add
          </button>
        </div>
        <ul className='flex flex-col gap-4' id='toDoList'>
          {toDoList.map((task, index) => (
            <li key={index} className='min-w-[290px] flex items-center justify-between text-lg py-2 px-4 rounded-md border shadow-sm uppercase text-wrap'>
              {task}
              <button
                className='flex w-[80px] justify-center items-center rounded-md border bg-gradient-to-tr from-red-500 to-red-700 transition-all duration-700'
                onClick={() => handleDeleteTask(index)}
              >Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {show && <Modal show={show} setShow={setShow} />}
    </div>
  )
}

export default Test
