import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
const ViewStudent = () => {

  const { id } = useParams()

  const [student,setStudent] = useState(null)
   const [notFound,setNotFound] = useState('')
  useEffect(() => {

    fetch(`http://localhost/revision/API/viewStu.php?id=${id}`)
      .then(res => res.json())
      .then(data => {
          if(data.status === "success"){
      setStudent(data.data)
    } else {
        setNotFound(data.message)
    }
      })

  }, [])
  return (
    <div className="p-6">
      {
       notFound && (
        <h1 className="text-red-600">User Not Found!</h1>
       )
      }
      {
        student && (
            <>
            <h2 className="text-2xl font-bold">
        Student Details
      </h2>

      <p className="mt-4">
        Student ID: {id}
      </p>
      <p className="mt-4">
        Student Name: {student.name}
      </p>
      <p className="mt-4">
        Student Course: {student.course}
      </p>

            </>
        )
      }
    </div>
  )
}

export default ViewStudent