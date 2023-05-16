import React, { useContext, useRef, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { context } from '../store/context';

const Login = () => {

  const data = useContext(context);
  const inputRef = useRef(null);

  const { signin,setUserLogin,setAuth } = data;

  const navigate = useNavigate()
//  console.log(signin);

 const submitlogin = () => {
  const username = inputRef.current.username.value;
  const password = inputRef.current.password.value;
  const user = signin.filter((item)=>item.username===username && item.password===password)
  setUserLogin(true)
  setAuth(true)
  if(user.length>0){
    navigate('/')
  }else{
    alert('please sign in');
    navigate('/signin');
  }
 }
 
  return (
    <div>
      <Container className=" mt-5 p-5 " >
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>Login</h2>
            <Form ref={inputRef} onSubmit={(e) => e.preventDefault()}>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control type="username"
                  placeholder="Enter username"
                  name='username'></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"
                  placeholder="Password"
                  name='password' />
              </Form.Group>

              <Button onClick={submitlogin} className='mt-3 mb-2' variant="primary" type="submit" >
                Submit
              </Button><br />
              <span className='pb-5' >dont have an account?</span>
              <p className='createnow' onClick={() => navigate('/signin')}>Create Now</p>
            </Form>
          </Col>
        </Row>
      </Container>;
    </div>
  )
}

export default Login