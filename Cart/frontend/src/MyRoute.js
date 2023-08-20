import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart/Cart';
import Store from './Pages/Store/Store';
import StoreContextProvider from './Context/StoreContext';

const MyRoute = () => {
  return (
    <StoreContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Cart" element={<Cart />} />
          <Route path="/" element={<App />} />
          <Route path="/Store" element={<Store />} />
        </Routes>
      </Router>
    </StoreContextProvider>
  );
};
export default MyRoute;
