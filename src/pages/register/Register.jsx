import "./register.scss";
import "./form.scss";
import background from "../../img/background.jpg";
import { toast } from "react-toastify";
import logo from "../../img/logo.png";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    institution: "",
    email: "",
    phoneNo: "",
    password: "",
    cPassword: "",
  });

  const { fullName, institution, email, phoneNo, password, cPassword } =
    formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        fullName,
        institution,
        email,
        phoneNo,
        password,
      };

      dispatch(register(userData));
    }
  };

  return (
    <div className="register">
      <div className="register-header">
        <Link to="/">
          <img src={logo} alt="Logo" className="register-header--logo" />
        </Link>
      </div>
      <div
        style={{
          backgroundImage: `url(${background})`,
        }}
        className="register-main"
      >
        <div className="register-main--heading">
          <h1>Register User</h1>
        </div>
        <div className="register-main--form">
          <section className="form">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="fullName"
                  name="fullName"
                  value={fullName}
                  placeholder="Enter your full name"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="institution"
                  name="institution"
                  value={institution}
                  placeholder="Enter your institution"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="phoneNo"
                  name="phoneNo"
                  value={phoneNo}
                  placeholder="Enter your phoneNo"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter password"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="cPassword"
                  name="cPassword"
                  value={cPassword}
                  placeholder="Confirm password"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-block">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Register;
