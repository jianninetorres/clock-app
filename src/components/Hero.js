import React from "react";
import styled from "styled-components";
import bgImageDay from "../images/bg-image-daytime.jpg";
import bgImageNight from "../images/bg-image-nighttime.jpg";
import CurrentTime from "./CurrentTime";

const HeroStyles = styled.div`
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: cover;
  padding: calc(var(--base-size) * 8) calc(var(--base-size) * 2);
  color: #fff;

  h3 {
    margin-bottom: calc(var(--base-size) * 2);
  }
`;

const Hero = ({
  greeting,
  currentHour,
  currentMinute,
  city,
  regionCode,
  timezone,
  backgroundImage,
  icon,
}) => {
  const showBgImage =
    backgroundImage === "daylight" ? bgImageDay : bgImageNight;
  return (
    <HeroStyles background={showBgImage}>
      <h3>{greeting}</h3>
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
