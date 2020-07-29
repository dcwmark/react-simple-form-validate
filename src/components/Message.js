import React from "react";
import "../styles.css";

const Form = (props) => {

  return (
    <p>
      { props.valid ? 'Good' : 'Bad!' }
    </p>
  );
};

export default Form;
