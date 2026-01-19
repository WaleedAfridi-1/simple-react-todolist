import React, { useState } from 'react'

const App = () => {

  const [item, setItem] = useState([]);
  const [value, setValue] = useState('');


  const addItem = () => {
    if(value.trim() === '') return;

    setItem(prev => [
      {
        id: Date.now(),
        text: value,
        completed: false,
      }, ...prev
    ]);
    setValue('');

  }

  const deleteItem = (index) => {
    setItem(prev => prev.filter((item) => (
      item.id !== index
    )))
  }
  const Toggle = (id) => {
    setItem(prev => prev.map(itm => (itm.id === id ? { ...itm, completed: !itm.completed } : itm)))
  }


return (
  <div className='w-full min-h-screen px-10 py-7 flex flex-col items-center gap-20 '>

    <div className='w-150 h-50 ring-2 ring-gray-700 flex flex-col items-center gap-8 py-3 rounded'>
      <input type="text" placeholder='Add item.' name="" id=""
        className=' px-6 py-3 ring-1 ring-gray-700 rounded-xl'
        onChange={(e) => setValue(e.target.value)} value={value}
      />

      <button className='bg-gray-700 px-6 py-3 text-white font-bold rounded-2xl hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer'
        onClick={addItem}
      >
        Add Item
      </button>

    </div>

    <ul className='w-full  h-auto px-30 py-15  flex  justify-center flex-col gap-5'>
      {item.map((itm) => (

        <li key={itm.id} className={`${itm.completed ? 'bg-gray-500':'bg-gray-700 '} px-10 py-8 w-full h-auto  rounded  text-white  flex justify-between`}>
          <h1 className={` w-[70%]   h-auto text-2xl font-bold ${itm.completed ? 'line-through text-green-300':''}`}>{itm.text}</h1>

          <button className='text-xl text-green-400 border px-6 py3 rounded-2xl cursor-pointer font-bold' onClick={() => Toggle(itm.id)}>{itm.completed ? 'Undo' : 'Complete'}</button>
          <div className=' flex  w-[10%] justify-around  text-2xl'>
            <i className="ri-delete-bin-line  cursor-pointer hover:scale-105 transition-all ease-in-out duration-300 hover:text-gray-100"
              onClick={() => deleteItem(itm.id)}
            ></i>
          </div>
        </li>
      ))}
    </ul>
  </div>
)}


export default App
