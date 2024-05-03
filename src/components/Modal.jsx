export function Modal ({ show, setShow }) {
  return (
    <div className={`modal ${show ? 'active' : ''} absolute w-full h-full bg-black/35 place-content-center flex `}>
      <div className='p-5 items-center flex flex-col gap-5 h-auto m-auto bg-zinc-900 border rounded-lg'>
        <h2 className='flex font-bold'>There is no text for your task </h2>
        <p className='flex'>Please, enter a task.</p>
        <button
          className='flex to-zinc-950/50 px-6 py-1 rounded-md border bg-gradient-to-tr from-zinc-500/50
            hover:bg-gradient-to-tr hover:to-zinc-950 hover:from-zinc-700
            active:bg-gradient-to-tr active:from-zinc-950 active:to-zinc-700 active:scale-95'
          onClick={() => setShow(false)}
        >Ok
        </button>
      </div>
    </div>
  )
}
