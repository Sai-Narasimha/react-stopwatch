import React from "react";
import { useState, useEffect } from "react";
export const Stopwatch = () => {
  const [timerOn, setTimerOn] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let id = null;

    if (timerOn) {
      id = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(id);
    }

    // cleanup function to stop re-rendering the component

    return () => clearInterval(id);
  }, [timerOn]);

  return (
      <>
     
    <h2>React Stopwatch</h2>
    <div className="stopwatch">
      <div style = {{backgroundColor: 'black', color : 'white', marginBottom : '10px'}}>
        {/* "0" is added for clear the gap  */}
        <span> {("0" + Math.floor((timer / 600000) % 60)).slice(-2)}h:</span>
        <span> {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}m:</span>
        <span> {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}s</span>
        {/* <span> {("0" + Math.floor((timer / 10) % 100)).slice(-2)}</span> */}
      </div>
      {/* when timerOn variable is off and timer state = 0 show start button  */}
      {!timerOn && timer === 0 && (
        <button
          style={{ background: "green", color: "white", borderColor: "green", fontSize: "20px"}}
          onClick={() => setTimerOn(true)}
        >
          Start
        </button>
      )}
      {/* when timerOn variable is on then show stop button */}
      {timerOn && (
        <button
          style={{ background: "red", color: "white", borderColor: "red",fontSize: "20px"}}
          onClick={() => setTimerOn(false)}
        >
          Stop
        </button>
      )}
      {/* when timer is stopped then start time from prev stopped time */}
      {!timerOn && timer !== 0 && (
        <button
          style={{
            background: "orange",
            color: "white",
            borderColor: "orange",
            marginRight: "5px",
            fontSize: "20px"
          }}
          onClick={() => setTimerOn(true)}
        >
          Resume
        </button>
      )}
      {/* when timer is running then reset it to 0 */}
      {!timerOn && timer > 0 && (
        <button
          style={{ background: "brown", color: "white", borderColor: "brown", fontSize: "20px" }}
          onClick={() => setTimer(0)}
        >
          Reset
        </button>
      )}
    </div>
    </>
  );
};
