import React, { useState, useEffect } from "react";
import "./Timer.css";
import cleaning from "../assets/images/clean.svg";

function Timer() {
  const [countdownNumber, setCountdownNumber] = useState(60);
  const [animationDuration, setAnimationDuration] = useState(60);

  useEffect(() => {
    if (countdownNumber > 0) {
      const timer = setTimeout(() => {
        setCountdownNumber((prevCountdownNumber) => prevCountdownNumber - 1);
      }, 1000);
      setAnimationDuration(countdownNumber);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [countdownNumber]);

  function AddTimer() {
    setCountdownNumber((prevCountdownNumber) => prevCountdownNumber + 10);
    setAnimationDuration((prevAnimationDuration) => prevAnimationDuration + 10);
  }

  function calculateStrokeOffset() {
    const remainingPercentage = (countdownNumber / 60) * 100;
    const offset = 314 - (314 * remainingPercentage) / 100;
    return offset;
  }

  return (
    <>
      <div id="header_title">
        <p className="title_text">Routine starting in...</p>
        <div className="subheading_title">Subheading here</div>
      </div>
      <div id="timer">
        <svg xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="50"
            cy="50"
            r="50"
            style={{
              strokeDashoffset: calculateStrokeOffset(),
              animation: `countdown ${animationDuration}s linear forwards`,
            }}
          ></circle>
        </svg>
        <div className="countdown-container">
          <div className="countdown-text">00:{countdownNumber}</div>
        </div>
      </div>
      <br></br>
      <br />
      <br />
      <div id="footer" style={{ textAlign: "center" }}>
        <div id="timer-extends">
          <button id="tensec" onClick={AddTimer}>
            +10sec
          </button>
          <span style={{ marginLeft: "2%" }}></span>
          <button id="skip">Skip</button>
        </div>
        <br />
        <br/>
        <div
          id="lastfooter"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div id="lastfooters">
            <div id="step" style={{float:'left',fontWeight:'bold'}}>Step 2/3</div>
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
                style={{ fontWeight: "bold", marginLeft: "10px" }}
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
                  marginLeft:'-70%'
                }}
              >
                60sec
              </div>
              <div id="howtodo" style={{ color: "violet", fontWeight: "bold" }}>
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
