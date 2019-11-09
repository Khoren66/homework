import React from 'react';

const Column = ({item})=>{
    const clClassName = `column${item.id}`;
    return (    
        <div className={clClassName}>
            <div className='box'>
         <a href='#'>
             <img src={item.src} alt='' className='image image-full' ></img>
         </a>
         <h3>{item.title}</h3>
         <p>{item.description}</p>
         <a href='#' className='button button-small'>Etiam posuere</a>
         </div>
        </div>        
    )
}

export default Column;