import React from "react"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 bg-blue-600 text-white">

      <h1 className="text-xl font-bold">
        Student App
      </h1>

      <div className="flex gap-4">

        <Link to="/">Home</Link>

        <Link to="/add">Add Student</Link>

      </div>

    </div>
  )
}

export default Navbar