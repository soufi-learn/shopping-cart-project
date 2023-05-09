import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
// COMPONENTS
import Store from "./components/store";
import store from "./redux/store";
import Navbar from "./components/shared/navbar";
import ProductDetails from "./components/shared/productDetails";
import ShoppingCart from "./components/shoppingCart";

function App() {
  return (
    <Provider store={store}>
      <div className="pb-16">
        <Navbar />
      </div>
      <Routes>
        <Route path="products" element={<Store />} />
        <Route path="cart" element={<ShoppingCart />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="products" />} />
      </Routes>
    </Provider>
  );
}

export default App;
