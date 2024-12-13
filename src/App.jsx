import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Login from './Pages/Login';
import Register from './Pages/Register';
//rafce
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/product' element={ <Product/> } />
        <Route path='/contact' element={ <Contact/> } />
        <Route path='/login' element={ <Login/> } />  
        <Route path='/register' element={ <Register/> } />   
      </Routes>
      <Footer/>
    </div>
  )
};

export default App;
