
import React from 'react';
import { Image, Button, Card, CardGroup } from 'react-bootstrap';
import blueBaby from '../images/blueBaby.jpg';
import help from '../images/help.jpg';
import newborn1 from '../images/newborn1.jpg';
import products from '../images/products.jpg';
import { AiFillTags } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const navigate = useNavigate();

  return (
    <div style={{ position: 'relative' }}>
      <Image style={{width:'100%',height:"120vh"}} src={blueBaby} alt="Blue Baby" fluid />
      <Button variant='dark'
        
        className="rounded-lg"
        style={{
          position: 'absolute',
          top: '37%',
          left: '72%',
          zIndex: 1,
        }}
      >
        Shop Now
      </Button>
      <span  style={{ position: 'absolute', top: '30%', left: '70%'}}><AiFillTags/></span>
      <span  style={{ position: 'absolute', top: '30%', left: '72%',fontWeight:600, fontFamily:'cursive',color:'grey'}}>
         Flat 10% off on your first purchase + <br/> xtra cashbacks!!
      </span>
      <h1 variant='dark' style={{fontFamily:'cursive', position: 'absolute', top: '30%', left: '10%'}}>New Arrivals</h1>
      <p style={{fontFamily:'cursive', position: 'absolute', top: '35%', left: '7%', color:'grey'}}>visit our website for amazing new collections</p>

      {/* cards */}

      <CardGroup  style={{ maxWidth: '100%'   }} >

        <Card className='shadow p-3 mb-5 bg-body-tertiary rounded'  style={{marginLeft:40, marginTop:25,border:'none'}} >
          <Card.Img style={{borderRadius: 30}} variant="top" src={newborn1} />
          <Card.ImgOverlay className='d-flex flex-column justify-content-center text-center'>
            <Card.Title style={{ fontFamily:'cursive' ,color:'rgba(255, 255, 255, 1', fontSize:'2.3rem'}}>For new born babies</Card.Title>
            <Card.Text style={{ fontFamily:'cursive', color: 'rgba(255, 255, 255, 1' }}>
              upto 20% discount on new born products
            </Card.Text>
            <Button onClick={()=>{navigate('shop')}} variant='dark' className='mx-auto'>Explore</Button>
          </Card.ImgOverlay>
        </Card>


        <Card className='shadow p-3 mb-5 bg-body-tertiary rounded'  style={{marginLeft:20, marginTop:25,border:'none'}} >
          <Card.Img style={{borderRadius: 30}} variant="top" src={products} />
          <Card.ImgOverlay className='d-flex flex-column justify-content-center text-center'>
            <Card.Title style={{ fontFamily:'cursive',color:'rgba(255, 255, 255, 1', fontSize:'2.3rem' }}>Baby accessories</Card.Title>
            <Card.Text style={{ fontFamily:'cursive', color: 'rgba(255, 255, 255, 1' }}>
              Products of top brands
            </Card.Text>
            <Button onClick={()=>{navigate('shop')}} variant='dark' className='mx-auto' >Shop now</Button>
          </Card.ImgOverlay>
        </Card>

        <Card className='shadow p-3 mb-5 bg-body-tertiary rounded'  style={{marginLeft:20,marginRight:25, marginTop:25,border:'none'}} >
          <Card.Img style={{borderRadius: 30}} variant="top" src={help}  />
          <Card.ImgOverlay className='d-flex flex-column justify-content-center text-center'>
            <Card.Title style={{ fontFamily:'cursive', color:'white', fontSize:'2.5rem' }}>Help others</Card.Title>
            <Card.Text style={{ fontFamily:'cursive', color: 'rgba(255, 255, 255, 1', fontSize: '20px' }}>
              Help others kids Globally
            </Card.Text>
            <Button variant='dark' className='mx-auto'>Donate</Button>
          </Card.ImgOverlay>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Home;
