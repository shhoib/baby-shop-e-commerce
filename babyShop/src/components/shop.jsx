import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap'
import { context } from '../store/context';
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Shop = () => {


    const { products } = useContext(context);
    const navigate = useNavigate();


    return (
        <div className="d-flex flex-wrap justify-content-around align-items-stretch ">
            {products.map((item) => (
                <div className='mb-3 pt-6 '>
                    <Card className='shadow p-3 bg-body-tertiary rounded mt-5' style={{ width: '18rem' }} key={item.id}>
                        <Card.Img className='listingimages' variant="top" src={item.image} />
                        <Card.Body className="text-center">
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                                {`₹ ${item.rate}`}
                            </Card.Text>
                            <Button onClick={() => navigate(`/view/${item.id}`)} variant="primary" >View product</Button>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    )
}

export default Shop
