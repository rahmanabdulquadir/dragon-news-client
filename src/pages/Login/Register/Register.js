import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('')
  const {createUser} = useContext(AuthContext)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    
    createUser(email, password)
    .then(res => {
      const user = res.user;
      form.reset()
      setError('')
      console.log(user)
    })
    .catch(err => {
      console.error(err)
      setError(err.message)
    })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter your name" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your PhotoURl</Form.Label>
        <Form.Control name='photoURL' type="text" placeholder="Enter your photoURL" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
      <Form.Text className="text-muted">
        <span className='text-danger'>{error}</span>
      </Form.Text>
    </Form>
  );
};

export default Register;