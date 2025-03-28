import Header from "@/app/Componenets/Header";
import TransferCertifcates from "@/app/OnePageComponent/TransferCertificates";
import React from "react";

export default function page() {
  return (
    <>
      <Header heading={"Transfer Certificates"} />
      <TransferCertifcates />
    </>
  );
}
