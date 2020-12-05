import React, { useState, useEffect } from "react";
import "reset-css";
import Hero from "./components/Hero";
import MainSection from "./components/MainSection";
import GlobalStyles from "./styles/GlobalStyles";

import styled from "styled-components";
import "./styles/typography.css";

const WrapperStyles = styled.div`
  overflow: hidden;
  height: 100vh;
`;

const App = () => {
  const IP_API = "https://freegeoip.app/json/";
  const WORLDTIME_API =
    "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/ip/";
  const QUOTE_API = "https://api.quotable.io/random";

  let initialTime = new Date();
  let initialTimeHour = initialTime.getHours();
  let initialTimeMinutes = initialTime.getMinutes();

  // ------ Set states ------ //
  const [greeting, setGreeting] = useState("Hello");
  const [ipAddress, setIPAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [regionCode, setRegionCode] = useState(null);
  const [currentHour, setCurrentHour] = useState(initialTimeHour);
  const [currentMinute, setCurrentMinute] = useState(initialTimeMinutes);
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [dayOfYear, setDayOfYear] = useState(null);
  const [weekNumber, setweekNumber] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [icon, setIcon] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [quote, setQuote] = useState(null);
  const [quoteAuthor, setQuoteAuthor] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // ------ Call IP Address API ------ //
  const getIPAddress = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    if (data.ip !== "") {
      setIPAddress(data.ip);
      setCity(data.city);
      setRegionCode(data.region_code);
    }
  };

  // ------ Get time-related data ------ //
  const getTimeData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    if (data.client_ip !== "") {
      setDayOfWeek(data.day_of_week);
      setDayOfYear(data.day_of_year);
      setweekNumber(data.week_number);
      setTimezone(data.abbreviation);
    } else {
      setErrorMessage("Uh oh");
    }
  };

  // ------ Get quote ------ //
  const getQuote = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    setQuote(data.content);
    setQuoteAuthor(data.author);
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

  const showGreeting = (hour) => {
    if (hour < 6) {
      setGreeting(`Good ${greetings.evening.label}, it's currently`);
      setIcon(greetings.evening.icon);
      setBackgroundImage(greetings.evening.bgImage);
    } else if (hour < 12) {
      setGreeting(`Good ${greetings.morning.label}, it's currently`);
      setIcon(greetings.morning.icon);
      setBackgroundImage(greetings.morning.bgImage);
    } else if (hour < 18) {
      setGreeting(`Good ${greetings.afternoon.label}, it's currently`);
      setIcon(greetings.afternoon.icon);
      setBackgroundImage(greetings.afternoon.bgImage);
    } else if (hour < 25) {
      setGreeting(`Good ${greetings.evening.label}, it's currently`);
      setIcon(greetings.evening.icon);
      setBackgroundImage(greetings.evening.bgImage);
    }
  };

  // ------ Perform side effects after component has mounted ------ //
  useEffect(() => {
    let mounted = true;
    getIPAddress(IP_API);
    getTimeData(WORLDTIME_API);
    getQuote(QUOTE_API);
    // showGreeting(currentHour);
    if (currentHour) {
      // showGreeting(1);
      if (mounted) {
        showGreeting(currentHour);
        // update current time every second
        setInterval(() => {
          getCurrentTime();
          // showGreeting(currentHour);
        }, 1000);
      }
    }

    return () => {
      mounted = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentHour, currentMinute]);

  return (
    <>
      <GlobalStyles />
      <WrapperStyles>
        <Hero
          greeting={greeting}
          currentHour={currentHour}
          currentMinute={currentMinute}
          city={city}
          regionCode={regionCode}
          timezone={timezone}
          backgroundImage={backgroundImage}
          quote={quote}
          quoteAuthor={quoteAuthor}
        />
        {/* <MainSection /> */}
      </WrapperStyles>
    </>
  );
};

export default App;
