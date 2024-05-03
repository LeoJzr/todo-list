import { Modal } from './components/Modal'
import { useState } from 'react'

function App () {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    const newTaskText = document.getElementById('taskText').value

    if (newTaskText === '') {
      setShow(true)
    } else {
      const taskContainer = document.createElement('div')
      const taskLi = document.createElement('li')
      const btnDeleteTask = document.createElement('button')

      taskContainer.className = 'min-w-[290px] '

      taskLi.textContent = newTaskText
      taskLi.classList = 'uppercase flex justify-between w-auto text-wrap items-center'

      btnDeleteTask.textContent = 'Delete'
      btnDeleteTask.className = 'h-[30px] ml-2 to-zinc-950/50 px-5 rounded-md border bg-gradient-to-tr from-zinc-500/50 hover:bg-gradient-to-tr hover:to-red-950 hover:from-red-700 active:bg-gradient-to-tr active:from-red-950 active:to-red-700 active:scale-95 transition-all duration-700'
      btnDeleteTask.onclick = function () {
        taskContainer.remove()
      }

      taskContainer.appendChild(taskLi)
      taskLi.appendChild(btnDeleteTask)
      document.getElementById('toDoList').appendChild(taskContainer)
      document.getElementById('taskText').value = ''
    }
  }

  return (
    <div className=' flex justify-around'>
      <div className='gap-5 p-2 min-w-[370px] max-w-[600px] flex flex-col place-content-center items-center text-center border border-solid  border-zinc-200/35 mt-2 rounded-lg'>
        <div className=' w-auto px-10'><h1 className=' font-bold text-2xl'>To Do List</h1></div>
        <div className='flex gap-5'>
          <input id='taskText' type='text' placeholder='Type your task' className=' bg-zinc-950/35 px-2 rounded-md w-60 placeholder:italic placeholder:text-gray-300/35 placeholder:p-2 transition-all duration-200' />
          <button
            onClick={handleClick}
            className='bg-gradient-to-tr from-teal-300 to-teal-800 transition-all duration-200 rounded-lg px-3 py-1 hover:bg-teal-900
            hover:bg-gradient-to-tr hover:to-teal-800 hover:from-teal-200
            active:scale-95 active:bg-gradient-to-tr active:from-teal-800 active:to-teal-300   active:font-normal'
          >Add
          </button>

        </div>
        <ul className='flex flex-col gap-4 max-w-[300px]' id='toDoList' />
      </div>
      {show && <Modal show={show} setShow={setShow} />}
    </div>
  )
}

export default App
