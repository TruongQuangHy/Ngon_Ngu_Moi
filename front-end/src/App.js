import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Resetpassword from './pages/Resetpassword';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Thanhtoan from './pages/Thanhtoan';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='product' element={<OurStore />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='cart' element={<Cart />} />
            <Route path='thanhtoan' element={<Thanhtoan />} />

            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
            <Route path='resetpassword' element={<Resetpassword />} />
            <Route path='product/:id' element={<SingleProduct />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
