import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./sass/index.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
import SnkrScreen from "./screens/SnkrScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact></Route>
          <Route path="/profile" element={<ProfileScreen />} exact></Route>

          <Route path="/snkrs" element={<SnkrScreen />} exact></Route>
          <Route path="/product/:id" element={<ProductScreen />}></Route>
          <Route path="/register" element={<RegisterScreen />}></Route>
          <Route path="/cart">
            <Route path=":id" element={<CartScreen />} />
            <Route path="" element={<CartScreen />} />
          </Route>
          <Route path="/order">
            <Route path=":id" element={<OrderScreen />} />
            <Route path="" element={<OrderScreen />} />
          </Route>
          <Route path="/users/login" element={<LoginScreen />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
