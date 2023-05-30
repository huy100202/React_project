import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./singlePost.css";
import axiosApi from "../../config/axios";

export default function SinglePost() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      const res = await axiosApi.get(
        "http://localhost:5000/api/post/" + postId
      );
      setPost(res.data);
      console.log(res.data);
    };
    getPost();
  }, [postId]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={post.photo} alt="" className="singlePostImg" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.author && post.author._id}`} className="link">
              <b> {post.author && post.author.full_name}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
