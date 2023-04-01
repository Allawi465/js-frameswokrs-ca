import React from 'react';
import Footer from './footer';
import Header from './header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;