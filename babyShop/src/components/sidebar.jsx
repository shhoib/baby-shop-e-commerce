import React from 'react'
import './style.css'
import ListGroup from 'react-bootstrap/ListGroup';
import { FaUser } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { AiFillDatabase,AiFillFileAdd,AiFillHome } from 'react-icons/ai';
import { Link, Outlet, useNavigate } from "react-router-dom"


const Sidebar = () => {
  
  const navigate= useNavigate();

  const tohome=()=>{
     const alert = window.confirm('are you sure you want to leave admin side') 
     if(alert){
        navigate('/')
     }else{
      null
     }
  }
    
  return (
    <div className='d-flex main ' >
    <div className='adminpg'>
    <div className=' p-4 d-flex justify-content-center'>
    <h1 style={{color:'white'}}>ADMIN</h1>
    </div>
    <div className='adminli'>
        <ListGroup variant='flush'>
            <ListGroup.Item  variant='dark'><Link to='/admin/users' className='link'><FaUser /> Users</Link></ListGroup.Item>
            <ListGroup.Item variant='dark'><Link to='/admin/products' className='link'><AiFillDatabase/> Products</Link></ListGroup.Item>
            <ListGroup.Item variant='dark'><Link to='/admin/additems' className='link'><AiFillFileAdd/> Add Items</Link></ListGroup.Item>
            <ListGroup.Item className='sideBar' onClick={tohome} variant='dark'><AiFillHome/> Home</ListGroup.Item>
            <ListGroup.Item variant='dark'><GiReceiveMoney/> Revenue</ListGroup.Item>
        </ListGroup>
        
        
    </div>
    </div>
    <Outlet/> 
    </div>
  )
}

export default Sidebar