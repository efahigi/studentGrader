import React,{useState} from 'react'

function Score(props) {
    return (
        
    <div className='score'>
        <ul>
          {props.score.map((score,index)=>{
         return (
            <div key={index}>
            <li> <p className='scores'>{score.scores.date}:{score.scores.score}</p></li>
        
            </div>
         )
         })} 
            </ul> 
    </div> 
  
    )
}

export default Score
