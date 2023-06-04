import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../../redux/Features/postSlice";

export default function Feed() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { posts, post } = useSelector((state) => state.posts);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getAllPosts({ user }));

    return () => {
      setLoading(false);
    };
  }, [loading, dispatch, user, post]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts &&
          posts?.length > 0 &&
          posts?.map((p) => <Post key={p._id} post={p} />)}
      </div>
    </div>
  );
}
