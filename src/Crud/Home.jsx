import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Home = () => {

  const [students,setStudents] = useState([])
  const [mess,setMess] = useState("")

  // Get all students
  const GetStudent = () => {

    fetch("http://localhost/revision/API/view.php")
      .then(res => res.json())
      .then(data => setStudents(data))

  }

  useEffect(()=>{
    GetStudent()
  },[])


  // Delete student
  const deleteStudent = (id) => {

    if(!window.confirm("Are you sure you want to delete this student?")) return

    fetch(`http://localhost/revision/API/dellStu.php?id=${id}`)
      .then(res => res.json())
      .then(data => {

        if(data.status === "success"){
          setMess(data.message)
          GetStudent()
        }

      })

  }

  return (
    <div className="p-6">

      {mess && (
        <p className="text-green-600 font-semibold mb-3">
          {mess}
        </p>
      )}

      <h2 className="text-2xl font-bold mb-4">
        Student List
      </h2>

      <table className="w-full border">

        <thead className="">

          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Age</th>
            <th className="p-2">Course</th>
            <th className="p-2">View</th>
            <th className="p-2">Delete</th>
          </tr>

        </thead>

        <tbody>

          {students.map((student)=>(
            <tr key={student.id} className="text-center border">

              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.age}</td>
              <td className="p-2">{student.course}</td>

              <td>

                <Link
                  to={`/view/${student.id}`}
                  className="text-blue-500 underline"
                >
                  View
                </Link>

              </td>

              <td>

                <button
                  onClick={() => deleteStudent(student.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}

export default Home