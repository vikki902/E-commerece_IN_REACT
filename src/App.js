
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import ProductId from './pages/ProductId';
import { CartProvider} from 'react-use-cart'
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import {useState, createContext, useContext} from 'react';
import './components/style.css';

const login_context = createContext();

function App() {

  if(!localStorage.getItem("loggedin"))
  localStorage.setItem('loggedin',0);

  const [ loggedin , setLogin] = useState(localStorage.getItem("loggedin"));
  
  const login_update = (state )=>{
    setLogin(state);
  }
 

  return (
    
  <>
    <CartProvider>
    <BrowserRouter>
    <login_context.Provider value={{loggedin,login_update}} >
    <Header/>
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/product/:id' element={<ProductId/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/chekout' element={<Checkout/>}/>

  

    </Routes>
    </login_context.Provider>
    </BrowserRouter>
    </CartProvider>

    </>
  );
}

export default App;
export{login_context};