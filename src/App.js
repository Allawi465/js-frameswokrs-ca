import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { CartProvider } from './components/cart/context';
import { Layout } from './components/index';
import { Home, Product, Cart, Checkout, Contact, RouteNotFound } from './pages';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div>
      <HelmetProvider>
        <CartProvider>
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
        </CartProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;