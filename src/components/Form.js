import React, { useState } from "react";
import "../styles.css";

const Form = (props) => {
  console.log(`${JSON.stringify(props)}`);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [url, setUrl] = useState('');

  const setError = () => props.setMsg.setValid(false);

  const nameValidator = () => {
    if (name.length <= 3 || name.length >= 30) {
      setError();
    }
    const regex = RegExp(/^[a-zA-Z ]*$/);
    if (! regex.test(name)) setError();
  };

  const emailValidator = () => {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (! regex.test(email)) setError();
  };

  const phoneValidator = () => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (! regex.test(phone)) setError();
  };

  const urlValidator = () => {
    const regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    if (! regex.test(url)) setError();
  };

  const validator = {
    'name': nameValidator,
    'email': emailValidator,
    'phone': phoneValidator,
    'url': urlValidator,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.setMsg.setValid(true);

    validator['name'](name);
    validator['email'](email);
    validator['phone'](phone);
    validator['url'](url);

    if (props.setMsg.valid) document.getElementById("form-id").reset();
  };

  return (
    <>
      <form id="form-id">
        <h3>Name:<br />
          <input type="text"
                 placeholder="Enter name here"
                 value={ name }
                 onChange={ (e) => setName(e.target.value) }
                 required />
       </h3>
       <h3>Email:<br />
         <input type="text"
                placeholder="Enter email here"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
                required />
       </h3>
       <h3>Phone:<br />
         <input type="text"
                placeholder="Enter phone here"
                value={ phone }
                onChange={ (e) => setPhone(e.target.value) }
                required />
       </h3>
       <h3>Urls:<br />
         <input type="text"
                placeholder="Enter blog url here"
                value={ url }
                onChange={ (e) => setUrl(e.target.value) }
                required />
       </h3>
       <button  onClick={ handleSubmit }>Verify</button>
      </form>
    </>
  );
};

export default Form;