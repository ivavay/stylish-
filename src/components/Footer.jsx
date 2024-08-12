import styled from "styled-components";

const FooterTag = styled.footer`
  background: #313538;
  height: 115px;
  display: flex;
  align-items: center;
  // position: absolute;
  // bottom: 0;
  width: 100vw;
  @media screen and (max-width: 1919px) {
    justify-content: center;
    width: 100vw;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 100vw;
    height: 206px;
    display: flex;
    flex-direction: column;
  }
`;
const FooterItem = styled.div`
  color: #f5f5f5;
  text-align: center;
  font-family: "Noto Sans TC";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  width: 134px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    font-size: 14px;
    color: #d3d3d3;
    flex: 1 1 30%;
    margin: 0;
    width: fit-content;
    margin-bottom: 3px;
  }
`;
const DividerFooter = styled.div`
  color: white;
  height: 14px;
  border-right: 1px solid white;
  display: flex;
  align-self: center;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    visibility: hidden;
    display: none;
  }
`;
const MainLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1919px) {
    position: absolute;
    left: 60px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    padding-top: 23px;
    width: 75vw;
    position: absolute;
    left: 0;
    bottom: 10px;
  }
`;
const FooterBox = styled.div`
  width: 1160px;
  display: flex;
  justify-content: center;
  padding-left: 101px;
  position: relative;
  @media screen and (max-width: 1919px) {
    padding-bottom: 46px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 248px;
  }
`;
const FooterLeft = styled.div`
  color: white;
  display: flex;
  width: 670px;
  padding-left: 380px;
  @media screen and (max-width: 1919px) {
    padding-left: 0;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: white;
    padding: 0;
    align-items: flex-start;
    max-height: 80px;
  }
`;
const FooterRight = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding-left: 101px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: flex;
    align-items: center;
    color: white;
    padding: 0;
    width: 100vw;
    justify-content: center;
    margin-right: 32px;
    margin-bottom: 16px;
  }
`;
const SocialIcon = styled.img`
  margin-right: 30px;
  height: 50px;
  width: 50px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    height: 20px;
    width: 20px;
    margin-right: 14px;
  }
`;
const Copyright = styled.div`
  color: #828282;
  right: 62px;
  font-size: 12px;
  /* width: 100%; */
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: -300px;
  @media screen and (max-width: 1919px) {
    position: absolute;
    bottom: 46px;
    top: 20px;
    right: 20px;
  }
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    color: #828282;
    font-size: 10px;
    padding-bottom: 20px;
    display: flex;
    position: absolute;
    left: 120px;
    top: 62px;
  }
`;
const CartBox = styled.div`
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const CartImg = styled.img`
  width: 44px;
  height: 44px;
`;
const CartMemberBottom = styled.div`
  display: none;

  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: flex;
    flex-direction: row;
    height: 44px;
    align-items: center;
    position: absolute;
    top: 74px;
  }
`;
const MemberBox = styled.div`
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    overflow-x: hidden;
  }
`;
const CartMemberDivider = styled.div`
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    border-right: 1px solid white;
    height: 24px;
  }
`;
const Member = styled.img`
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    position: relative;
    right: 2px;
  }
`;
export default function Footer() {
  return (
    <>
    <style jsx="true" global="true">{`
     html, body {
        overflow-x: hidden;
      } 
     body {
      margin: 0px;
      padding: 0px;
    
    }
    span {
        width: 150px;
        display: block;
      }
      .cart-number-bottom {
        background-color: #8b572a;
        width: 24px;
        height: 24px;
        color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        position: absolute;
        right: 360px;
        bottom: 0px;
      }
    @media screen and (min-width: 360px) and (max-width: 1279px) {
      .cart-number-bottom {
        right: 412px;
      }
    }
}
  `}</style>
      ;
      <FooterTag>
        <FooterBox>
          <MainLinks>
            <FooterLeft>
              <FooterItem>關於 STYLiSH</FooterItem>
              <DividerFooter></DividerFooter>
              <FooterItem>服務條款</FooterItem>
              <DividerFooter></DividerFooter>
              <FooterItem>隱私政策</FooterItem>
              <DividerFooter></DividerFooter>
              <FooterItem>聯絡我們</FooterItem>
              <DividerFooter></DividerFooter>
              <FooterItem>FAQ</FooterItem>
            </FooterLeft>
            <FooterRight>
              <SocialIcon src="/images/line.png" />
              <SocialIcon src="/images/twitter.png" />
              <SocialIcon src="/images/facebook.png" />
            </FooterRight>
          </MainLinks>
          <Copyright>
            <span>© 2018. All rights reserved.</span>
          </Copyright>
          <CartMemberBottom>
            <CartBox>
              <CartImg src="/images/cart-mobile.png" />

              <span>購物車</span>
              <div className="cart-number-bottom">1</div>
            </CartBox>
            <CartMemberDivider/>
            <MemberBox>
              <Member src="/images/member-mobile.png" />
              <span>會員</span>
            </MemberBox>
          </CartMemberBottom>
        </FooterBox>
      </FooterTag>
    </>
  );
}
