import "./share.css";
// import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import { MdPermMedia, MdOutlineRoom, MdLabelImportant } from "react-icons/md";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../redux/Features/postSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function Share() {
  const [desc, setDesc] = useState("");
  const [images, setImages] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  function showWidget() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dcdr59rmx",
        uploadPreset: "social2k23",
      },
      (error, result) => {
        if (!error && result.event === "success") {
          setImages(result.info.url);
        }
      }
    );
    widget.open();
  }
  const handleSubmit = () => {
    const formValue = { img: images, desc, user: user.user._id };
    setImages("");
    setDesc("");
    dispatch(createPost({ formValue, navigate, toast }));
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={user?.user?.profilePicture}
            alt=""
          />
          <input
            placeholder={`What's in your mind ${user?.user?.username}?`}
            className="shareInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <div>
                {images && <img src={images} width="133px" alt={"logo"} />}
              </div>
              <MdPermMedia className="shareIcon" />
              <span onClick={showWidget} className="shareOptionText">
                Photo or Video
              </span>
            </div>
            <div className="shareOption">
              <MdLabelImportant className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <MdOutlineRoom className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <BsFillEmojiLaughingFill className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>

          <button
            onClick={() => {
              handleSubmit();
            }}
            className="shareButton"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
