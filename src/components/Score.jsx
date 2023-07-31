import React,{useState} from 'react'

function Score(props) {
    return (
        
    <div className='score'>
          {props.score.map((score,i) =>{
              return (
                <div key={i}>
                    <ul> 
                        <div className='dateSore1'>
                         <li><h3>Date: {score.scores[0].date} Score: {score.scores[0].score}</h3></li>
                         
                        </div>
                        
                        <div className='dateSore2'>
                        <li><h3>Date: {score.scores[1].date} Score:  {score.scores[1].score}</h3></li>
                        </div>
                        
                        <div className='dateSore2'>
                        <li><h3>Date: {score.scores[2].date}  
                        Score: {score.scores[2].score}</h3> </li>
                        </div>
                    </ul>
                </div>
                );
            })}
         </div>
        );  
}       
export default Score
