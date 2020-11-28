import React, { useState } from "react";
import CurrentTime from "./CurrentTime";
import styled from "styled-components";

const HeroStyles = styled.div`
  width: 100%;
  border: 1px solid red;
`;

const Hero = ({
  greeting,
  currentHour,
  currentMinute,
  city,
  regionCode,
  timezone,
}) => {
  return (
    <HeroStyles>
      {currentHour && currentMinute && <p>{greeting}</p>}
      <CurrentTime
        currentHour={currentHour}
        currentMinute={currentMinute}
        timezone={timezone}
      />
      <p>
        in {city}, {regionCode}
      </p>
    </HeroStyles>
  );
};

export default Hero;
