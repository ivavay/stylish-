import searchImg from "/images/search.png";
import styled, { css } from "styled-components";
import { useState } from "react";

const SearchImage = styled.img`
display:none;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
  }
`;
const SearchButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  right: -8px;
  top: 0;
  display:none;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    position: absolute;
    top: 4px;
    right: auto;
    left: auto;
    height: 44px;
    width: 95vw;
    display: block;
  }
`;
const SearchInputMobile = styled.input`
  background-size: 44px;
  border-radius: 20px;
  border: 1px solid #979797;
  width: 214px;
  height: 44px;
  margin-right: 42px;
  right: 10px;
  font-size: 20px;
  
  display: none;
  @media screen and (min-width: 360px) and (max-width: 1279px) {
    height: 40px;
    width: 100%;
  
  }
`;

export default function SearchBarMobile() {
  // useState for toggling on click for mobile
  const [toggleActive, setToggleActive] = useState(false);
  const handleClick = () => {
    setToggleActive(!toggleActive);
  };

  const [keyword, setKeyword] = useState("");

  function handleInputChange(event) {
    setKeyword(event.target.value);
  }

  function handleKeyEnter(event) {
    console.log(window.searchFunction);
    if (event.key === "Enter") {
      window.searchFunction(keyword);
      console.log(typeof keyword);
      console.log("run!");
      window.location.href = `index.html?keyword=${encodeURIComponent(
        keyword
      )}`;
    }
  }
  return (
    <>
      <div className="search-btn">
        <SearchButton>
          <SearchInputMobile
            value={keyword}
            onChange={handleInputChange}
            onKeyUp={handleKeyEnter}
            placeholder="西裝"
            className={`mobile-input ${
              toggleActive ? "active" : ""
            } searchInputMobile`}
          ></SearchInputMobile>
          <SearchImage onClick={handleClick} src={searchImg} />
        </SearchButton>
      </div>
    </>
  );
}
