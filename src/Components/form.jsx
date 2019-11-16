import React, { useState, useEffect } from 'react';
import './form.css';



const Form = (props) => {
  const { data } = props;
  const [inputs, setInputs] = useState(data);
  const { name, price, description, id, url } = inputs;



  useEffect(() => {
    setInputs(data)
  }, [data])

  const handleInputChange = (event) => {
    event.persist();
    console.log("targeeeeeet", event.target)
    var input = event.target;
    if (input.files) {
      var reader = new FileReader();
      var output = document.getElementById('output');
      reader.onload = function () {
        var dataURL = reader.result;
        output.src = dataURL;

        const { target: { name, value } } = event;
        setInputs({
          ...inputs,
          [name]: value,
          url: dataURL
        })
      };
      reader.readAsDataURL(input.files[0]);
    }
    else {
      const { target: { name, value } } = event;
      setInputs({
        ...inputs,
        [name]: value
      })
    }
  }

  console.log(inputs)

  const onButtonSubmit = (event) => {
    event.preventDefault()
    props.onCreate(inputs)

     document.getElementById('output').src = '';
     document.getElementById('inputType').value = "";
  }


  return (
    <form className="form" >
      <label></label>
      <input type="text" onChange={handleInputChange} className="form-control" value={name} name="name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" />
      <label></label>
      <input type="text" onChange={handleInputChange} className="form-control" value={description} name="description" id="exampleInputPassword1" placeholder="Description" />
      <label></label>
      <input type="text" onChange={handleInputChange} className="form-control" value={price} name="price" id="exampleInputPassword1" placeholder="price" />

      <input  accept='image/*' type="file" onChange={handleInputChange} id="inputType"></input>
      <img name="url" src ='../../public/images' value={url} alt="" id="output"></img>
      <button type="submit" onClick={onButtonSubmit} className="btn butt btn-primary">{id ? 'Update' : 'Create'}</button>
    </form>
  )
};

export default Form;
