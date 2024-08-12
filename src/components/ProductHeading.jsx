import styled, { css } from "styled-components";
import { useState } from "react";
const ProductTitle = styled.h1`
  color: #3f3a3a;

  font-family: "Noto Sans TC";
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 118.75% */
  letter-spacing: 6.4px;
  padding-bottom: 16px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    margin-top: 18px;
  }
`;
const ProductId = styled.p`
  color: #bababa;
  font-family: "Noto Sans TC";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: 4px;
  padding-bottom: 40px;
`;
const ProductPrice = styled.h2`
  color: #3f3a3a;
  font-family: "Noto Sans TC";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px; /* 120% */
  padding-bottom: 20px;
`;
const HeadingDivider = styled.div`
  width: 360px;
  height: 1px;
  background: #3f3a3a;
  margin-bottom: 36px;
`;
const Label = styled.div`
  font-family: "Noto Sans TC";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 120% */
  letter-spacing: 4px;
`;
const LabelHidden = styled(Label)`
  display: none;
`;
const Color = styled.div`
  width: 24px;
  height: 24px;
  padding: 6px;
  border: 6px solid white;
  margin-bottom: 36px;
  margin-right: 32px;
  ${(props) => props.selected && `outline: 1px solid grey`}
`;
const SecondColor = styled(Color)`
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    background: #dfb;
  }
`;
const ThirdColor = styled(Color)`
  background: #ccc;
`;
const Size = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  color: ${(props) => (props.$primary ? "#FFF" : "#000")};
  background: ${(props) => (props.$primary ? "#000" : "#ECECEC")};
  margin-bottom: 22px;
  margin-right: 20px;
  ${(props) => props.selected && `background: #000; color: #FFF;`}
  ${(props) => props.disabled && `opacity: 0.3;`}
`;
const ItemCount = styled.div`
  border: 1px solid #979797;
  width: 160px;
  height: 44px;
  background: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 26px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 90vw;
  }
`;
const Description = styled.div`
  color: #3f3a3a;
  padding: 0 24px;
  font-family: "Noto Sans TC";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
`;
const Button = styled.button`
  width: 360px;
  height: 64px;
  border: 1px solid #979797;
  color: white;
  background: #000;
  font-family: "Noto Sans TC";
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 90vw;
  }
`;

const Decrement = styled.div``;
const Increment = styled.div``;
export default function ProductHeading({
  selectedProduct,
  selectedSize,
  selectedColor,
  stockLimit,
  selectedQuantity,
  handleClickColor,
  handleClickSize,
  handleItemAdd,
  handleItemMinus,
  addToCart,
  counter,
}) {
  // change button text depending on state
  const getButtonText = () => {
    if (!selectedColor || !selectedColor) {
      return "請選擇顏色";
    } else if (!selectedSize) {
      return "請選擇尺寸";
    } else if (!selectedQuantity) {
      return "請選擇數量";
    } else {
      return "加入 Cart";
    }
  };
  return (
    <div className="column">
      <style jsx="true" global="true">{`
        .heading {
          display: block;
          padding: 0 24px;
        }
        .selection {
          display: block;
          padding: 0 24px;
        }
        .selection-label {
          display: flex;
        }
        .column {
          display: block;
        }
        .operator {
          padding: 0 6px;
        }
      `}</style>
      <div className="heading">
        <ProductTitle>{selectedProduct.title}</ProductTitle>
        <ProductId>{selectedProduct.id}</ProductId>
        <ProductPrice>TWD. {selectedProduct.price}</ProductPrice>
        <HeadingDivider />
      </div>
      <div className="selection">
        <div className="selection-label">
          <Label>顏色｜</Label>
          {selectedProduct.colors.map((color, index) => (
            <Color
              selected={color.code === selectedColor}
              onClick={() => handleClickColor(color)}
              key={index}
              style={{
                backgroundColor: `#${color.code}`,
              }}
            />
          ))}
        </div>
        <div className="selection-label">
          <Label>尺寸｜</Label>
          <>
            {selectedProduct.sizes.map((size) => {
              let disabled = false;

              if (selectedColor === undefined) {
                disabled = true;
              } else {
                // something wrong here can't find the variant
                const variant = selectedProduct.variants.find((variant) => {
                  // something wrong with this line bc selectedColor is two objects
                  return (
                    variant.color_code === selectedColor &&
                    variant.size === size
                  );
                });
                // this logs undefined which means no varients were found...
                let stock;

                if (variant) {
                  stock = variant.stock; // Set stock to the matched variant's stock
                  // console.log('Stock for size', size, 'and color', selectedColor, ':', stock);

                  if (stock === 0) {
                    disabled = true;
                  }
                } else {
                  console.log(
                    "No variant found for size",
                    size,
                    "and color",
                    selectedColor
                  );
                  disabled = true;
                }
              }

              return (
                <Size
                  onClick={() => handleClickSize(size)}
                  key={size}
                  selected={size === selectedSize}
                  disabled={disabled}
                >
                  {size}
                </Size>
              );
            })}
          </>
        </div>
        <div className="selection-label">
          <LabelHidden>數量｜</LabelHidden>
          <ItemCount>
            <Decrement onClick={() => handleItemMinus()}>-</Decrement>
            <div className="operator">{counter}</div>
            <Increment onClick={() => handleItemAdd(stockLimit)}>+</Increment>
          </ItemCount>
        </div>
        <Button
          onClick={() => addToCart(selectedProduct, selectedColor, selectedSize)}
          disabled={stockLimit[selectedProduct.id] === 0}
        >
          {getButtonText()}
        </Button>
      </div>
      <Description>{selectedProduct.description}</Description>
    </div>
  );
}
