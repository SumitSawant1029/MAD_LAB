import './App.css';
import Login from './component/Login';
import Signin from './component/Signin';
import Home from './component/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import ShopByCategory from './component/ShopByCategory';
import Accessories from './component/Category/Accessories';
import Mouse from './component/Category/Mouse';
import Monitor from './component/Category/Monitor';
import Cables from './component/Category/Cables';
import Aboutus from './component/Aboutus';
import ContactPage from './component/ContactPage';
import AddtoCart from './component/AddtoCart';
import ProductPage from './component/ProductPage';
import CartDetails from './component/CartDetails';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Signin />} />
          <Route path="/ShopByCategory" element={<ShopByCategory />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Accessories" element={<Accessories />} />
          <Route path="/Mouse" element={<Mouse />} />
          <Route path="/Monitor" element={<Monitor />} />
          <Route path="/Cables" element={<Cables />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/addtocart" element={<AddtoCart />} />
          <Route path="/productspage/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartDetails />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div``;

export default App;
