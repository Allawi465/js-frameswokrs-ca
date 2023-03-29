import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { CartProvider } from './components/cart/context';
import { Layout } from './components/index';
import { Home, Product, Cart, Checkout, Contact, RouteNotFound } from './pages';

function App() {
  return (
    <CartProvider>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="Checkout" element={<Checkout />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;