import React, { useState } from 'react';
import Nav from './components/Nav';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  const [tab, setTab] = useState({tab: "Prod"})
  const [selected, setSelected] = useState([])
  
  const changeTab = tab => {
    setTab({tab: tab})
  }

  const addToCard = item => {
    if(selected.every(elem => elem.id !== item.id)) {
      setSelected([...selected, item])
    }
  }

  const removeCard = item => {
    setSelected(selected.filter(elem => elem.id !== item.id))
  }

  return (
    <div className="App">
      <Nav count={selected.length} tab={tab.tab} changeTab={changeTab}/>
      {(tab.tab === "Prod") ? <Products addToCard={addToCard}/> : <Cart removeCard={removeCard} selected={selected}/>}
    </div>
  );
}

export default App;
