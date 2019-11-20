import React from 'react'

function Card({ item, cardClick, btnName}) {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">${item.price}</p>
				<button onClick={() => cardClick(item)}  className="btn btn-primary">{btnName}</button>
			</div>
	 </div>
	)
}

export default Card
