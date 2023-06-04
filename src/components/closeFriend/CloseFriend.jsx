import "./closeFriend.css";
import logo from "./1.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function CloseFriend({ users }) {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (user?.user?._id === users?._id) {
    return "";
  }

  return (
    <li className="sidebarFriend">
      <Link
        to={`/profile/${users._id}`}
        style={{
          textDecoration: "none",
          color: "black",
          fontSize: "1.3rem",
        }}
      >
        <img
          className="sidebarFriendImg"
          src={users.profilePicture || logo}
          alt="logo"
        />

        <span
          className="sidebarFriendName"
          style={{ position: "relative", top: "-10px" }}
        >
          {users.username}
        </span>
      </Link>
    </li>
  );
}
