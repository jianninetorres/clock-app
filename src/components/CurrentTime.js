import React from "react";

const CurrentTime = ({ currentHour, currentMinute, timezone }) => {
  const hour = currentHour === 0 ? 12 : currentHour;
  const minute = currentMinute < 10 ? `0${currentMinute}` : currentMinute;

  return (
    <div>
      {hour && minute && (
        <h2>
          {hour}:{minute}
        </h2>
      )}

      <span>{timezone}</span>
    </div>
  );
};

export default CurrentTime;
