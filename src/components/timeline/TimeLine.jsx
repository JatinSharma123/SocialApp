import React from "react";
import Share from "../share/Share";
import Sidebar from "../sidebar/Sidebar";
import Rightbar from "../rightbar/Rightbar";
import Topbar from "../topbar/Topbar";
import "./TimeLine.css";
import TimeLineFeed from "./TimeLineFeed";
const TimeLine = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <TimeLineFeed />
        <Rightbar />
      </div>
    </>
  );
};

export default TimeLine;
