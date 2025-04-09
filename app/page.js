import Image from "next/image";
import Navbar from "./Componenets/Navbar";
import HomePage1 from "./HomeComponents/HomePage1";
import HomePage2 from "./HomeComponents/HomePage2";
import HomePage3 from "./HomeComponents/HomePage3";
import HomePage4 from "./HomeComponents/HomePage4";
import HomePage5 from "./HomeComponents/HomePage5";
import Footer from "./Componenets/Footer";

export default function Home() {
  return (
    <>
      <HomePage1 />
      <HomePage2 />
      {/* <HomePage3 /> */}
      <HomePage4 />
      <HomePage5 />
    </>
  );
}
