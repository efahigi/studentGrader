import React,{useState} from 'react'

function Student(props) {
   
  return (
    <div className='sudents'>
        {props.student.map((student)=>{
        return (
        <div>
            <div className='name'>Name:{student.name}</div>
            <div className='bio'>Bio:{student.bio}</div>
        </div>
        
        )
    })}
    </div>   
  )
}

export default Student
