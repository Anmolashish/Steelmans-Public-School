import MessagesPage1 from "@/app/AcadamicsComponents/MessagesPage1";
import Header from "@/app/Componenets/Header";
import React from "react";

export default function page({ params }) {
  return (
    <>
      <MessagesPage1 slug={params.slug} />
    </>
  );
}
