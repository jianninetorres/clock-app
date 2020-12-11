import React from "react";
import styled from "styled-components";
import bgImageDayMobile from "../images/bg-image-daytime.jpg";
import bgImageDayTablet from "../images/bg-image-daytime-tablet.jpg";
import bgImageDayDesktop from "../images/bg-image-daytime-desktop.jpg";
import bgImageNightMobile from "../images/bg-image-nighttime.jpg";
import bgImageNightTablet from "../images/bg-image-nighttime-tablet.jpg";
import bgImageNightDesktop from "../images/bg-image-nighttime-desktop.jpg";
import CurrentTime from "./CurrentTime";
import Quote from "./Quote";
import Button from "./Button";
import LoadingDots from "./LoadingDots";

const HeroStyles = styled.div`
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: cover;
  padding: calc(var(--base-size) * 2) 0;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.35);
  }
  @media screen and (min-width: 1200px) {
    padding-top: calc(var(--base-size) * 2) 0;
  }

  div.hero-content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: relative;
    color: #fff;
    height: 100vh;
    transform: translateY(${(props) => props.transform});
    transition: transform 0.5s ease-out;
    @media screen and (min-width: 1200px) {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
    }
  }

  div.time-button-container {
    z-index: 1;
    color: inherit;
    padding-bottom: calc(var(--base-size) * 2);
    margin-bottom: calc(var(--base-size) * 2);
    @media screen and (min-width: 1024px) {
      display: grid;
      grid-template-columns: 1fr 200px;
      align-items: flex-end;
      width: 100%;
    }
  }
`;

const Hero = ({
  greeting,
  greetingVisibility,
  currentHour,
  currentMinute,
  city,
  regionCode,
  timezoneAbbr,
  backgroundImage,
  icon,
  quote,
  quoteAuthor,
  onClickButton,
  buttonIsClicked,
  transformY,
  timezone,
  viewport,
}) => {
  const showBgImage = () => {
    let bgImage;
    if (backgroundImage === "daylight") {
      if (viewport === "mobile") {
        bgImage = bgImageDayMobile;
      } else if (viewport === "tablet") {
        bgImage = bgImageDayTablet;
      } else if (viewport === "desktop") {
        bgImage = bgImageDayDesktop;
      }
      return bgImage;
    } else if (backgroundImage === "starlight") {
      if (viewport === "mobile") {
        bgImage = bgImageNightMobile;
      } else if (viewport === "tablet") {
        bgImage = bgImageNightTablet;
      } else if (viewport === "desktop") {
        bgImage = bgImageNightDesktop;
      }
      return bgImage;
    }
  };
  const wasButtonClicked = transformY === true ? "-60%" : 0;
  return (
    <HeroStyles background={showBgImage} transform={wasButtonClicked}>
      <div className="hero-content-wrapper">
        <Quote quote={quote} quoteAuthor={quoteAuthor} />
        <div className="time-button-container">
          <CurrentTime
            currentHour={currentHour}
            currentMinute={currentMinute}
            timezoneAbbr={timezoneAbbr}
            city={city}
            regionCode={regionCode}
            greeting={greeting}
            greetingVisibility={greetingVisibility}
            icon={icon}
          />
          {timezone ? (
            <Button
              background={showBgImage}
              onClickButton={onClickButton}
              buttonIsClicked={buttonIsClicked}
            />
          ) : (
            <LoadingDots />
          )}
        </div>
      </div>
    </HeroStyles>
  );
};

export default Hero;
