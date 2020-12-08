import React from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";

import styled from "styled-components";

const CurrentTimeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 var(--base-size);
  @media screen and (min-width: 568px) {
    padding: 0 calc(var(--base-size) * 2);
  }

  .greeting-container {
    display: flex;
    align-items: center;
    margin-bottom: var(--base-size);

    img {
      margin-right: var(--base-size);
    }

    h3 {
      margin-bottom: 0;
    }
  }

  .time-container {
    display: flex;
    align-items: baseline;

    span {
      @media screen and (min-width: 568px) {
        margin-left: calc(var(--base-size) / 2);
      }
    }
  }

  span {
    margin-bottom: calc(var(--base-size) - 4px);
  }

  p {
    margin-bottom: 0;
  }
`;

const CurrentTime = ({
  currentHour,
  currentMinute,
  timezoneAbbr,
  city,
  regionCode,
  greeting,
  greetingVisibility,
  icon,
}) => {
  const hour = currentHour === 0 ? 12 : currentHour;
  const minute = currentMinute < 10 ? `0${currentMinute}` : currentMinute;
  const iconDisplay = icon === "sun" ? sun : moon;

  return (
    <CurrentTimeStyles>
      <div className="greeting-container">
        {greeting && <img src={iconDisplay} alt="" />}
        <h3>
          {greeting}
          {greetingVisibility && `,`}
          {greetingVisibility && <span> it's currently</span>}
        </h3>
      </div>
      {hour && minute && (
        <div className="time-container">
          <h2>
            {hour}:{minute}
          </h2>
          <span>{timezoneAbbr}</span>
        </div>
      )}
      <h3>
        in {city}, {regionCode}
      </h3>
    </CurrentTimeStyles>
  );
};

export default CurrentTime;
