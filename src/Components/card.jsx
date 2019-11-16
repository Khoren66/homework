import React from 'react';
import './card.css';


const Card = (props) => {
    console.log("props CARD", props)
    const { name, description, price, onRemove,onEdit ,url} = props;
    
    return (

        <div className="card">
            <img src={`${url}`} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
                <div className="card_button">
                <button onClick={onEdit} className="btn btn-primary">Edit</button>
                <button onClick={onRemove} className="btn btn-primary">Delete</button>    
                </div>
                 
            </div>
        </div>

    )
}
export default Card;

