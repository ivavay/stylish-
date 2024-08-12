import styled, { css } from "styled-components";
import { useState } from "react";
import LogoImg from "/images/logo.png";
import searchImg from "/images/search.png";
import CartImage from "/images/cart.png";
import ProfileIcon from "/images/member.png";
import SearchBarMobile from "./SearchBarMobile";
import SearchBarDesktop from "./SearchBarDesktop";
import React from "react";

const Nav = styled.div`
  height: 100px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  border-bottom: 40px solid #313538;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 100vw;
    height: 52px;
    border-bottom: 50px solid #313538;
  }
`;
const Logo = styled.img`
  width: 258px;
  height: 48px;
  padding-top: 26px;
  padding-right: 57px;
  padding-left: 60px;
  padding-bottom: 66px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    height: 24px;
    display: flex;
    align-self: center;
    justify-self: center;
    position: absolute;
    top: 4px;
    padding-bottom: 0;
    padding-top: 10px;
    width: 129px;
    height: 24px;
    right: 50%;
    left: 50%;
  }
`;
const NavMain = styled.div`
  display: flex;
  padding-top: 44px;
  align-items: flex-start;
  padding-bottom: 36px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    position: absolute;
    top: 60px;
    padding-top: 0;
    height: 50px;
  }
`;
const Divider = styled.div`
  border-right: 1px solid black;
  height: 20px;
  display: flex;
  margin-top: 4px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    border-right: 1px solid white;
  }
`;
const NavItem = styled.div`
  color: #8b572a;
  text-align: center;
  font-family: "Noto Sans TC";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  justify-content: center;
  letter-spacing: 30px;
  text-indent: 30px;
  width: 150px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    width: 160px;
    padding: 0;
    font-size: 16px;
    color: #828282;
    letter-spacing: 0px;
    text-indent: 0;
  }
`;
const DynamicLink = styled.a`
  text-decoration: none;
  color: #8b572a;
`;
const NavRight = styled.div`
  display: flex;
  padding-top: 26px;
  padding-right: 45px;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: none;
    visibility: hidden;
  }
`;
const NavLeft = styled.div`
  display: flex;
`;
const NavTop = styled.div`
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    display: flex;
    padding: 0;
    justify-content: center;
    height: 52px;
    width: 100vw;
    position: relative;
  }
`;

const CartMember = styled.div`
  padding-left: 42px;
  display: flex;
  position: relative;
`;
const CartContainer = styled.div`
  display: flex;
  position: relative;
  margin-right: 54px;
  position: absolute;
  right: 42px;
  bottom: 28px;
`;
const Cart = styled.img`
  width: 44px;
  height: 44px;
`;
const Profile = styled.img`
  width: 44px;
  height: 44px;
  position: absolute;
  right: 10px;
  top: 1px;
`;
const CartQuantity = styled.div`
  display: flex;
  justify-content: center;
  width: 25px;
  height: 25px;
  background-color: #bb7744;
  color: white;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
`;
export default function Header({ cartNumber }) {
  <style jsx="true" global="true">{`
    body {
      margin: 0px;
      padding: 0px;
    }
    .mobile-input {
      display: none;
    }
    .search-btn {
      display: none;
    }
    @media screen and (min-width: 360px) and (max-width: 1279px) {
      .mobile-input.active {
        height: 40px;
        width: 100%;
        display: block;
      }
      .searchInputMobile {
        visibility: visible;
      }
      .search-bar {
        display: none;
        visibility: hidden;
      }
      .searchInput {
        display: none;
        visibility: hidden;
      }
      .search-btn {
        position: absolute;
        top: 4px;
        right: auto;
        left: auto;
        height: 44px;
        width: 95vw;
        display: block;
      }
    }
  `}</style>;

  return (
    <>
      <Nav>
        <NavLeft>
          <NavTop>
            <Logo src={LogoImg} />
            <SearchBarMobile />
          </NavTop>

          <NavMain>
            <DynamicLink href="../public/index.html?category=women">
              <NavItem>女裝</NavItem>
            </DynamicLink>
            <Divider />
            <DynamicLink href="../public/index.html?category=men">
              <NavItem>男裝</NavItem>
            </DynamicLink>
            <Divider />
            <DynamicLink href="../public/index.html?category=accessories">
              <NavItem>配件</NavItem>
            </DynamicLink>
          </NavMain>
        </NavLeft>
        <NavRight>
          <SearchBarDesktop />
          <CartMember>
            <CartContainer>
              <Cart alt="cart" src={CartImage} />
              <CartQuantity>{cartNumber}</CartQuantity>
            </CartContainer>
            <Profile alt="member" src={ProfileIcon} />
          </CartMember>
        </NavRight>
      </Nav>
    </>
  );
}
