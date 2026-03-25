import React, { useState } from 'react'

const ConditinalRendering = () => {
    const [sub,setSub]= useState(false)
  return (
    <div>
      <button onClick={()=>setSub(!sub)}
       className={sub ? "bg-red-500 text-white":"bg-green-400 text-white"}>
        {sub ? "Subscribed":"Subscribe"}
        </button>
    </div>
  )
}

export default ConditinalRendering
