import React from 'react'
import { useState } from 'react'

const UseStateR = () => {
    const [tasbih,setTasbih] = useState(0)
    function isClicked(){
        alert('you clicked me!')
    }
    const [name,setName] = useState('')
  return (
    <div>
      <h1>Subhanallah</h1>
      <button onClick={()=>setTasbih(tasbih +1)} className='p-3 rounded-2xl bg-white text-black'>{tasbih}</button>
       <button onClick={isClicked}>Click Me</button>
       <h2>{name}</h2>
       <input type="text" className='bg-amber-50 text-black' onChange={(e)=> setName(e.target.value)} />
    </div>
  )
}

export default UseStateR
