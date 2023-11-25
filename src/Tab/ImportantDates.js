import React, { useEffect, useState } from "react";
import "../Css/Main.css";
import "../Css/Buildin.css";
import progress from "../Assests/settings.png";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import { importantDate } from "../DataStore/DataStore";
import DateCountDown from "../components/DateCountDown";

function ImportantDates({ mheight, height }) {
  const viewSelect = false;
  const importantEvent = importantDate();
  const [nextEvent, setNextEvent] = useState(null);
  const [dateString, setDateString] = useState("2023-10-31");
  const [dateCalenderString, setdateCalenderString] = useState(dayjs());
  const dateObject = new Date(dateString);
  const [selectedEvent, setSelectedEvent] = useState(nextEvent);

  useEffect(() => {
    const currentDate = new Date();
    const futureEvents = importantEvent.filter(
      (event) => new Date(event.date) > currentDate
    );
    futureEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    const nextEvent = futureEvents.length > 0 ? futureEvents[0] : null;
    setNextEvent(nextEvent);
    setSelectedEvent(nextEvent);
    setDateString(nextEvent.date);
    setdateCalenderString(dayjs(nextEvent.date));

    console.log("dateNext: ", nextEvent.date);
  }, []);

  const handleButtonClick = (eventData) => {
    // This function will be called when a button is clicked
    console.log("Clicked event:", eventData, eventData.date);
    const newDefaultDate = dayjs(eventData.date);
    setdateCalenderString(newDefaultDate);
    setDateString(eventData.date);
    setSelectedEvent(eventData);

    // You can perform further actions with the eventData
  };

  // Extract month name
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[dateObject.getMonth()];

  // Extract week name
  const weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //Extract day name
  const daysCount = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
    "23rd",
    "24th",
    "25th",
    "26th",
    "27th",
    "28th",
    "29th",
    "30th",
    "31st",
    "32th",
  ];
  const weekName = weekNames[dateObject.getDay()];

  // Extract year
  const year = dateObject.getFullYear();
  const day = daysCount[dateObject.getDate() - 1];
  const currentDate = dayjs();

  console.log("Date", monthName, weekName, year, day, dateObject.getDate());

  if (!selectedEvent) {
    return (
      <div className="tab-container">
        <div className="image-slider">
          <div className="card-container" style={{ height: height }}>
            <img src={progress} alt="" height={80} />
            <h1 style={{ color: "#b1b1b1" }}>Work in progress</h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="tab-container">
        <div className="image-slider">
          <div className="card-container" style={{ height: height }}>
            <div className="date-container">
              <div className="date-container-section">
                <div className="date-details">
                  <div className="date-details-event">
                    <span style={{ fontSize: "2rem", fontWeight: 700 }}>
                      {monthName} | {year}
                    </span>
                    <span
                      style={{ fontFamily: "Poiret One", fontSize: "2rem" }}
                    >
                      {weekName} | {day}
                    </span>
                    <span style={{ fontSize: "1rem", fontWeight: 700 }}>
                      <DateCountDown date={dateString} />
                    </span>
                  </div>
                  <div className="date-details-event-date">
                    <EventAvailableIcon />
                    <span style={{ fontSize: "2rem", flexWrap: "inherit" }}>
                      {selectedEvent.event}
                    </span>
                  </div>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateCalendar", "DateCalendar"]}>
                    <DateCalendar
                      key={dateCalenderString}
                      style={{ color: "#fff" }}
                      defaultValue={dateCalenderString}
                      disabled={dayjs(dateCalenderString).isBefore(currentDate)}
                      readOnly={
                        !dayjs(dateCalenderString).isBefore(currentDate)
                      }
                    />
                  </DemoContainer>
                </LocalizationProvider>
                <div className="date-details" style={{ marginLeft: "10px" }}>
                  {importantEvent.map((event, index) => (
                    <div
                      className={`data-details-event-button ${
                        selectedEvent.event === event.event
                          ? "event-selected"
                          : ""
                      }`}
                      onClick={() => handleButtonClick(event)}
                    >
                      {event.event}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImportantDates;
