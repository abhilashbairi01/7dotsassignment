import React, { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useCountdown } from "react-countdown-circle-timer";
import "./Timer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import cleaning from "../assets/images/clean.svg";
import { Container, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFastForward } from '@fortawesome/free-solid-svg-icons';
import { faClock } from "@fortawesome/free-solid-svg-icons";


function Timer({ size = 180 }) {
  const {
    path,
    pathLength,
    stroke,
    strokeDashoffset,
    remainingTime: elapsedTime,
    // elapsedTime,
    strokeWidth,
  } = useCountdown({ isPlaying: true, duration: 60, colors: "#abc" });
  const [remainingTime, setRemainingTime] = useState(60);

  const addTime = () => {
    setRemainingTime((prevRemainingTime) => prevRemainingTime + 10);
  };

  function calculateStrokeOffset() {
    const remainingPercentage = (remainingTime / 60) * 100;
    const offset = (pathLength * remainingPercentage) / 100;
    return offset;
  }

  return (
    <>
      <div id="header_title">
        <p className="title_text">Routine starting in...</p>
        <div className="subheading_title">Subheading here</div>
      </div>
      <div id="timer">
        <CountdownCircleTimer
          isPlaying
          duration={remainingTime}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          strokeWidth={strokeWidth}
          size={size}
          strokeLinecap="round"
          trailColor="#d8d8d8"
          trailStrokeWidth={strokeWidth}
          strokeDasharray={`${pathLength} ${pathLength}`}
          strokeDashoffset={calculateStrokeOffset()}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </div>
      <br />
      <div id="timer-extends">
        <button
          type="button"
          class="border border-primary rounded-lg rounded-pill btn btn-outline-primary "
          id="tensec"
          onClick={addTime}
        >
          +10sec
        </button>
        <span style={{ marginLeft: "2%" }}></span>
        <button
          type="button"
          class="border border-primary rounded-lg rounded-pill btn btn-outline-primary"
          id="skip"
        >
          <FontAwesomeIcon icon={faFastForward} /> Skip
        </button>
      </div>
      <br />
      <div id="card">
        <div
          id="lastfooter"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div id="lastfooters">
            <div id="step" style={{ float: "left", fontWeight: "bold" }}>
              Step 2/3
            </div>
            <br />
            <div
              id="cleansingimg"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={cleaning}
                alt="cleaning"
                width={"100px"}
                height={"100px"}
              />
              <div
                id="text_clean"
                style={{ fontWeight: "600", marginLeft: "10px" }}
              >
                Cleansing
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "15%",
              }}
            >
              <div
                id="clean_time"
                style={{
                  color: "black",
                  fontWeight: "bold",
                  marginLeft: "-70%",
                }}
              >
              <FontAwesomeIcon icon={faClock} />  60sec
              </div>
              <div id="howtodo" style={{ color: "violet", fontWeight: "500" }}>
                How to do
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
