import React from 'react';

const Box = ({item})=>{
    return (    
        <div id={item.id}>
            <div className='title'>
               <h2>{item.title}</h2> 
            </div>
            <p>{item.description}</p>
       <a href='#' className='button'>Learn more</a>
        </div>        
    )
}

export default Box;