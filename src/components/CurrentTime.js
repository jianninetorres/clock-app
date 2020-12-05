import React from "react";

import styled from "styled-components";

const CurrentTimeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: calc(var(--base-size) * 2);
  margin-bottom: calc(var(--base-size) * 2);
  z-index: 1;

  h2 {
    margin-bottom: 0;
  }

  div {
    display: flex;
    align-items: flex-end;
  }

  span {
    margin-bottom: calc(var(--base-size) - 4px);
  }
`;

const CurrentTime = ({
  currentHour,
  currentMinute,
  timezone,
  city,
  regionCode,
  greeting,
}) => {
  const hour = currentHour === 0 ? 12 : currentHour;
  const minute = currentMinute < 10 ? `0${currentMinute}` : currentMinute;

  return (
    <CurrentTimeStyles>
      <h3>{greeting}</h3>
      {hour && minute && (
        <div>
          <h2>
            {hour}:{minute}
          </h2>
          <span>{timezone}</span>
        </div>
      )}
      <p>
        in {city}, {regionCode}
      </p>
    </CurrentTimeStyles>
  );
};

export default CurrentTime;
