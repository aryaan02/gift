import React from "react";
import { Fragment } from "react";

import classes from "./BodyDates.module.css";

const BodyDates = (props) => {
  const months = [
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
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = props.date;
  const dateArray = date.split("_");
  console.log(dateArray);
  const dateObject = new Date(
    parseInt(dateArray[0], 10),
    parseInt(dateArray[1], 10),
    parseInt(dateArray[2], 10)
  );
  const dayOfWeek = dateObject.getDay();
  const month = dateObject.getMonth();
  const dayOfMonth = dateObject.getDate();
  const year = dateObject.getFullYear();

  return (
    <Fragment>
      <h2 className={classes.h2}>
        {daysOfWeek[dayOfWeek]}, {months[month]} {dayOfMonth}, {year}
      </h2>
    </Fragment>
  );
};

export default BodyDates;
