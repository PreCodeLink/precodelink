import { useState } from "react"

const AddStudent = () => {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [course, setCourse] = useState("")
 const [message,setMessage] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    const formData = new FormData()

    formData.append("name",name)
    formData.append("age",age)
    formData.append("course",course)

    fetch("http://localhost/revision/API/addStu.php",{
      method:"POST",
      body:formData
    })
    .then(res => res.json())
    .then(data => {

      if(data.status === "success"){
        setMessage(data.message)
        setName("")
        setAge("")
        setCourse("")
      }else{
        setMessage(data.message)
      }

    })

  }

  return (
    <div className="p-6">

      <h2 className="text-2xl font-bold mb-4">
        Add Student
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md">
            
      {message && <p>{message}</p>}

        <input
          type="text"
          placeholder="Name"
          className="border p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Age"
          className="border p-2"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          type="text"
          placeholder="Course"
          className="border p-2"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />

        <button className="bg-blue-600 text-white p-2">
          Save Student
        </button>

      </form>

    </div>
  )
}

export default AddStudent