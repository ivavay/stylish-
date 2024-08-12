import styled, { css } from "styled-components";
import featureImg from "/images/featureimg.jpeg";

const FeatureImg = styled.img`
  padding-right: 4px;
  width: 560px;
  height: auto;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 480px;
    height: 640px;
  }
`;
export default function ProductFeatureImg({ product }) {
  console.log('feature image is rendered')
  return (
    <>
      <FeatureImg src={product.main_image} />
    </>
  );
}
