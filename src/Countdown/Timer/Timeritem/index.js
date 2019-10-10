import React from "react";

const Timeritem = ({ count, label }) => (
  <div className="level-item has-text-centered">
    <div>
      <p className="title">{count}</p>
      <p className="heading">{label}</p>
    </div>
  </div>
);

export default Timeritem;
