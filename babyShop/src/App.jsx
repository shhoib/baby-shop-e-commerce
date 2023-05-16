

import { useState, useReducer, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar'
import Home from './components/Home';
import Shop from './components/shop';
import { productListing } from './components/productlisting';
import { context } from './store/context';
import { Route, Routes, useLocation } from 'react-router-dom';
import View from './components/view';
import Cart from './components/cart';
import Login from './components/login';
import SignIn from './components/signIn';
import Sidebar from './components/sidebar';
import Users from './components/users';
import Products from './components/products';
import Additems from './components/additems';
import Edit from './components/edit';
import Adminlogin from './components/adminlogin';
import Footer from './components/footer';


function App() {

 

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.includes('admin')) {
      setChange(true)
    } else {
      setChange(false)
    }
  }, [location])

  const [change, setChange] = useState(false)
  const [auth, setAuth] = useState(false)
  const [items, setItems] = useState([]);
  const [editdata, setEditData] = useState([]);
  const [signin, setSignin] = useState([]);
  const [products, setproducts] = useState(productListing)
  const [search, setSearch] = useState('');
  const [userLogin, setUserLogin]= useState(false)
  const [adminlogin, setAdminLogin] = useState({
    username: "admin",
    password: "nanadmin"
  })
  const state = { items, setItems, adminlogin, setAdminLogin, signin, search,
     setSearch, setSignin, editdata, setEditData, products, setproducts,userLogin, setUserLogin,auth, setAuth };

  return (
    <div>
      <context.Provider value={state}>

        {/* <Sidebar/> */}
        {change ? null : <NavigationBar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/view/:id' element={<View />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/admnlogin' element={<Adminlogin />} />
          <Route element={<Sidebar />}>
            <Route path='/admin/users' element={<Users />} />
            <Route path='/admin/products' element={<Products />} />
            <Route path='/admin/additems' element={<Additems />} />
            <Route path='/admin/edit' element={<Edit />} />
          </Route>
        </Routes>
        {change ? null : <Footer />}

      </context.Provider>
    </div>

  )
}

export default App
