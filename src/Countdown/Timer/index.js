import React from "react";
import Timeritem from "./Timeritem";

const Timer = ({ duration }) => (
  <div className="level">
    <Timeritem count={Math.floor(duration.asDays())} label="Days" />
    <Timeritem
      count={duration
        .hours()
        .toString()
        .padStart(2, "0")}
      label="Hours"
    />
    <Timeritem
      count={duration
        .minutes()
        .toString()
        .padStart(2, 0)}
      label="Minutes"
    />
    <Timeritem
      count={duration
        .seconds()
        .toString()
        .padStart(2, 0)}
      label="Seconds"
    />
  </div>
);
export default Timer;
