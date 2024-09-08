import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import DownloadPage from "./DownloadPage";

function Main() {
  return (
    <>
      <div className="bg-black">
        <Header />
        <MainSection />
        <DownloadPage/>
      </div>
    </>
  );
}

export default Main;
