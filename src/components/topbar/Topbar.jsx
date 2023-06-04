import "./topbar.css";

import { AiOutlineSearch, AiFillNotification } from "react-icons/ai";
import { BsFillPersonFill, BsFillChatSquareFill } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutHandler } from "../../redux/Features/authSlice";
import { toast } from "react-toastify";

export default function Topbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const logout = () => {
    dispatch(logoutHandler());
    toast.success("Logout Succesfully!!!!");
    navigate("/login");
  };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            {" "}
            Facesocial
          </Link>{" "}
        </span>
      </div>
      <div className="topbarCenter">
        {/* <div className="searchbar">
          <AiOutlineSearch className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div> */}
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">
            <Link
              to="/homePage"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Homepage
            </Link>{" "}
          </span>
          <span className="topbarLink">
            {" "}
            <Link
              to="/timeline"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Timeline
            </Link>{" "}
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BsFillChatSquareFill />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <AiFillNotification />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        {user ? (
          <>
            <img
              onClick={() => navigate(`/profile/${user?.user._id}`)}
              src={user?.user.profilePicture}
              alt=""
              className="topbarImg"
            />
            <AiOutlineLogout onClick={logout} className="topbarImg" />
          </>
        ) : (
          <>
            <img
              onClick={() => navigate(`/profile/${user?.user._id}`)}
              src="/assets/person/1.jpeg"
              alt=""
              className="topbarImg"
            />
          </>
        )}
      </div>
    </div>
  );
}
