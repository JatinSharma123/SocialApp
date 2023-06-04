import React from "react";
import Share from "../share/Share";
import Sidebar from "../sidebar/Sidebar";
import Rightbar from "../rightbar/Rightbar";
import Topbar from "../topbar/Topbar";
import "./TimeLine.css";
import HomePageFeed from "./HomePageFeed";

const HomePage = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <HomePageFeed />
        <Rightbar />
      </div>
    </>
  );
};

export default HomePage;
