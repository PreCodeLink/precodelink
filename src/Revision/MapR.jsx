import React from 'react'

const MapR = () => {
    const students = [
        {
            id :1,
            name:'Basheer Lawal',
            age:19,
            city: 'Zamfara'
        },  {
            id:2,
            name:'Ameenu Lawal',
            age:22,
            city: 'Kano'
        },  {
            id:3,
            name:'Muhd Lawal',
            age:30,
            city: 'Zurmi'
        }
    ]
  return (
    <div>
       <table className='table'>
        <thead>
            <tr>
                <td>Name</td>
                <td>Age</td>
                <td>City</td>
            </tr>
        </thead>
        <tbody>
                {
                    students.map((student,index)=>(
                        <tr>
                        <td key={student.id}>{student.name}</td>
                        <td key={student.id}>{student.age}</td>
                        <td key={student.id}>{student.city}</td>
                        </tr>
                    ))
                }
        </tbody>
       </table>
    </div>
  )
}

export default MapR
