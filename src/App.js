import React, { useState } from 'react';
import './App.css';
import Form from './Components/form'
import Card from './Components/card'

const ex={
  id: null,
  name: "",
  description: "",
  price: "",
  url:""
}
function App() {
  const [state, setState] = useState({ events: [], template: { ...ex }})
  const { events, template } = state;

  const onNewEventCreate = (inputs) => {
    if(inputs.id != null){
      const newEvents = events.map((event)=>{
        return event.id === inputs.id ? inputs : event
      })
      setState({
        ...state,
        events: [ ...newEvents ],
        template: {
          id: null,
          name: "",
          description: "",
          price: "",
          url:""
        }
      })
      return
    }
    const newEvent = {
      ...inputs,
      id: new Date().valueOf()
    }
    setState({
      ...state,
      events: [ ...events, newEvent ],
      template: {  
        id: null,
        name: "",
        description: "",
        price: "",
        url:""
      }
    })  
  }

  const removeItems = (id) => {
    const filteredEvents = events.filter((event) => {
      return event.id !== id
    });
    setState({
      ...state,
      events: filteredEvents
    })
  }
  const editItem=(id)=>{
    const findedEvent = events.find((event) => {
      return event.id === id
    });
    console.log('finevent',findedEvent)
    setState({
      ...state,
      template: findedEvent
    })
  }

  return (
    <div className='general'>
      <Form data={template} onCreate={onNewEventCreate}/>
      <div className='list'>
            {
                events.map((event) =>
                    <Card
                      key={event.id} 
                      onRemove={()=>removeItems(event.id)}
                      onEdit={()=>editItem(event.id)}
                      name={event.name} 
                      description={event.description}  
                      price = {event.price}
                      url={event.url}
                     />
                )
            }
        </div>
     
    </div>

  );
}

export default App;
