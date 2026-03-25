import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className='flex justify-around py-2 text 
      w-full backdrop-blur-md fixed border-b-1 border-amber-50'>
        <div className="logo text-2xl font-bold">Mini<span className='text-blue-400'>Blogs</span></div>
        <div className="links">
            <ul className='flex'>
                <li className='px-2 text-lg hover:text-blue-500 hover:underline'><a href="">Blogs</a></li>
                <li className='px-2 text-lg hover:text-blue-500 hover:underline'><a href="">About</a></li>
                <li className='px-2 text-lg hover:text-blue-500 hover:underline'><a href="">Contact</a></li>
            </ul>
        </div>
        <div className="cta">
            <button className='button bg-blue-700 px-4 rounded-xl text-lg'>Add Blog</button>
        </div>
      </div>
    </div>
  )
}

export default Nav
