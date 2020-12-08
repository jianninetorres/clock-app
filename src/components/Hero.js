import React from "react";
import styled from "styled-components";
import bgImageDay from "../images/bg-image-daytime.jpg";
import bgImageNight from "../images/bg-image-nighttime.jpg";
import CurrentTime from "./CurrentTime";
import Quote from "./Quote";
import Button from "./Button";

const HeroStyles = styled.div`
  // background: url(${(props) => props.background}) no-repeat center center;
  // background-size: cover;
  // padding: calc(var(--base-size) * 2) calc(var(--base-size) * 2);
  // position: relative;
  // &::before {
  //   content: "";
  //   position: absolute;
  //   top: 0px;
  //   right: 0px;
  //   bottom: 0px;
  //   left: 0px;
  //   background-color: rgba(0, 0, 0, 0.35);
  // }

  div.hero-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    color: #fff;
    height: 100vh;
    // transform: translateY(-25%);
  }

  div.time-button-container {
    z-index: 1;
    color: inherit;
    padding-bottom: calc(var(--base-size) * 2);
    margin-bottom: calc(var(--base-size) * 2);
  }
`;
const Hero = ({
  children,
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
  onClickButton,
  transformY,
}) => {
  const showBgImage =
    backgroundImage === "daylight" ? bgImageDay : bgImageNight;
  return (
    <HeroStyles background={showBgImage}>
      <div className="hero-content-wrapper">
        <Quote quote={quote} quoteAuthor={quoteAuthor} />
        <div className="time-button-container">
          <CurrentTime
            currentHour={currentHour}
            currentMinute={currentMinute}
            timezone={timezone}
            city={city}
            regionCode={regionCode}
            greeting={greeting}
            greetingVisibility={greetingVisibility}
            icon={icon}
          />
          <Button background={showBgImage} />
        </div>
        {children}
      </section>
    </HeroStyles>
  );
};

export default Hero;
