import React from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "react-background-video-player";

const mainmenu = {
  width: "2430px",
  height: "790px",
  top: "50%",
  border: "1px solid",
  margin: "-300px 0 0 -500px"
};

export default function Home() {
  return (
    <div className="App">
      <h1>AM's CountdownCalendar App </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calendar"> Calendar</Link>
        </li>
        <li>
          <Link to="/countdown"> Countdown</Link>
        </li>
        <li>
          <Link to="/resources"> Resources</Link>
        </li>
      </ul>
      <VideoPlayer
        style={mainmenu}
        src={
          "https://www.videvo.net/videvo_files/converted/2017_09/preview/170804_A_Lombok_021.mp467341.webm"
        }
        autoPlay={true}
        muted={true}
      />
    </div>
  );
}
