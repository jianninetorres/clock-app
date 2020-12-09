import React from "react";
import arrow from "../images/icon-arrow-up.svg";
import styled from "styled-components";

const ButtonStyles = styled.button`
  border: none;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 150px;
  background-color: white;
  padding: calc(var(--base-size) / 2);
  margin: 0 var(--base-size);
  cursor: pointer;
  @media screen and (min-width: 568px) {
    margin: 0 calc(var(--base-size) * 2);
  }

  h3 {
    background: url(${(props) => props.background}) no-repeat center bottom;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    margin: 0 auto;
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const Button = ({ background, onClickButton }) => {
  return (
    <ButtonStyles type="button" background={background} onClick={onClickButton}>
      <h3>More</h3>
      <img src={arrow} alt="" />
    </ButtonStyles>
  );
};

export default Button;
