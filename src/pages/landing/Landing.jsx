import { Link, useNavigate } from "react-router-dom";
import "./landing.scss";
import background from "../../img/background.jpg";
import logo from "../../img/logo.png";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Landing = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

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
