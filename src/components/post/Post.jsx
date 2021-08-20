import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="#"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        praesentium tempore error, rem nesciunt odit ut dignissimos iure
        adipisci, deserunt, provident unde quod eum quaerat esse! Quidem, velit.
        Dignissimos, modi!Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Excepturi praesentium tempore error, rem nesciunt odit ut
        dignissimos iure adipisci, deserunt, provident unde quod eum quaerat
        esse! Quidem, velit. Dignissimos, modi!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Excepturi praesentium tempore error, rem
        nesciunt odit ut dignissimos iure adipisci, deserunt, provident unde
        quod eum quaerat esse! Quidem, velit. Dignissimos, modi!
      </p>
    </div>
  );
}
