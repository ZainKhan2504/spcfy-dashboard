import "./navbar.scss";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <img src={logo} alt="Logo" />
          <Link to="" className="run">
            <CreateNewFolderIcon style={{ color: "yellow" }} />
            <p>create run</p>
          </Link>
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            EN
          </div>
          <div className="item">
            <HelpOutlineIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <p>{user.email}</p>
          </div>
          <div className="item">
            <KeyboardArrowDownIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
