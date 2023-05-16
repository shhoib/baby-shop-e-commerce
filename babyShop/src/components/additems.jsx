import React, { useContext, useRef } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { context } from '../store/context';


const Additems = () => {

    const inputRef = useRef(null);
    const data = useContext(context);
    const {products, setproducts} = data;
 
    const additems= ()=>{
        const id = inputRef.current.id.value;
        const name = inputRef.current.name.value;
        const des = inputRef.current.des.value;
        const deepdes = inputRef.current.deepdes.value;
        const rate = inputRef.current.rate.value;
        const image = inputRef.current.image.value;
        const qty = inputRef.current.qty.value;
        setproducts([...products,{id,name,des,deepdes,rate,image,qty}])
        alert('Item added successfully')
        // console.log(products);
    }


  return (
    <div className='additem'>
       <Container  >
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>Add Items</h2>
            <Form ref={inputRef} onSubmit={(e) => e.preventDefault()}>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>ID :</Form.Label>
                <Form.Control type="id"
                  placeholder="Enter id"
                  name='id'></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name :</Form.Label>
                <Form.Control type="name"
                  placeholder="Enter name"
                  name='name'></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>des :</Form.Label>
                <Form.Control type="des"
                  placeholder="Enter des"
                  name='des'></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>deepdes :</Form.Label>
                <Form.Control type="deepdes"
                  placeholder="Enter deepdes"
                  name='deepdes'></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Rate :</Form.Label>
                <Form.Control type="rate"
                  placeholder="Enter rate"
                  name='rate'></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Image :</Form.Label>
                <Form.Control 
                  placeholder="Enter image"
                  name='image'></Form.Control>
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Quantity :</Form.Label>
                <Form.Control type="qty"
                  placeholder="Enter qty"
                  name='qty'></Form.Control>
              </Form.Group>

              <Button className='mt-3 mb-2' variant="success" type="submit"
               onClick={additems}>
                Add Item
              </Button>

              </Form>
          </Col>
        </Row>
      </Container>;
    </div>
  )
}

export default Additems