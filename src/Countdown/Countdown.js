import React, { Component } from "react";
import Timer from "./Timer";
import moment from "moment";
import "moment-holiday";

import Datepicker from "./Datepicker";
//import HolidaysModal from "./HolidaysModal";
import Controls from "./Controls/Controls";

class Countdown extends Component {
  state = {
    currentDate: moment(),
    nextDate: moment().endOf("year"),
    paused: false
  };

  componentDidMount() {
    this.resume();
  }

  componentWillUnmount() {
    this.pause();
  }

  getRemainingTime() {
    let { currentDate, nextDate } = this.state,
      diff = nextDate.diff(currentDate);

    return moment.duration(diff);
  }

  handlePausedToggle = () => {
    this.setState(({ paused }, props) => {
      paused = !paused;

      if (paused) {
        this.pause();
      } else {
        this.resume();
      }

      const nextState = {
        paused
      };

      !paused && (nextState.currentDate = moment());

      return nextState;
    });
  };

  pause() {
    clearInterval(this.interval);
  }

  resume() {
    this.interval = setInterval(() => {
      this.setState({
        currentDate: moment()
      });
    }, 1000);
  }
  resume2() {
    this.interval = setInterval(() => {
      this.setState({
        duration: this.getRemainingTime()
      });
    }, 1000);
  }

  handleDateReset = nextDate => {
    this.setState({
      nextDate
    });
  };
  getRemainingTime2() {
    let now = moment(),
      newDate = moment("2019-12-31"),
      diff = newDate.diff(now);
    return moment.duration(diff);
  }

  handleHolidaysToggle = () => {
    this.setState({
      showHolidays: !this.state.showHolidays
    });
  };

  getHolidays() {
    const { currentDate, nextDate } = this.state;

    return currentDate.holidaysBetween(nextDate);
  }

  render() {
    const { paused, currentDate, nextDate, showHolidays } = this.state,
      duration = this.getRemainingTime(),
      holidays = this.getHolidays();

    return (
      <section className="hero is-light is-bold is-fullheight has-text-centered">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">{nextDate.calendar()} is Coming Up!</h1>

            <section className="section">
              <Timer duration={duration} />
            </section>

            <Datepicker onDateReset={this.handleDateReset} />

            <Controls
              paused={paused}
              onPausedToggle={this.handlePausedToggle}
            />
            <section className="title" />

            <section className="section">
              <i>Today is {currentDate.format("dddd, MMMM Do, YYYY,")}</i>
            </section>
          </div>
        </div>
      </section>
    );
  }
}
export default Countdown;

/*
<HolidaysModal
              holidays={holidays}
              active={showHolidays}
              onToggle={this.handleHolidaysToggle}
            />
*/
