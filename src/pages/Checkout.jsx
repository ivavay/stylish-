import CartProductItem from "../components/CartIProductItem";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import styled, { css } from "styled-components";

const LabelCart = styled.div`
  margin-right: 400px;
  margin-bottom: 12px;
  font-weight: 700;
`;
const Label = styled.div`
  margin-right: 190px;
  margin-bottom: 12px;
`;
export default function Checkout({ cartItem, setCartItem }) {
  const handleDelete = (itemToDelete) => {
    const updatedCartItems = cartItem.filter(item => item.id !== itemToDelete.id);
    setCartItem(updatedCartItems);
    // update local storage
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
    // alert when removed
    alert('Item is removed!')
  };

  return (
    <>
      <style jsx="true" global="true">{`
        .wrapper {
          display: flex;
          justify-content: center;
          margin-top: 50px;
          margin-bottom: 50px;
        }
        .container {
          display: flex;
          flex-direction: column;
          width: 1160px;
        }
        .box-outline {
          width: 1160px;
          height: auto;
          border: 1px solid #979797;
        }
        .labels {
          display: flex;
        }
      `}</style>
      <Header />
      <div className="wrapper">
        <div className="container">
          <div className="labels">
            <LabelCart>購物車</LabelCart>
            <Label>數量</Label>
            <Label>單價</Label>
            <Label>小計</Label>
          </div>
          <div className="box-outline">
            {cartItem.map((item, index) => (
              <CartProductItem onDelete={() => handleDelete(item)} key={`${item.id}-${item.size}-${index}`}  item={item} />
            ))}
          </div>
          <Form></Form>
        </div>
      </div>
      <Footer />
    </>
  );
}
