import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Componenets/Navbar";
import Footer from "./Componenets/Footer";
import { SchoolData } from "./Data/SchoolData";
import Loader from "./Componenets/Loader";
import Sidebar from "./Componenets/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Loader />
        <Navbar />
        <Sidebar />
        <SchoolData>{children}</SchoolData>
        <Footer />
      </body>
    </html>
  );
}
