import React from "react";
import events from "./events";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

//const allViews = Object.keys(Calendar.Views).map(k => Calendar.Views[k]);

const CalendarPage = () => (
  <div style={{ height: 700 }}>
    <Calendar events={events} localizer={localizer} defaultDate={new Date()} />
  </div>
);

export default CalendarPage