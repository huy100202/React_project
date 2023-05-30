import "./post.css";
import { Link } from "react-router-dom";
export default function Post({ post }) {
  const PF = "localhost:5000/images";
  return (
    <div className="post">
      <div className="postItem">
        {post.photo && (
          <img
            src={PF + post.photo}
            alt=""
          />
        )}
        <div className="postInfo">
          <div className="postCats">
            {post.categories.map((c) => (
              <span className="postCat">{c.name}</span>
            ))}
          </div>
          <Link to={`/post/${post._id}`}>
            <span className="postTitle">{post.title}</span>
          </Link>
          <span className="postDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  );
}
