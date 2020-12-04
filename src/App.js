import React, { useState, useEffect } from "react";
import "reset-css";
import Hero from "./components/Hero";

const App = () => {
  const IP_API = "https://freegeoip.app/json/";
  const WORLDTIME_API =
    "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/ip/";
  let initialTime = new Date();
  let initialTimeHour = initialTime.getHours();
  let initialTimeMinutes = initialTime.getMinutes();

  // ------ Set states ------ //
  const [greeting, setGreeting] = useState(null);
  const [ipAddress, setIPAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [regionCode, setRegionCode] = useState(null);
  const [currentHour, setCurrentHour] = useState(null);
  const [currentMinute, setCurrentMinute] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [dayOfYear, setDayOfYear] = useState(null);
  const [weekNumber, setweekNumber] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [icon, setIcon] = useState();
  const [backgroundImage, setBackgroundImage] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  // ------ Call IP Address API ------ //
  const getIPAddress = async () => {
    const URL = IP_API;
    const response = await fetch(URL);
    const data = await response.json();

    if (data.ip !== "") {
      setIPAddress(data.ip);
      setCity(data.city);
      setRegionCode(data.region_code);
    }
  };

  // get time-related data
  const getTimeData = async () => {
    const URL = WORLDTIME_API;
    const response = await fetch(URL);
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

  const getCurrentTime = async () => {
    const URL = WORLDTIME_API;
    const response = await fetch(URL);
    const data = await response.json();

    if (data.datetime !== "") {
      let time = new Date(data.datetime);
      setCurrentHour(time.getHours());
      setCurrentMinute(time.getMinutes());
    } else {
      setErrorMessage("Uh oh");
    }
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

  // ------ Perform side effects after component has mounted ------ //
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getIPAddress();
      getTimeData();

      // update current time every second
      setInterval(() => {
        getCurrentTime();
      }, 1000);
    }

    if (0 < currentHour < 4 || 19 < currentHour < 25) {
      setGreeting(`Good ${greetings.evening.label}, it's currently`);
      setIcon(greetings.evening.icon);
      setBackgroundImage(greetings.evening.bgImage);
    } else if (5 < currentHour < 12) {
      setGreeting(`Good ${greetings.morning.label}, it's currently`);
      setIcon(greetings.morning.icon);
      setBackgroundImage(greetings.morning.bgImage);
    } else if (12 < currentHour < 18) {
      setGreeting(`Good ${greetings.afternoon.label}, it's currently`);
      setIcon(greetings.afternoon.icon);
      setBackgroundImage(greetings.afternoon.bgImage);
    }

    return () => {
      mounted = false;
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero
        greeting={greeting}
        currentHour={currentHour}
        currentMinute={currentMinute}
        city={city}
        regionCode={regionCode}
        timezone={timezone}
      />
    </>
  );
};

export default App;
