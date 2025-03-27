import React from "react";
import Header from "../Componenets/Header";
import ExamSchedules from "../OnePageComponent/ExamSchedules";

export default function page() {
  return (
    <>
      <Header heading={"Exam Schedules"} />
      <ExamSchedules />
    </>
  );
}
