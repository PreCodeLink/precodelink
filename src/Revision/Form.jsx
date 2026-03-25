import React, { useState } from 'react'

const Form = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    function submit(e){
       e.preventDefault()
       alert(email,pass)
    }
  return (
    <div>
      <form onSubmit={submit}>
        <input type="text"
         className='bg-white'
         placeholder='Email'
         onChange={(e)=>setEmail(e.target.value)}
        /> <br />
         <input type="text"
         className='bg-white'
         placeholder='Password'
         onChange={(e)=>setPass(e.target.value)}
        />
        <button className='bg-green-400 px-2 py-1 border-0 rounded-2xl text-black'>Login</button>
      </form>
    </div>
  )
}

export default Form
