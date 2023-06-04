import "./online.css";
import logo from "./1.jpeg";
export default function Online({ user }) {
  console.log(user);
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={user.profilePicture || logo}
          alt=""
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
