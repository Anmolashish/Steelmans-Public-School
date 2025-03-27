import Header from "@/app/Componenets/Header";
import Session2019 from "@/app/OnePageComponent/Session2019";
import React from "react";

export default function page() {
  return (
    <>
      <Header heading={"Session 2019-20"} />
      <Session2019 />
    </>
  );
}
