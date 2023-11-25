import React, { useState, useEffect } from "react";

function DateCountDown({ date }) {
  const targetDate = date;
  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isTargetDateBeforeCurrentDate, setIsTargetDateBeforeCurrentDate] =
    useState(false);

  useEffect(() => {
    const calculateRemainingTime = () => {
      const currentDate = new Date();
      const targetDateTime = new Date(targetDate).getTime();
      const currentDateTime = currentDate.getTime();

      const isBefore = targetDateTime < currentDateTime;
      setIsTargetDateBeforeCurrentDate(isBefore);

      const timeDifference = isBefore ? 0 : targetDateTime - currentDateTime;

      // Calculate remaining days, hours, minutes, and seconds
      const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursRemaining = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesRemaining = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsRemaining = Math.floor(
        (timeDifference % (1000 * 60)) / 1000
      );

      setRemainingTime({
        days: daysRemaining,
        hours: hoursRemaining,
        minutes: minutesRemaining,
        seconds: secondsRemaining,
      });
    };

    // Initial calculation
    calculateRemainingTime();

    // Update every second
    const intervalId = setInterval(() => {
      calculateRemainingTime();
    }, 1000);

    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  const formatTimePart = (value) => (value < 10 ? `0${value}` : value);

  if (!isTargetDateBeforeCurrentDate) {
    return (
      <div className="date_counter">
        <p>{formatTimePart(remainingTime.days)}</p>
        <p> {" : "}</p>
        <p>{formatTimePart(remainingTime.hours)}</p>
        <p> {" : "} </p>
        <p>{formatTimePart(remainingTime.minutes)}</p>
        <p> {" : "}</p>
        <p>{formatTimePart(remainingTime.seconds)}</p>
      </div>
    );
  } else {
    return (
      <div className="date_counter">
        <p>Date expire</p>
      </div>
    );
  }
}

export default DateCountDown;
