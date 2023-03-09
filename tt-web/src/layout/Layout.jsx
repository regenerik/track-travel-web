import React from "react";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
export default function Layout({children}) {
  return (
    <>
      <>
        <NavBar />
      </>
      <main>{children}</main>
      <>
        <Footer />
      </>
    </>
  );
}