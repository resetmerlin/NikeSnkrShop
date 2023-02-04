import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/style.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import SnkrScreen from "./screens/SnkrScreen";
import LoginScreen from "./screens/LoginScreen";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact></Route>
          <Route path="/snkrs" element={<SnkrScreen />} exact></Route>
          <Route path="/product/:id" element={<ProductScreen />}></Route>
          <Route path="/cart">
            <Route path=":id" element={<CartScreen />} />
            <Route path="" element={<CartScreen />} />
          </Route>

          <Route path="/users/login" element={<LoginScreen />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
