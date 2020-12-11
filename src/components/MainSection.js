import React from "react";
import LoadingDots from "./LoadingDots";
import styled from "styled-components";

const DivContainerStyles = styled.div`
  flex: 1 1 auto;
  width: 100%;
  height: 100%;
  max-height: ${(props) => props.maxHeight};
  background-color: ${(props) => props.bgColour};
  position: absolute;
  bottom: 0;
  transition: max-height 0.5s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainSectionStyles = styled.section`
  display: grid;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 568px) {
    grid-template-columns: 1fr 1fr;
    margin: calc(var(--base-size) * 2) auto calc(var(--base-size) * 2);
    padding-left: calc(var(--base-size) * 2);
    padding-right: calc(var(--base-size) * 2);
  }

  @media screen and (min-width: 1200px) {
    max-width: 1100px;
  }

  div {
    color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: var(--base-size);
    @media screen and (min-width: 568px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    @media screen and (min-width: 768px) {
      &:nth-child(odd) {
        border-right: 1px solid grey;
      }
      &:nth-child(even) {
        padding-left: calc(var(--base-size) * 8);
      }
    }

    h3 {
      font-weight: 600;
      letter-spacing: 1px;
      margin-bottom: 0;
      text-transform: capitalize;
      color: ${(props) => props.h3FontColour};
      @media screen and (min-width: 568px) {
        font-size: 2.5rem;
        margin-top: 16px;
      }
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
  viewport,
}) => {
  const maxHeight =
    transformY === true ? (viewport === "mobile" ? "55%" : "50%") : 0;
  const bgColour =
    icon === "sun" ? "rgba(255, 255, 255, 0.8)" : "rgba(0, 0, 0, 0.85)";
  const h3FontColour = icon === "sun" ? "var(--black)" : "var(--white)";
  const h4FontColour = icon === "sun" ? "var(--grey1)" : "var(--grey2)";

  return (
    <DivContainerStyles maxHeight={maxHeight} bgColour={bgColour}>
      <MainSectionStyles
        h3FontColour={h3FontColour}
        h4FontColour={h4FontColour}
      >
        {timezone ? (
          <div>
            <h4>Current timezone</h4>
            <h3>{timezone}</h3>
          </div>
        ) : (
          <LoadingDots />
        )}
        {dayOfYear ? (
          <div>
            <h4>Day of the year</h4>
            <h3>{dayOfYear}</h3>
          </div>
        ) : (
          <LoadingDots />
        )}
        {dayOfWeek ? (
          <div>
            <h4>Day of the week</h4>
            <h3>{dayOfWeek}</h3>
          </div>
        ) : (
          <LoadingDots />
        )}
        {weekNumber ? (
          <div>
            <h4>Week number</h4>
            <h3>{weekNumber}</h3>
          </div>
        ) : (
          <LoadingDots />
        )}
      </MainSectionStyles>
    </DivContainerStyles>
  );
};

export default MainSection;
