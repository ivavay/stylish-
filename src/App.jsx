import React from "react";
import Product from "./pages/Product";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import { useState, useEffect } from "react";
function App() {
  const [cartNumber, setCartNumber] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  // useEffect(() => {
  //     console.log("cart number has changed")
  // }, [cartNumber])

  // local storage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cartObject = JSON.parse(storedCart);

      // Check if the cartObject differs from the current state
      if (JSON.stringify(cartItem) !== JSON.stringify(cartObject)) {
        setCartItem(cartObject);
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/checkout"
          element={
            <Checkout
              cartItem={cartItem}
              setCartNumber={setCartNumber}
              cartNumber={cartNumber}
              setCartItem={setCartItem}
            />
          }
        />
        <Route
          path="/product"
          element={
            <Product
              cartItem={cartItem}
              setCartNumber={setCartNumber}
              setCartItem={setCartItem}
              cartNumber={cartNumber}
            />
          }
        />
        <Route path="/" exact></Route>
      </Routes>
    </Router>
  );
}

export default App;
