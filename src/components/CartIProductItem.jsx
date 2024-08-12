import styled, { css } from "styled-components";
import featureImg from "/images/featureimg.jpeg";
import deleteIcon from "/images/delete.png";
import { useState, useEffect } from "react";
const ProductImage = styled.img`
  width: 114px;
  heigh: auto;
`;
const Price = styled.div`
  font-size: 16px;
`;
const Delete = styled.img`
  width: 44px;
  height: 44px;
`;
const RowItem = styled.div`
  display: flex;
  width: 1100px;
  justify-content: space-between;
  padding: 50px 40px;
  align-items: center;
`;
const AdjustNumber = styled.select`
  width: 80px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #979797;
  background: #f3f3f3;
  padding-left: 6px;
`;
const ImageBox = styled.div`
  display: flex;
`;
const ProductInfo = styled.div`
  margin-left: 12px;
`;
const PText = styled.p`
  font-size: 16px;
  margin-bottom: 18px;
`;
export default function CartProductItem({ item, onDelete }) {
  console.log("cart product item component rendered!");

  return (
    <>
      <RowItem>
        <ImageBox>
          <ProductImage src={item.image} />
          <ProductInfo>
            <PText>{item.title}</PText>
            <PText>{item.id}</PText>
            <PText>顏色｜{item.selectedColor}</PText>
            <PText>尺寸｜ {item.selectedSize}</PText>
          </ProductInfo>
        </ImageBox>
        <div className="dropdown">
          <AdjustNumber>
            <option value="1">{item.selectedQuantity}</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </AdjustNumber>
        </div>
        <Price>TWD. {item.price}</Price>
        <Price>TWD. {item.price * item.selectedQuantity}</Price>
        <Delete onClick={onDelete} src={deleteIcon} />
      </RowItem>
    </>
  );
}
