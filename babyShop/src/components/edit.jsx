import React, { useContext, useRef } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { context } from '../store/context';
import { useNavigate } from 'react-router-dom';


const Edit = () => {

  const data = useContext(context);
  const { editdata, setproducts, products } = data;
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const editproduct = () => {
    const clonedProduct = [...products];
    const [newEditdata] = editdata;
    let positionOfObject;

    clonedProduct.forEach((element, index) => {
      if (element.id == parseInt(newEditdata.id)) {
        positionOfObject = index;
      }
    })
    clonedProduct[positionOfObject].id = inputRef.current.id.value;
    clonedProduct[positionOfObject].name = inputRef.current.name.value;
    clonedProduct[positionOfObject].des = inputRef.current.des.value;
    clonedProduct[positionOfObject].deepdes = inputRef.current.deepdes.value;
    clonedProduct[positionOfObject].rate = inputRef.current.rate.value;
    clonedProduct[positionOfObject].image = inputRef.current.image.value;
    clonedProduct[positionOfObject].qty = inputRef.current.qty.value;
    setproducts(clonedProduct)
    // alert('Item added successfully')
    console.log(products);
    navigate('/admin/products');
  }

  return (

    <div className='edititems'>
      <Container  >
        <Row className="justify-content-md-center">
          <Col md={6}>
            <h2>Edit Items</h2>

            {editdata.map((item) => (
              <Form ref={inputRef}>
                <Form.Group controlId="formBasicEmail d-flex">
                  <Form.Label>ID :</Form.Label>
                  <Form.Control type="id"
                    placeholder="Enter id"
                    name='id' defaultValue={item.id}></Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Name :</Form.Label>
                  <Form.Control type="name"
                    placeholder="Enter name"
                    name='name' defaultValue={item.name}></Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>des :</Form.Label>
                  <Form.Control type="des"
                    placeholder="Enter des"
                    name='des' defaultValue={item.des}></Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>deepdes :</Form.Label>
                  <Form.Control type="deepdes"
                    placeholder="Enter deepdes"
                    name='deepdes' defaultValue={item.deepdes}></Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Rate :</Form.Label>
                  <Form.Control type="rate"
                    placeholder="Enter rate"
                    name='rate' defaultValue={item.rate}></Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Image :</Form.Label>
                  <Form.Control
                    placeholder="Enter image"
                    name='image' defaultValue={item.image}></Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Quantity :</Form.Label>
                  <Form.Control type="qty"
                    placeholder="Enter qty"
                    name='qty' defaultValue={item.qty}></Form.Control>
                </Form.Group>

                <Button className='mt-3 mb-2' variant="success" type="submit"
                  onClick={editproduct}>
                  Edit
                </Button>

              </Form>
            ))}

          </Col>
        </Row>
      </Container>;
    </div>
  )
}

export default Edit