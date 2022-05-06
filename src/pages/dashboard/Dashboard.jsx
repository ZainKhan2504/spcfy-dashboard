import "./dashboard.scss";

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="main-container"></div>
      </div>
    </>
  );
};

export default Dashboard;
