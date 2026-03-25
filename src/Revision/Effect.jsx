import React from 'react'
import { useState,useEffect } from 'react';
const Effect = () => {
    
  const [users, setUsers] = useState([]);
const[test,setTest] = useState()
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [test]);
  console.log(users)
  return (
    <div>
      <button onClick={()=> setTest(test + 1)}>Click</button>
    </div>
  )
}

export default Effect
