import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { CartProvider } from './component/cart/CartProvider';
import Layout from './component/layout/index';
import { Home, Product, Cart } from './pages';

function Contact() {
  return <div className='home'>Contact</div>;
}

function RouteNotFound() {
  return <div className='home'>Page not found</div>;
}

function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;