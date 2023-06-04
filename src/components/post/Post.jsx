import "./post.css";
// import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";
import { format } from "timeago.js";
import logo from "./1.jpeg";
import licon from "./heart.png";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../redux/Features/authSlice";
export default function Post({ post }) {
  const [like, setLike] = useState(post?.likes?.length);
  const [isLiked, setIsLiked] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    const postId = post._id;
    const userId = user.user._id;
    dispatch(likePost({ postId, userId }));
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={post?.user?.profilePicture || logo}
              alt=""
            />
            <span className="postUsername">{post?.user?.username}</span>
            <span className="postDate">{format(post?.createdAt)}</span>
          </div>
          <div className="postTopRight">{/* <MoreVert /> */}</div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={post?.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={licon}
              onClick={likeHandler}
              alt="likeicon"
            />

            <span className="postLikeCounter">{like} people love it</span>
          </div>
          {/* <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
