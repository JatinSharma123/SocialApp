import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  followUser,
  getUserById,
  unFollowUser,
} from "../../redux/Features/authSlice";
import Share from "../../components/share/Share";
import Post from "../../components/post/Post";

export default function Profile() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let [follow, setFollow] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const { getUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserById({ id }));

    getUser?.user?.followers.map((item) => {
      item?.followers?.map((i) => {
        if (i === id) {
          console.log(i);
          setFollow(false);
        }
      });
    });
  }, [dispatch, id, user._id]);

  const followHandler = () => {
    const userId = user.user._id;
    dispatch(followUser({ id, userId }));
  };
  const unFollowHandler = () => {
    const userId = user.user._id;
    dispatch(unFollowUser({ id, userId }));
  };

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={getUser?.user?.coverPicture}
                alt="coverpic"
              />
              <img
                className="profileUserImg"
                src={getUser?.user?.profilePicture}
                alt="profilepic"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{getUser?.user?.username}</h4>
              {id !== user?.user?._id ? (
                follow ? (
                  <span
                    className="profileInfoDesc btn"
                    onClick={() => {
                      followHandler();
                      setFollow(false);
                    }}
                  >
                    Follow
                  </span>
                ) : (
                  <span
                    className="profileInfoDesc btn"
                    onClick={() => {
                      unFollowHandler();
                      setFollow(true);
                    }}
                  >
                    UnFollow
                  </span>
                )
              ) : (
                ""
              )}

              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <div className="feed">
              <div className="feedWrapper">
                <Share />

                {getUser?.posts ? (
                  getUser?.posts?.length > 0 &&
                  getUser?.posts?.map((p) => <Post key={p._id} post={p} />)
                ) : (
                  <div style={{ marginTop: "30px" }}>
                    <h3> You Hava Not Posted Any Photo till now</h3>
                  </div>
                )}
              </div>
            </div>
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
