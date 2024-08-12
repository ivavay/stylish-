import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductSection from "../components/ProductSection";
import { useEffect, useState } from "react";

export default function Product({cartNumber, setCartNumber, setCartItem, cartItem, product }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    console.log(cartItem)
      // for getting id from vanila js!!
  function getProductIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }
  useEffect(() => {
    // fetch product details
    const id = getProductIdFromURL();
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `https://api.appworks-school.tw/api/1.0/products/details?id=${id}`
        );
        const data = await response.json();
        console.log("API data:", data);
        setSelectedProduct(data.data);
        // setProduct(data.data);
        // setSelectedColor(data.data.colors[0].code);
      } catch (error) {
        console.log(error);
        throw new Error("Did not fetch data successflly");
      }
    };
    fetchProductDetails();
  }, []);

    return(
        <>
        <Header cartNumber={cartNumber}/>
        <ProductSection cartItem={cartItem} product={product}  setCartItem={setCartItem} selectedProduct={selectedProduct} setCartNumber={setCartNumber}/>
        <Footer />
        </>
    )
}