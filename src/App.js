import React, { useState, useEffect } from "react";

const App = () => {
  const IP_API = "https://freegeoip.app/json/";
  const WORLDTIME_API = "http://worldtimeapi.org/api/ip/";

  // ------ Set states ------ //
  const [ipAddress, setIPAddress] = useState(null);
  const [city, setCity] = useState(null);
  const [regionCode, setRegionCode] = useState(null);
  const [time, setTime] = useState(null);
  const [dayOfWeek, setDayOfWeek] = useState(null);
  const [dayOfYear, setDayOfYear] = useState(null);
  const [weekNumber, setweekNumber] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [greeting, setGreeting] = useState("Good morning, it's currently");
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

  const getTimeData = async () => {
    const URL = WORLDTIME_API;
    const response = await fetch(URL);
    const data = await response.json();

    if (data.client_ip !== "") {
      setTime(new Date(data.datetime));
      setDayOfWeek(data.day_of_week);
      setDayOfYear(data.day_of_year);
      setweekNumber(data.week_number);
      setTimezone(data.timezone);
    } else {
      setErrorMessage("Uh oh");
    }
  };

  // ------ Perform side effects after component has mounted ------ //
  useEffect(() => {
    getIPAddress();
    getTimeData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <p>{greeting}</p>
    </>
  );
};

export default App;
