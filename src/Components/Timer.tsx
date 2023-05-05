// Import the necessary parts of the React library
import React, { useState, useEffect } from 'react';

// Create a Countdown component that receives hours, minutes, and seconds as properties
const Countdown = ({ hr, min, sec }) => {
  // Create a state variable 'over' to check if the countdown is over, initially set to false
  const [over, setOver] = useState(false);
  // Create a state variable 'paused' to check if the countdown is paused, initially set to true
  const [paused, setPaused] = useState(true);
  // Create a state variable 'time' to store hours, minutes, and seconds, initially set to the passed properties
  const [[h, m, s], setTime] = useState([hr, min, sec]);

  // A function that updates the time every second
  const tick = () => {
    // If the countdown is paused or over, don't do anything
    if (paused || over) {
      return;
    }
    // If the time reaches 0, set 'over' to true
    if (h === 0 && m === 0 && s === 0) {
      setOver(true);
    // If there are no minutes and seconds left, subtract an hour and set minutes and seconds to 59
    } else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    // If there are no seconds left, subtract a minute and set seconds to 59
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    // Otherwise, just subtract a second
    } else {
      setTime([h, m, s - 1]);
    }
  };

  // A function to reset the countdown to the initial time and pause it
  const handleReset = () => {
    setTime([hr, min, sec]);
    setPaused(true);
    setOver(false);
  };

  // A function to pause or resume the countdown
  const handlePause = () => setPaused(!paused);

  // A helper function to format the time with two digits (adding a leading zero if necessary)
  const fmt = (val) => val.toString().padStart(2, '0');

  // This is a special function called 'useEffect' that runs when the component is created and whenever it updates
  // Placing the timer setup inside the useEffect() ensures that the timer is set up when the component is first rendered (mounted) and updated.
  // If the timer setup was placed directly in the component body instead of within a useEffect(), it would create a new timer on every render, leading to multiple timers running simultaneously and causing unexpected behavior.
  useEffect(() => {
    // Create a timer that calls the 'tick' function every second
    let ticker = setInterval(() => tick(), 1000);
    // This is a cleanup function that stops the timer when the component is removed from the page
    return () => {
      clearInterval(ticker);
    };
  });

  // The JSX code that displays the countdown, start/pause button, and reset button
  return (
    <>
      <h3 className="countdown">{`${fmt(h)}:${fmt(m)}:${fmt(s)}`}</h3>
      <button onClick={handlePause}>{paused ? 'Start' : 'Pause'}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

// Create a Timer component that uses the Countdown component
function Timer() {
  return (
    <div>
      {/* Add a Countdown component with 1 hour, 45 minutes, and 0 seconds */}
      <Countdown hr={1} min={45} sec={0} />
    </div>
  );
}

// Export the Timer component so it can be used in other parts of the app
export default Timer;
