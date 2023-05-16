import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './style.css';
import { Image, Button, Card } from 'react-bootstrap';
import { context } from '../store/context';

const View = () => {
  const { id } = useParams();
  const datass =useContext(context);
 const  navigate = useNavigate();
  const {items,setItems,auth,products}= datass;

  const data = products.filter((item) => {
    return item.id === parseInt(id);
  });

  const cart=()=>{
    // console.log(auth);
    if(auth){
      const dataExist = items.filter((item)=>{
        return item.id === parseInt(id)})
        
         const [newData] = data;
         if(dataExist.length>0){
           alert ("product already exist in the cart")
         }else{
          alert("product added to cart succesfully")
           setItems([...items,newData])
   
         }
    }else{
      alert("please login first")
      navigate('/login')
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center  viewbg'>
      {data.map((item)=>{
        return(
          <Card className='shadow p-3 bg-body-tertiary rounded m-5' style={{ width: '35rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title><h2>{item.name}</h2></Card.Title><br/>
        <Card.Text><h5>{item.des}</h5></Card.Text>
        <Card.Text>{item.deepdes}</Card.Text><br/>
        <Button className='addtocartbtn' onClick={cart} variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
        )
      })}
    </div>
  );
};

export default View;
