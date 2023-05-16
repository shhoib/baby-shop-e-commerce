import React, { useContext, useRef } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { context } from '../store/context';
import { useNavigate } from 'react-router-dom';


const Adminlogin = () => {

    const {adminlogin}=useContext(context);
    const inputRef = useRef(null);
    const navigate =useNavigate();

    const handlelogin=()=>{ 
    const adminusername = inputRef.current.username.value;
    const adminpassword = inputRef.current.password.value;
    if(adminlogin.username===adminusername&&adminlogin.password===adminpassword){
     navigate('/admin/users')
    }else{
      alert('This username and password is not authorised' )
    }
    }
    
  return (
    <div>
         <Container className=" mt-5 p-5 " >
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>Login</h2>
            <Form ref={inputRef} onSubmit={(e) => e.preventDefault()}>

              <Form.Group  controlId="formBasicEmail">
                <Form.Label>Admin username</Form.Label>
                <Form.Control type="username"
                  placeholder="Enter username"
                  name='username'></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Admin password</Form.Label>
                <Form.Control type="password"
                  placeholder="Password"
                  name='password' />
              </Form.Group>
              <Button onClick={handlelogin} className='mt-3 mb-2' variant="primary" type="submit" >
                Login
              </Button>
              </Form>
          </Col>
        </Row>
      </Container>;
    </div>
  )
}

export default Adminlogin