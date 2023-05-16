
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { FiShoppingCart,FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { context } from '../store/context';


function NavigationBar() {
  const navigate = useNavigate();
  const {items,userLogin,signin,auth,setAuth} = useContext(context);

  // navigate( '/Cart' )
  const handlecart=()=>{
    auth ?  navigate( '/Cart' ) : alert("please login first")
  }

  const handleLogin= ()=>{
      navigate('/login')
     console.log(signin);
  }
  const handlelogout=()=>{
    const logingout = window.confirm("are you sure you want to logout")
    if(logingout){
      setAuth(false);
      navigate('/login')
    }else{
      null
    }
  }

  return (
    <Navbar className='navbarheight' bg="dark" expand="lg" variant="dark" >
      <Container fluid >
        <Navbar.Brand href="/" className="mx-4">Baby Mall</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/' className="me-3">Home</Nav.Link>
            <Nav.Link as={Link} to='/shop' className="me-3">Shop</Nav.Link>
            <Nav.Link href="#about" className="me-3">About Us</Nav.Link>
            <Nav.Link href="#contact"> Contact Us</Nav.Link>
            <Nav.Link as={Link} to='/admnlogin'> Admin</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-3"
              aria-label="Search"
            />
            <Button variant="outline-success" className="me-2" >Search</Button>
            <Button onClick={handlecart} className="me-1" bg="dark" variant='dark' ><FiShoppingCart /></Button>
            <Button className="me-1" bg="dark" variant='dark' >
              {auth ?  <div onClick={handlelogout}><FiLogOut/></div> : <div  onClick={handleLogin}><FaUser/></div> }
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
