import React from "react";
import Header from "../Componenets/Header";
import ContactPage from "../OnePageComponent/ContactPage";

export default function page() {
  return (
    <>
      <Header heading={"Contact us"} />
      <ContactPage />
    </>
  );
}
