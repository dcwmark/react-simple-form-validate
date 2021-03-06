import React, { useState } from "react";
import "./styles.css";
import Form from './components/Form';
import Message from './components/Message';

const App = () => {
  const [valid, setValid] = useState(false);

  return (
    <>
      <Form  valid={ valid } setValid={ setValid } />
      <Message valid={ valid } />
    </>
  );
};

export default App;
