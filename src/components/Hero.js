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
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: cover;
  padding: calc(var(--base-size) * 2) calc(var(--base-size) * 2);
  color: #fff;
  height: 100%;

  h3 {
    margin-bottom: calc(var(--base-size) * 2);
    // padding-top: calc(var(--base-size) * 8);
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
  quote,
  quoteAuthor,
}) => {
  const showBgImage =
    backgroundImage === "daylight" ? bgImageDay : bgImageNight;
  return (
    <HeroStyles background={showBgImage}>
      <h3>{greeting}</h3>
      <Quote quote={quote} quoteAuthor={quoteAuthor} />
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
