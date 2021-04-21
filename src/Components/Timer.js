import React, { useEffect, useState } from "react";

export default function Timer({ setPasscodeMessage }) {
  const [seconds, setSeconds] = useState(15);
  const [resetClock, setResetClock] = useState(false);
  const fetchData = () => {
    fetch(`http://localhost:5000/`, {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((JSONresponse) => {
        console.log(JSONresponse.testingModeMessage);
        setPasscodeMessage(JSONresponse.testingModeMessage);
      });
  };
  useEffect(() => {
    const timer = window.setInterval(() => {
      setSeconds((seconds) => {
        const newSeconds = seconds - 1;
        if (newSeconds < 1) {
          fetchData();
          window.clearInterval(this);
          setSeconds(15);
          setResetClock(!resetClock);
          return;
        }
        console.log(newSeconds);
        return newSeconds;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [resetClock]);
  return <div>{seconds}</div>;
}
