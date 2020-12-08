import React from "react";

import styled from "styled-components";

const MainSectionStyles = styled.section`
  display: block;
  padding: ${(props) => props.buttonState};
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  max-height: ${(props) => props.maxHeight};
  border: 1px solid red;
  position: absolute;
  bottom: 0;
  transition: max-height 0.5s ease-out;
`;

const MainSection = ({ transformY }) => {
  const isVisible = transformY === true ? "32px" : "0";
  const maxHeight = transformY === true ? "200px" : 0;

  return (
    <MainSectionStyles buttonState={isVisible} maxHeight={maxHeight}>
      main styles
    </MainSectionStyles>
  );
};

export default MainSection;
