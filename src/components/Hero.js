import React from "react";
import styled from "styled-components";
import bgImageDay from "../images/bg-image-daytime.jpg";
import bgImageNight from "../images/bg-image-nighttime.jpg";
import CurrentTime from "./CurrentTime";
import Quote from "./Quote";

const HeroStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: cover;
  padding: calc(var(--base-size) * 2) calc(var(--base-size) * 2);
  color: #fff;
  height: 100%;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.35);
  }
`;

const Hero = ({
  greeting,
  greetingVisibility,
  currentHour,
  currentMinute,
  city,
  regionCode,
  timezone,
  backgroundImage,
  icon,
  quote,
  quoteAuthor,
}) => {
  const showBgImage =
    backgroundImage === "daylight" ? bgImageDay : bgImageNight;
  return (
    <HeroStyles background={showBgImage}>
      <Quote quote={quote} quoteAuthor={quoteAuthor} />
      <CurrentTime
        currentHour={currentHour}
        currentMinute={currentMinute}
        timezone={timezone}
        city={city}
        regionCode={regionCode}
        greeting={greeting}
        greetingVisibility={greetingVisibility}
      />
    </HeroStyles>
  );
};

export default Hero;
