// import React, { useContext, useEffect } from 'react'
// import { Card, Button, Form, FormControl, Image } from 'react-bootstrap'
// import { context } from '../store/context';
// import { useNavigate } from 'react-router-dom';


// const Products = () => {
//   const data = useContext(context);
//   const { products, setproducts, editdata, setEditData, search, setSearch } = data
//   const navigate = useNavigate();

//   const deleteproduct = (item) => {
//     const remove = parseInt(item.target.id);
//     const updated = products.filter((item) => parseInt(item.id) !== remove)
//     setproducts(updated);
//   }

//   const editproduct = (item) => {
//     const removeid = parseInt(item.target.id);
//     const daata = products.filter((item) => item.id === removeid);
//     setEditData(daata);
//     const updated = products.filter((item) => item.id !== removeid);
//     setproducts(updated);
//     console.log(editdata);
//     navigate('/admin/edit');

//   } 

//   const onchange=(e)=>{
//     setSearch(e.target.value)
//   }

//   const onsearch=(searchTerm)=>{
//      console.log( searchTerm);
//   }
//   return (
//     <div className='d-flex flex-column container'>
//       <div className='row gap-5'>

//         <Form className='d-flex justify-content-center' inline>
//           <FormControl type="text" value={search}  onChange={onchange} placeholder="Search" className="mr-sm-2 m-4 srchbar" />
//           <Button variant="dark srchbtn m-4" onClick={()=>onsearch(search)}>Search</Button>
//         </Form>


//         <div>
//         {products.filter((item)=>{
//           const searchTerm = search.toLowerCase();
//           const name = item.name.toLowerCase();
//           return (
//             searchTerm && name.startsWith(searchTerm)
//           )
//         })
//         .map((item)=>(
//        <div onClick={()=>onsearch(item.name)}>
//           <p >{item.name}</p>
//        </div>
//         ))}</div>


//         {products.map((item) => (
//           <Card className='shadow p-3 bg-body-tertiary rounded mt-5' style={{ width: '18rem' }} key={item.id}>
//             <Card.Img className='listingimages' variant="top" src={item.image} />
//             <Card.Body className="text-center">
//               <Card.Title>{item.name}</Card.Title>
//               <Card.Text>
//                 {`₹ ${item.rate}`}
//               </Card.Text>
//               <Button id={item.id} onClick={deleteproduct} variant="danger" >Delete</Button>
//               <Button className='m-3' id={item.id} onClick={editproduct} variant="info" >Edit</Button>
//             </Card.Body>
//           </Card>

//         ))}

//       </div>
//     </div>
//   )
// }

// export default Products
// import React, { useContext, useEffect, useState } from 'react'
// import { Card, Button, Form, FormControl, Image } from 'react-bootstrap'
// import { context } from '../store/context';
// import { useNavigate } from 'react-router-dom';


// const Products = () => {
//   const data = useContext(context);
//   const { products, setproducts, editdata, setEditData } = data
//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");

//   const deleteproduct = (item) => {
//     const remove = parseInt(item.target.id);
//     const updated = products.filter((item) => parseInt(item.id) !== remove)
//     setproducts(updated);
//   }

//   const editproduct = (item) => {
//     const removeid = parseInt(item.target.id);
//     const daata = products.filter((item) => item.id === removeid);
//     setEditData(daata);
//     const updated = products.filter((item) => item.id !== removeid);
//     setproducts(updated);
//     console.log(editdata);
//     navigate('/admin/edit');
//   } 

//   const onsearch=(search)=>{
//     setSearch(search.toLowerCase());
//   }

//   return (
//     <div className='d-flex flex-column container'>
//       <div className='row gap-5'>
//         <Form className='d-flex justify-content-center' >
//           <FormControl type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" className="mr-sm-2 m-4 srchbar" />
//           <Button variant="dark srchbtn m-4" onClick={onsearch}>Search</Button>
//         </Form>

//         <div>
//           {products.filter((item)=>{
//             {/* const searchTerm = search.toLowerCase(); */}
//             const name = item.name.toLowerCase();
//             return (
//               search && name.startsWith(search)
//             )
//           })
//           .map((item)=>(
//             <div onClick={() => setSearch(item.name.toLowerCase())}>
//               <p>{item.name}</p>
//             </div>
//           ))}
//         </div>

//         {products.filter((item)=>{
//           const searchTerm = search.toLowerCase();
//           const name = item.name.toLowerCase();
//           return (
//             searchTerm && name.startsWith(searchTerm)
//           )
//         })
//         .map((item) => (
//           <Card className='shadow p-3 bg-body-tertiary rounded mt-5' style={{ width: '18rem' }} key={item.id}>
//             <Card.Img className='listingimages' variant="top" src={item.image} />
//             <Card.Body className="text-center">
//               <Card.Title>{item.name}</Card.Title>
//               <Card.Text>
//                 {`₹ ${item.rate}`}
//               </Card.Text>
//               <Button id={item.id} onClick={deleteproduct} variant="danger" >Delete</Button>
//               <Button className='m-3' id={item.id} onClick={editproduct} variant="info" >Edit</Button>
//             </Card.Body>
//           </Card>
//         ))}
//       </div>
//     </div>
//   )
// }
// export default Products

import React, { useContext, useState } from 'react'
import { Card, Button, Form, FormControl } from 'react-bootstrap'
import { context } from '../store/context';
import { useNavigate } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';



const Products = () => {
  const data = useContext(context);
  const { products, setproducts, editdata, setEditData } = data
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const deleteProduct = (id) => {
    const alert = window.confirm('are you sure you want to delete')
    if(alert){
       const updated = products.filter(item => item.id !== id);
    setproducts(updated)
    }else{
      null
    }
  }

  const editProduct = (id) => {
    const product = products.find(item => item.id === id);
    setEditData([product]);
    // const updated = products.filter(item => item.id !== id);
    // setproducts(updated);
    navigate('/admin/edit');
  }

  const onSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchTerm.trim());
  }

  const filteredProducts = products.filter(item => {
    const name = item.name.toLowerCase();
    return name.includes(searchTerm);
  });

  return (
    <div className='d-flex flex-column container promain'>
      <div className='row gap-5'>
        <Form className='d-flex justify-content-center' onSubmit={handleSearch}>
          <FormControl type="text" value={searchTerm} onChange={onSearch} placeholder="Search" className="mr-sm-2 m-4 srchbar" />
          <Button variant="dark srchbtn m-4" type="submit">Search</Button>
        </Form>

       
        <Container>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>image</th>
            <th>Name</th>
            <th>Prize</th>
            <th>Description</th>
            <th>delete</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
        {filteredProducts.map((item) => (
         
      
            <tr key={item.id}>
              <td><img className='proimg' src={item.image}/></td>
              <td>{item.name}</td>
              <td>₹{item.rate}</td>
              <td>{item.des}</td>
              <td><Button onClick={() => deleteProduct(item.id)} variant="danger" >Delete</Button></td>
              <td><Button className='m-3' onClick={() => editProduct(item.id)} variant="info" >Edit</Button></td>
              {/* <td>{item.deepdes}</td> */}
              {/* <td>{item.qty}</td> */}
           
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>

      </div>
    </div>
  )
}

export default Products;
