import Header from "@/app/Componenets/Header";
import BookList from "@/app/OnePageComponent/BookList";
import React from "react";

export default function page() {
  return (
    <>
      <Header heading={"Book list"} />
      <BookList />
    </>
  );
}
