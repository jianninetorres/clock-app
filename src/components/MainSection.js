import React from "react";

import styled from "styled-components";

const MainSectionStyles = styled.section`
  display: grid;
  padding: ${(props) => props.buttonState};
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  max-height: ${(props) => props.maxHeight};
  background-color: ${(props) => props.bgColour};
  position: absolute;
  bottom: 0;
  transition: max-height 0.5s ease-out;

  @media screen and (min-width: 568px) {
    grid-template-columns: 1fr 1fr;
  }

  div {
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: calc(var(--base-size) * 2) var(--base-size);
    @media screen and (min-width: 568px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    h3 {
      font-weight: 600;
      letter-spacing: 1px;
      margin-bottom: 0;
      text-transform: capitalize;
      color: ${(props) => props.h3FontColour};
    }

    h4 {
      text-transform: uppercase;
      color: ${(props) => props.h4FontColour};
    }
  }
`;

const MainSection = ({
  transformY,
  dayOfWeek,
  dayOfYear,
  weekNumber,
  timezone,
  icon,
}) => {
  const isVisible = transformY === true ? "32px 0" : "0";
  const maxHeight = transformY === true ? "calc(50% - 80px)" : 0;
  const bgColour =
    icon === "sun" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.8)";
  const h3FontColour = icon === "sun" ? "var(--black)" : "var(--white)";
  const h4FontColour = icon === "sun" ? "var(--grey1)" : "var(--grey2)";

  return (
    <MainSectionStyles
      buttonState={isVisible}
      maxHeight={maxHeight}
      bgColour={bgColour}
      h3FontColour={h3FontColour}
      h4FontColour={h4FontColour}
    >
      <div>
        <h4>Current timezone</h4>
        <h3>{timezone}</h3>
      </div>
      <div>
        <h4>Day of the year</h4>
        <h3>{dayOfYear}</h3>
      </div>
      <div>
        <h4>Day of the week</h4>
        <h3>{dayOfWeek}</h3>
      </div>
      <div>
        <h4>Week number</h4>
        <h3>{weekNumber}</h3>
      </div>
    </MainSectionStyles>
  );
};

export default MainSection;
