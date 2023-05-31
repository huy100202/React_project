import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./singlePost.css";
import axiosApi from "../../config/axios";
import { Context } from "../../context/Context";

export default function SinglePost() {
  
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const { user } = useContext(Context);
  useEffect(() => {
    const getPost = async () => {
      const res = await axiosApi.get(
        "http://localhost:5000/api/post/" + postId
      );
      setPost(res.data);
    };
    getPost();
  }, [postId]);
  const handleDelete = async () => {
    try {
      await axiosApi.delete("http://localhost:5000/api/post/" + postId,{userId: user._id});
      navigate('/');
    } catch (e) {}
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          {(post.author._id && post.author._id === user?._id) && (
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
              <i
                className="singlePostIcon fa-solid fa-trash-can"
                onClick={handleDelete}
              ></i>
            </div>
          )}
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link
              to={`/?user=${post.author && post.author._id}`}
              className="link"
            >
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
