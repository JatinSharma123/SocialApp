import { useState } from "react";
import "./register.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/Features/authSlice";
import { toast } from "react-toastify";
import { MdPermMedia } from "react-icons/md";
export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formValue, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [profileImage, setProfileImage] = useState("");
  const [coverImage, setCoverImage] = useState("");
  function showProfileWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dcdr59rmx",
        uploadPreset: "social2k23",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setProfileImage(result.info.url);
        }
      }
    );
    widget.open();
  }
  function showCoverWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dcdr59rmx",
        uploadPreset: "social2k23",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setCoverImage(result.info.url);
        }
      }
    );
    widget.open();
  }
  const handleChange = (e) => {
    setForm({ ...formValue, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(formValue, profileImage, coverImage);
    dispatch(
      register({ formValue, profileImage, coverImage, navigate, toast })
    );
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
              placeholder="Username"
              name="username"
              className="loginInput"
              onChange={handleChange}
            />
            <input
              placeholder="Email"
              name="email"
              className="loginInput"
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              name="password"
              onChange={handleChange}
              className="loginInput"
            />
            <div className="shareOption">
              <div>
                {coverImage && (
                  <img src={coverImage} width="73px" alt={"logo"} />
                )}
              </div>
              <MdPermMedia className="shareIcon" />
              <span onClick={showCoverWidget} className="shareOptionText">
                Upload Cover Photo
              </span>
            </div>
            <div className="shareOption">
              <div>
                {profileImage && (
                  <img src={profileImage} width="73px" alt={"logo"} />
                )}
              </div>
              <MdPermMedia className="shareIcon" />
              <span onClick={showProfileWidget} className="shareOptionText">
                Upload Profile Photo Photo
              </span>
            </div>
            <button onClick={handleSubmit} className="loginButton">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
