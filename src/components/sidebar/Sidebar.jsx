import "./sidebar.css";

import { SlFeed } from "react-icons/sl";
import { AiFillWechat } from "react-icons/ai";
import { GrGroup } from "react-icons/gr";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/Features/authSlice";
import { logo } from "./1.jpeg";
import { Link } from "react-router-dom";
export default function Sidebar() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <SlFeed className="sidebarIcon" />
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <span className="sidebarListItemText">Homepage</span>
            </Link>
          </li>
          <li className="sidebarListItem">
            <AiFillWechat className="sidebarIcon" />
            <Link
              to="/timeline"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span className="sidebarListItemText">Timeline</span>
            </Link>
          </li>

          <li className="sidebarListItem">
            <GrGroup className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>

          {/* <li className="sidebarListItem">
            {/* <HelpOutline className="sidebarIcon" /> */}

          <li className="sidebarListItem">
            <MdOutlineEmojiEvents className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <h3>All Users</h3>
          <hr className="sidebarHr" />
          {users &&
            users?.length > 0 &&
            users?.map((u) => <CloseFriend key={u._id} users={u} />)}
        </ul>
      </div>
    </div>
  );
}
