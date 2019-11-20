import React, { useState, useEffect } from 'react'
import './product.css'
import Card from './Card';

function Products({ addToCard }) {
	
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/item")
		.then(res => res.json())
		.then(data => setData(data))
}, [])
				


	return (
		<div className="list">
			{data.map(item => 
				<Card btnName="Add to Cart" cardClick={addToCard} key={item.id} item={item} />
			)}
		</div>
	)
}

export default Products
