import React from 'react'
import Card from './Card'
import './Cart.css'
function Cart({ selected, removeCard }) {
    return (
        <div className="container">
            {(selected.length !== 0) ? 
            selected.map(item => 
                <Card cardClick={removeCard} btnName="Remove" key={`selected-${item.id}`} item={item} />
            ) :
            
            <div className="alert alert-secondary" role="alert">No Selected Items in Cart</div>
            }
        </div>
    )
}

export default Cart
