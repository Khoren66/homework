import React from 'react';
import './App.css';
import './css/default.css';
import Box from './components/box/box';
import Column from './components/portfolio/column';
import {dataBox,dataColumn} from './data';

function App() {
  return (
    <div className='wrapper'>
      <div id="three-column" className='container'>
        <div><span className="arrow-down"></span></div>
        {dataBox.map(item => {
        return <Box item={item} />
      })} 
      </div>
      <div id='portfolio' className='contsainer'>
      {dataColumn.map(item => {  
        return <Column item={item} />
      })}
      </div>
    </div>
  )
}

export default App;