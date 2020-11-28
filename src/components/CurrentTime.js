import React from "react";

const CurrentTime = ({ currentHour, currentMinute, timezone }) => {
  return (
    <div>
      {currentHour && currentMinute && (
        <h2>
          {currentHour}:
          {currentMinute ? (currentMinute < 9 ? `0${currentMinute}` : "") : ""}
        </h2>
      )}

      <span>{timezone}</span>
    </div>
  );
};

export default CurrentTime;
