import styled, { css } from "styled-components";
import ProductImg1 from "/images/product-img1.jpeg";
import ProductImg2 from "/images/product-img2.jpeg";

const MoreInfoDivider = styled.div`
  width: 761px;
  height: 1px;
  background: #3f3a3a;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 285px;
  }
`;
const MoreInfoDividerText = styled.h3`
  color: #8b572a;
  font-family: "Noto Sans TC";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  letter-spacing: 3px;
  margin-right: 24px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 16px;
  }
`;
const MoreDescription = styled.p`
  width: 960px;
  color: #3f3a3a;
  width: 960px;
  font-family: "Noto Sans TC";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 150% */
  margin-bottom: 30px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    padding: 0 24px;
    width: 90vw;
  }
`;
const ProductImg = styled.img`
  width: 960px;
  height: 540px;
  margin-bottom: 30px;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 90vw;
    height: auto;
    padding: 0 24px;
  }
`;
export default function ProductMoreInfo({ product }) {
  // console.log(product.images)
  return (
    <>
      <style jsx="true" global="true">
        {`
        .divider {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 50px;
            width: 960px
            padding: 0 24px;

        }
        .more-info {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            padding-top: 43px;
            margin: 0 24px;
        }
        `}
      </style>
      <div className="divider">
        <MoreInfoDividerText>更多產品資訊</MoreInfoDividerText>
        <MoreInfoDivider />
      </div>
      <div className="more-info">
        <MoreDescription>{product.story}</MoreDescription>

        {product.images.map((item, index) => (
          <ProductImg key={index} src={item} />
        ))}
      </div>
    </>
  );
}
