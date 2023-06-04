import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/Features/authSlice";
import "./login.css";
import { toast } from "react-toastify";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(login({ formValue, navigate, toast }));
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email"
              className="loginInput"
              name="email"
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              className="loginInput"
              name="password"
              onChange={handleChange}
            />
            <button className="loginButton" onClick={handleSubmit}>
              Log In
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
