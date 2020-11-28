import React, { useState, useEffect } from "react";
import "reset-css";
import Hero from "./components/Hero";

const App = () => {
  const IP_API = "https://freegeoip.app/json/";
  const WORLDTIME_API = "http://worldtimeapi.org/api/ip/";

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
  const [icon, setIcon] = useState("sun");
  const [backgroundImage, setBackgroundImage] = useState("daylight");
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
    morning: "Good morning, it’s currently",
    afternoon: "Good afternoon, it’s currently",
    evening: "Good evening, it’s currently",
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
      setGreeting(greetings.evening);
      setIcon("moon");
      setBackgroundImage("starlight");
    } else if (5 < currentHour < 12) {
      setGreeting(greetings.morning);
      setIcon("sun");
      setBackgroundImage("daylight");
    } else if (12 < currentHour < 18) {
      setGreeting(greetings.afternoon);
      setIcon("sun");
      setBackgroundImage("daylight");
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
