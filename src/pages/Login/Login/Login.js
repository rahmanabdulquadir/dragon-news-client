import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState('')
  const {logIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  let from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
    .then(res => {
      const user = res.user;
      form.reset()
      setError('')
      navigate(from, { replace: true });
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
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" required/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
      <Form.Text className="text-muted text-danger">
        {error}
      </Form.Text>
    </Form>
  );
};

export default Login;
