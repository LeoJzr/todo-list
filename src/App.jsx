import { Modal } from './components/Modal'
import { useState } from 'react'

function App () {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    const newTaskText = document.getElementById('taskText').value
    console.log(newTaskText)
    if (newTaskText === '') {
      setShow(true)
    } else {
      console.log('task, ', newTaskText)
    }
  }

  return (
    <div className=' flex justify-around'>
      <div className=' gap-5 p-2 min-w-[370px] max-w-[600px] flex flex-col place-content-center items-center justify-around text-center border border-solid  border-zinc-200/35 mt-2 rounded-lg'>
        <div className=' w-auto px-10'><h1 className=' font-bold text-2xl'>To Do List</h1></div>
        <div className='flex gap-5'>
          <input id='taskText' type='text' placeholder='Type your task' className=' bg-zinc-950/35 px-2 rounded-md w-60 placeholder:italic placeholder:text-gray-300/35 placeholder:p-2 transition-all duration-200' />
          <button
            onClick={handleClick}
            className=' bg-gradient-to-tr from-teal-300 to-teal-800 transition-all duration-200 rounded-lg px-3 py-1 hover:bg-teal-900
            active:scale-95 active:bg-gradient-to-tr active:from-teal-800 active:to-teal-300   active:font-normal'
          >Add
          </button>

        </div>
        <ul className='flex' id='toDoList' />
      </div>
      {show && <Modal show={show} setShow={setShow} />}
    </div>
  )
}

export default App
