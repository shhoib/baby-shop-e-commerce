import React, { useContext } from 'react'
import { context } from '../store/context';
// import {Card , Button, Container, Row, Col,Image} from 'react-bootstrap'
import { Image, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BsCartXFill } from 'react-icons/Bs';



const Cart = () => {
  const data = useContext(context);
  const navigate = useNavigate();
  const { items, setItems, count, dispatch } = data

  const removeproducts = (item) => {
    const remove = parseInt(item.target.id)
    const updated = items.filter((item) => item.id !== remove)
    setItems(updated);
  }
    
  const grandTotal = items.reduce((total, item) => total + item.rate * item.qty, 0);
 
  const increment = (id) => {
    const newData = items.map((item) => (
      item.id === id ? {
        id: item.id,
        name: item.name,
        des: item.des,
        deepdes: item.deepdes,
        rate: item.rate,
        image: item.image,
        qty: item.qty + 1
      } : item))
      setItems(newData)
    }
    const decrement = (id) => {
    const newData = items.map((item) => (
      item.id === id && item.qty > 1 ? {
        id: item.id,
        name: item.name,
        des: item.des,
        deepdes: item.deepdes,
        rate: item.rate,
        image: item.image,
        qty: item.qty - 1
      } : item))
      setItems(newData)
  }

  return (
    <div >
      {items.length <= 0 ?
        <div className="d-flex justify-content-center align-items-center emptycart">
          <div className='carticon'><BsCartXFill /></div>
          <h3>Your cart is empty please add anything in it.</h3>
        </div>
        :
        items.map((item) => (
          <Card border="dark" key={item.id} className="m-3 mx-4 h-100" style={{ maxHeight: 320 }}>
            <div className='d-flex' style={{ minHeight: 300, background: 'lightgrey' }}>
              <Image src={item.image} className="img-fluid p-3" style={{ maxHeight: 300 }} />
              <div>
                <h1>{item.name}</h1>
                <p>{item.des}</p>
                <p>{item.deepdes}</p>
                <div className='d-flex px-3'>
                  <Button onClick={() => decrement(item.id)}>-</Button>
                  <p className='mx-2'>{item.qty}</p>
                  <Button onClick={() => increment(item.id)}>+</Button>
                </div>
                <h3>₹ {item.rate*item.qty}</h3>
                <Button id={item.id} onClick={removeproducts} variant="danger">Remove from cart</Button>
              </div>
            </div>
          </Card>
        ) 
        )}
        <h4 className='gtotal'>Total amount : {grandTotal} </h4>
        <Button className='checkoutbtn '  variant='success'>Check out</Button>
    </div>
  )
}

export default Cart



// import React, { useContext } from 'react';
// import { context } from '../store/context';
// import { Image, Card, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { BsCartXFill } from 'react-icons/Bs';

// const Cart = () => {
//   const data = useContext(context);
//   const navigate = useNavigate();
//   const { items, setItems, count, dispatch } = data;

//   const removeproducts = (item) => {
//     const remove = parseInt(item.target.id);
//     const updated = items.filter((item) => item.id !== remove);
//     setItems(updated);
//   };

//   const increment = (id) => {
//     const newData = items.map((item) =>
//       item.id === id
//         ? {
//             ...item,
//             qty: item.qty + 1,
//           }
//         : item
//     );
//     setItems(newData);
//   };

//   const decrement = (id) => {
//     const newData = items.map((item) =>
//       item.id === id && item.qty > 1
//         ? {
//             ...item,
//             qty: item.qty - 1,
//           }
//         : item
//     );
//     setItems(newData);
//   };

//   const grandTotal = items.reduce((total, item) => total + item.rate * item.qty, 0);

//   return (
//     <div>
//       {items.length <= 0 ? (
//         <div className="d-flex justify-content-center align-items-center emptycart">
//           <div className="carticon">
//             <BsCartXFill />
//           </div>
//           <h3>Your cart is empty please add anything in it.</h3>
//         </div>
//       ) : (
//         <>
//           {items.map((item) => (
//             <Card border="dark" key={item.id} className="m-3 mx-4 h-100" style={{ maxHeight: 320 }}>
//               <div className="d-flex" style={{ minHeight: 300, background: 'lightgrey' }}>
//                 <Image src={item.image} className="img-fluid p-3" style={{ maxHeight: 300 }} />
//                 <div>
//                   <h1>{item.name}</h1>
//                   <p>{item.des}</p>
//                   <p>{item.deepdes}</p>
//                   <div className="d-flex px-3">
//                     <Button onClick={() => decrement(item.id)}>-</Button>
//                     <p className="mx-2">{item.qty}</p>
//                     <Button onClick={() => increment(item.id)}>+</Button>
//                   </div>
//                   <h3>₹ {item.rate * item.qty}</h3>
//                   <Button id={item.id} onClick={removeproducts} variant="danger">
//                     Remove from cart
//                   </Button>
//                 </div>
//               </div>
//             </Card>
//           ))}
//           <Button className="checkoutbtn" variant="success">
//             Check out ({`₹ ${grandTotal}`})
//           </Button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;
