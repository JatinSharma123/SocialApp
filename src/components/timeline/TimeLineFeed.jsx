import { Posts } from "../../dummyData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  getAllTimeLinePosts,
} from "../../redux/Features/postSlice";
import Share from "../share/Share";
import Post from "../post/Post";

export default function TimeLineFeed() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { posts, timeLinePosts } = useSelector((state) => state.posts);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getAllTimeLinePosts({ user }));

    return () => {
      setLoading(false);
    };
  }, [loading, dispatch, user]);
  console.log(timeLinePosts);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {timeLinePosts &&
          timeLinePosts?.length > 0 &&
          timeLinePosts?.map((p, index) => <Post key={p._id} post={p} />)}
      </div>
    </div>
  );
}
