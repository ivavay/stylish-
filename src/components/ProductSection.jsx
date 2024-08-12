import styled, { css } from "styled-components";
import { useState, useEffect } from "react";
import ProductFeatureImg from "./ProductFeatureImg";
import ProductHeading from "./ProductHeading";
import ProductMoreInfo from "./ProductMoreInfo";

export default function ProductSection({ setCartNumber, selectedProduct, cartItem, setCartItem, product }) {
  // setting state
  const [products, setProducts] = useState({
    sizes: [],
    variants: [],
  });

  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [counter, setCounter] = useState(0);
  const [stockLimit, setStockLimit] = useState(0);
  
  console.log('product section is rendered')
  
  // handle clicks
  function handleClickColor(color) {
    setSelectedColor(color.code);
    console.log(color.code);
  }
  const handleClickSize = (size) => {
    setSelectedSize(size);
    // find the variant matching the selected color and size
    const variant = selectedProduct.variants.find((variant) => {
      return variant.color_code === selectedColor && variant.size === size;
    });
    // if there is variant, set the stock limit
    if (variant) {
      const stock = variant.stock;
      console.log(`Stock for size ${size} and color ${selectedColor}:`, stock);
      setStockLimit(stock);
    } else {
      console.log(
        `No variant found for size ${size} and color ${selectedColor}`
      );
      // setStockLimit(0); // reset stock limit if no variant found
    }
  };

  useEffect(() => {
    console.log(`Counter changed: ${counter}`);
  }, [counter]);

  // add to cart function logs out the correct added item
  function addToCart() {
    console.log(
      `added to cart! size ${selectedSize} and color ${selectedColor} and quantity ${selectedQuantity} `
    );
    // const item = { selectedColor, selectedSize, selectedQuantity, stockLimit  };
    const newQuantity = parseInt(selectedQuantity);
    let updatedCart = [...cartItem];
    const itemIndex = updatedCart.findIndex(
      (cartItem) =>
        cartItem.selectedColor === selectedColor &&
        cartItem.selectedSize === selectedSize
    );

    if (itemIndex > -1) {
      // Update the quantity and stock limit of the existing item
      const existingItem = updatedCart[itemIndex];
      if (newQuantity > existingItem.stockLimit) {
        alert("Quantity exceeds stock limit");
        return;
      }
      existingItem.selectedQuantity += newQuantity;
      existingItem.stockLimit -= newQuantity;
      updatedCart[itemIndex] = { ...existingItem };
    } else {
      // Add the new item to the cart with initial stock limit
      if (newQuantity > stockLimit) {
        alert("Quantity exceeds stock limit");
        return;
      }
      const newItem = {
        title: selectedProduct.title,
        id: selectedProduct.id,
        selectedColor,
        selectedSize,
        selectedQuantity: newQuantity,
        stockLimit: stockLimit - newQuantity,
        image: selectedProduct.main_image,
        price: selectedProduct.price,
      };
      updatedCart = [...updatedCart, newItem];
    }
    setCartItem(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // reset counter to 0 when an item is added to cart
    setCounter(0);
    // setSelectedQuantity(0)
  }

  console.log("Selected quantity: " + selectedQuantity);

  const handleItemAdd = () => {
    if (selectedQuantity > stockLimit) {
      console.log("Reached maximum stock limit");
      return;
    }

    setSelectedQuantity((prevQuantity) => prevQuantity + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
  const handleItemMinus = () => {
    if (selectedQuantity > 0) {
      setSelectedQuantity((prevQuantity) => prevQuantity - 1);
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  console.log("Stock limit updated: ", stockLimit);

  // update stock limit
  useEffect(() => {
    console.log("useEffect is running");
    const storedStockLimit = localStorage.getItem("stockLimit");
    console.log("Stored stock limit:", storedStockLimit); // Debugging log
    if (storedStockLimit !== null) {
      setStockLimit(JSON.parse(storedStockLimit));
    }
  }, []);

  useEffect(() => {
    console.log("Current stock limit:", stockLimit); // Debugging log
  }, [stockLimit]);

  // calculate total quantity of all items in the cart
  window.totalQuantity = cartItem.reduce(
    (sum, item) => sum + item.selectedQuantity,
    0
  );
  // setCartNumber(window.totalQuantity);
  console.log("total quantity " + window.totalQuantity);

  return (
    <>
      <style jsx="true" global="true">{`
        .section-top {
            width: 960px;
          display: flex;
          justify-content: center;
          padding-top: 64px;
          margin: auto;
          
        }
        @media screen and (min-width: 360px) and (max-width: 1279px) {
        .section-top {
            padding-top: 0px;
            display: flex;
            flex-direction: column;
        }
      `}</style>
      <div className="section-top">
        {selectedProduct ? (
          <>
            <ProductFeatureImg product={selectedProduct} />
            <ProductHeading
              addToCart={addToCart}
              handleItemAdd={handleItemAdd}
              handleItemMinus={handleItemMinus}
              handleClickSize={handleClickSize}
              handleClickColor={handleClickColor}
              counter={counter}
              selectedQuantity={selectedQuantity}
              selectedColor={selectedColor}
              selectedSize={selectedSize}
              stockLimit={stockLimit}
              product={product}
              selectedProduct={selectedProduct}
            />
          </>
        ) : null}
      </div>
      {selectedProduct ? <ProductMoreInfo product={selectedProduct} /> : null}
    </>
  );
}
