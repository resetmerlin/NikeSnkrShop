import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/style.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import ProtoScreen from "./screens/ProtoScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route
              path="/cyberProduct/:id"
              element={<ProductScreen />}
              exact
            ></Route>
            <Route path="/cart">
              <Route path=":id" element={<CartScreen />} />
              <Route path="" element={<CartScreen />} />
            </Route>
          </Routes>
        </div>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
