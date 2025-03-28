import Header from "@/app/Componenets/Header";
import SchoolCalender from "@/app/OnePageComponent/SchoolCalender";
import React from "react";

export default function page() {
  return (
    <div>
      <Header heading={"Clubs"} />
      <SchoolCalender />
    </div>
  );
}
