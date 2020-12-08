import React from "react";

import styled from "styled-components";

const MainSectionStyles = styled.section`
  @if ${(props) => props.buttonState === true} {
    display: block;
  } @else {
    display: none;
  }
  padding: 32px;
`;

const MainSection = ({ transformY }) => {
  return (
    <MainSectionStyles buttonState={transformY}>main styles</MainSectionStyles>
  );
};

export default MainSection;
