// import files
import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';

// validate the email format, import the utility function
import { validateEmail } from '../utils/helpers';


// contact function
function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  // initial state of the errorMessage is an empty string
  const [errorMessage, setErrorMessage] = useState('');
  // destructuring the formState into name properties (name, email, message)
  const { name, email, message } = formState;

  // declare the handleSubmit function in the contact component
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };
 
  // declare the handleChange function, conditional statement nested inside following conditional statement
  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
      // The nested conditional checks whether the values of these elements are blank
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    // setFormState (wrap the setter function), conditional statement only allows state to update w/ the user input if there is no error message
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

 
return (
  <section>
    <h2 id="h2tag">Contact Me</h2>
    <p id='reach-out'>
    Interested in reaching out  <br></br> You can fill in the contact form below.
    </p>
    <form id="contact-form" onSubmit={handleSubmit}>
      <Row>
        <Col>
       <label htmlFor="name" id="nametag">Name:</label> 
       <input type="text" name="name" defaultValue={name} onBlur={handleChange} /> 
        </Col>
        <Col>
        <label htmlFor="email" id="emailtag">Email:</label>
        <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </Col>
      </Row>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <button id="button" type="submit">Submit</button>
    </form>
  </section>
);
}

export default ContactForm;
