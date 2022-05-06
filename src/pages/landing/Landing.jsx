import { Link } from "react-router-dom";
import "./landing.scss";
import background from "../../img/background.jpg";
import logo from "../../img/logo.png";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-header">
        <Link to="/">
          <img src={logo} alt="Logo" className="landing-header--logo" />
        </Link>
      </div>
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="landing-main"
      >
        <div className="landing-main--heading">
          <h1>SPCFY Dashboard</h1>
        </div>
        <div className="landing-main--button">
          <Link to="/register">
            <button>Register User</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
