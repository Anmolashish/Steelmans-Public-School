import Header from "@/app/Componenets/Header";
import SchoolCalender from "@/app/OnePageComponent/SchoolCalender";
import React from "react";

export default function page() {
  return (
    <>
      <Header heading={"Session 2020-21"} />
      <SchoolCalender />
    </>
  );
}
