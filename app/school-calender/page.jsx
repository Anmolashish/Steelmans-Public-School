import React from "react";
import SchoolCalender from "../OnePageComponent/SchoolCalender";
import Header from "../Componenets/Header";

export default function page() {
  return (
    <>
      <Header heading={"School Calender"} />
      <SchoolCalender />
    </>
  );
}
