import React, { useState, useEffect, useCallback, useRef } from "react";
import "reset-css";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import GlobalStyles from "./styles/GlobalStyles";

import styled from "styled-components";
import "./styles/typography.css";

const WrapperStyles = styled.div`
  overflow: hidden;
  height: 100vh;
  position: relative;
`;

const App = () => {
  const IP_API = "https://freegeoip.app/json/";
  const WORLDTIME_API =
    "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/ip/";

  let initialTime = new Date();
  let initialTimeHour = initialTime.getHours();
  let initialTimeMinutes = initialTime.getMinutes();

  // ------ Set states ------ //
  const [greeting, setGreeting] = useState("Hello");
  const [city, setCity] = useState(null);
  const [regionCode, setRegionCode] = useState(null);
  const [currentHour, setCurrentHour] = useState(initialTimeHour);
  const [currentMinute, setCurrentMinute] = useState(initialTimeMinutes);
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [dayOfYear, setDayOfYear] = useState(null);
  const [weekNumber, setweekNumber] = useState(null);
  const [timezoneAbbr, setTimezoneAbbr] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [icon, setIcon] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [greetingVisibility, setGreetingVisibility] = useState(false);
  const [buttonIsClicked, setButtonIsClicked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [viewport, setViewport] = useState("mobile");
  const wrapperRef = useRef();

  // ------ Call IP Address API ------ //
  const getIPAddress = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    if (data.ip !== "") {
      setCity(data.city);
      setRegionCode(data.region_code);
      setTimezone(data.time_zone);
    }
  };

  // ------ Get time-related data ------ //
  const getTimeData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    if (data.client_ip !== "") {
      setDayOfWeek(data.day_of_week + 1); // Sunday starts at 0
      setDayOfYear(data.day_of_year);
      setweekNumber(data.week_number);
      setTimezoneAbbr(data.abbreviation);
    } else {
      setErrorMessage("Uh oh");
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    setCurrentHour(now.getHours());
    setCurrentMinute(now.getMinutes());
  };

  const greetings = {
    morning: {
      label: "morning",
      icon: "sun",
      bgImage: "daylight",
    },
    afternoon: {
      label: "afternoon",
      icon: "sun",
      bgImage: "daylight",
    },
    evening: {
      label: "evening",
      icon: "moon",
      bgImage: "starlight",
    },
  };

  const showGreeting = useCallback(
    (hour) => {
      if (hour === 0 || hour < 6) {
        setGreeting(`Good ${greetings.evening.label}`);
        setIcon(greetings.evening.icon);
        setBackgroundImage(greetings.evening.bgImage);
      } else if (hour < 12) {
        setGreeting(`Good ${greetings.morning.label}`);
        setIcon(greetings.morning.icon);
        setBackgroundImage(greetings.morning.bgImage);
      } else if (hour < 18) {
        setGreeting(`Good ${greetings.afternoon.label}`);
        setIcon(greetings.afternoon.icon);
        setBackgroundImage(greetings.afternoon.bgImage);
      } else if (hour < 25) {
        setGreeting(`Good ${greetings.evening.label}`);
        setIcon(greetings.evening.icon);
        setBackgroundImage(greetings.evening.bgImage);
      }
    },
    [
      greetings.evening.label,
      greetings.evening.icon,
      greetings.evening.bgImage,
      greetings.morning.label,
      greetings.morning.icon,
      greetings.morning.bgImage,
      greetings.afternoon.label,
      greetings.afternoon.icon,
      greetings.afternoon.bgImage,
    ]
  );

  const onClickButton = () => {
    return buttonIsClicked === true
      ? setButtonIsClicked(false)
      : setButtonIsClicked(true);
  };

  // ------ Perform side effects after component has mounted ------ //
  useEffect(() => {
    let mounted = true;
    getIPAddress(IP_API);
    getTimeData(WORLDTIME_API);
    if (mounted && currentHour) {
      showGreeting(currentHour);
      // update current time every second
      setInterval(() => {
        getCurrentTime();
      }, 1000);

      let viewport = wrapperRef.current.scrollWidth;
      if (viewport > 1023) {
        setViewport("desktop");
        setGreetingVisibility(true);
      } else if (viewport > 500) {
        setGreetingVisibility(true);
        setViewport("tablet");
      } else {
        setViewport("mobile");
      }
    }

    return () => {
      mounted = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect is dependent on currentHour and currentMinute
    // because the greeting depends on them
  }, [currentHour, showGreeting]);

  return (
    <WrapperStyles ref={wrapperRef}>
      <GlobalStyles />
      <Hero
        greeting={greeting}
        greetingVisibility={greetingVisibility}
        currentHour={currentHour}
        currentMinute={currentMinute}
        city={city}
        regionCode={regionCode}
        timezoneAbbr={timezoneAbbr}
        backgroundImage={backgroundImage}
        icon={icon}
        error={errorMessage}
        onClickButton={onClickButton}
        transformY={buttonIsClicked}
        dayOfWeek={dayOfWeek}
        dayOfYear={dayOfYear}
        weekNumber={weekNumber}
        timezone={timezone}
        viewport={viewport}
      />
      <MainSection
        transformY={buttonIsClicked}
        dayOfWeek={dayOfWeek}
        dayOfYear={dayOfYear}
        weekNumber={weekNumber}
        timezone={timezone}
        icon={icon}
        viewport={viewport}
      />
    </WrapperStyles>
  );
};

export default App;
