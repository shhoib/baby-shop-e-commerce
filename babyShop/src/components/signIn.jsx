import React, { useContext, useEffect, useRef } from 'react'
import './style.css'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { context } from '../store/context';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {

  const data = useContext(context);
  const inputRef = useRef(null);
  const { signin, setSignin } = data;
  const navigate=useNavigate();


  const submitSignin = () => {
    const email = inputRef.current.email.value;
    const password = inputRef.current.Password.value;
    const username = inputRef.current.username.value;
    const confirmpassword = inputRef.current.ConfirmPassword.value;

    setSignin([ ...signin,{ email, password, username, confirmpassword }])
    console.log(signin);
     navigate('/login')
  }

  return (
    <div>
      <Container className=" mt-5 p-5 " >
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>Signup</h2>
            <Form ref={inputRef} onSubmit={(e) => e.preventDefault()}>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>UserName</Form.Label>
                <Form.Control type="username"
                  placeholder="Enter username"
                  name='username' />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email"
                  placeholder="Enter email"
                  name='email' />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="Password"
                  placeholder="Enter Password"
                  name='Password' />
              </Form.Group>

              <Form.Group controlId="formBasicConfirmPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="ConfirmPassword"
                  placeholder="ConfirmPassword"
                  name='ConfirmPassword' />
              </Form.Group>

              <Button className='mt-3 mb-2' variant="primary" type="submit"
                onClick={submitSignin} >
                LogIn
              </Button>

            </Form>
          </Col>
        </Row>
      </Container>;

    </div>
  )
}

export default SignIn