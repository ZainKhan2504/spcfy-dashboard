import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DraftsIcon from "@mui/icons-material/Drafts";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <hr />
      <div className="center">
        <ul>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <li>
            <DraftsIcon className="icon" />
            <span>Drafts</span>
          </li>
          <p className="title">Workspace</p>
          <li>
            <DataUsageIcon className="icon" />
            <span>Runs</span>
          </li>
          <li>
            <LocationCityIcon className="icon" />
            <span>Visualizations</span>
          </li>
          <li>
            <LightbulbIcon className="icon" />
            <span>Reports</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <PersonAddIcon className="icon" />
        <p>Invites colleagues</p>
      </div>
    </div>
  );
};

export default Sidebar;
