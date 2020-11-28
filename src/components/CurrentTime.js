import React from "react";

const CurrentTime = ({ currentHour, currentMinute, timezone }) => {
  return (
    <div>
      <h2>
        {currentHour}:{currentMinute}
      </h2>
      <span>{timezone}</span>
    </div>
  );
};

export default CurrentTime;
