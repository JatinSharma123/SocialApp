import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers, getUserById } from "../../redux/Features/authSlice";

export default function Rightbar({ profile }) {
  const dispatch = useDispatch();
  const { user, getUser } = useSelector((state) => state.auth);

  useEffect(() => {
    const id = user?.user?._id;
    dispatch(getUserById({ id }));
  }, [dispatch]);
  console.log(getUser);

  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">My Friends</h4>
        <ul className="rightbarFriendList">
          {getUser?.user?.followings?.map((u) => {
            return <Online key={u._id} user={u} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {user && user?.user
            ? user?.user?.followers.map((u) => {
                <div className="rightbarFollowing">
                  <img
                    src="assets/person/1.jpeg"
                    alt=""
                    className="rightbarFollowingImg"
                  />
                  <span className="rightbarFollowingName">{u?.name}</span>
                </div>;
              })
            : "You Have No Friends"}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
