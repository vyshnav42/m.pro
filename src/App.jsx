import 'bootstrap/dist/css/bootstrap.min.css';
import { Mycontext } from './context/context';
import Login from './pages/Login';
import Register from './pages/Register';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import {Allproducts }from'./Productdata/Products'
import Collection from './components/Collection';
import Dog from './components/Dog';
import Cat from './components/Cat';
import Navba from './components/Navbar'
import Home from './pages/Home';
import Search from './SearchBar';
import Cart from './components/Cart';
import Productdetails from './components/Productdetails';
import Footer from './components/Footer'
import Admin from './Admin/Adminlogin'
import Adminlogin from './Admin/Adminlogin';
import Adminproduct from './Admin/Adminproduct';
import Sidebar from './Admin/Adsidebar';
import Editproduct from'./Admin/Editproduct'
import Adminuser from './Admin/Adminuser';



function App() {
  const[product,setProducts]=useState(Allproducts)
  const [cart,setCart]=useState([])
  const [Login,setLogin]=useState([])
  const [currentuser,setCurrentuser] =useState([])
  const [profile,setProfile]= useState([])
  const [isLogin,isSetLogin]=useState(false)
const[admin,setAdmin]=useState([])
  
  

  return (
    
<>
<Mycontext.Provider value={{admin,setAdmin,product,setProducts,cart,setCart,Login,setLogin,currentuser,setCurrentuser,profile,setProfile,isLogin,isSetLogin}}> 
<Navba/>
<Routes>
  
  <Route path='register' element={<Register/>}/>
  <Route path='search' element={<Search/>}/>
  <Route path='/' element={<Home/>}/>
  <Route path='collection' element={<Collection/>}/>
  <Route path='cat' element={<Cat/>}/>
  <Route path='Dog' element={<Dog/>}/>
  <Route path='login' element={<Login/>}/>
<Route path='details/:id' element={<Productdetails/>}/>
<Route path='cart' element={<Cart/>}/>
<Route path='Admin' element={<Admin/>}/>
<Route path='footer' el ement={<Footer/>}/>
<Route path='adminlogin' element={<Adminlogin/>}/>
<Route path='adminproduct' element={<Adminproduct/>}/>
<Route path='adminsidebar' element={<Sidebar/>}/>
<Route path='/admin/editproduct/:id' element={<Editproduct/>}/>
<Route path='/adminuser' element={<Adminuser/>}/>

</Routes>
<Footer/>
</Mycontext.Provider>  

</>     
    
  )
}

export default App
