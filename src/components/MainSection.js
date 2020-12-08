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
    padding: calc(var(--base-size) * 2);
    @media screen and (min-width: 568px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
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
  const maxHeight = transformY === true ? "calc(50% - 100px)" : 0;
  const bgColour =
    icon === "sun" ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.7)";

  return (
    <MainSectionStyles
      buttonState={isVisible}
      maxHeight={maxHeight}
      bgColour={bgColour}
    >
      <div>
        <h3>Current timezone</h3>
        <h4>{timezone}</h4>
      </div>
      <div>
        <h3>Day of the year</h3>
        <h4>{dayOfYear}</h4>
      </div>
      <div>
        <h3>Day of the week</h3>
        <h4>{dayOfWeek}</h4>
      </div>
      <div>
        <h3>Week number</h3>
        <h4>{weekNumber}</h4>
      </div>
    </MainSectionStyles>
  );
};

export default MainSection;
