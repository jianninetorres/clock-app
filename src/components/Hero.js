import React from "react";
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
      <p>{greeting}</p>
      />
      <p>
        in {city}, {regionCode}
      </p>
    </HeroStyles>
  );
};

export default Hero;
