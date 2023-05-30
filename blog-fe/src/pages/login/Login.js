import "./login.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import axiosApi from '../../config/axios';
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axiosApi.post('http://localhost:5000/api/auth/login',{
        email: userRef.current.value,
        password: passwordRef.current.value
      })
      dispatch({ type: "LOGIN_SUCCESS",payload: res.data });
    } catch (err) {dispatch({ type: "LOGIN_FAILURE" });}
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="">Email</label>
        <input
          type="email"
          name=""
          className="loginInput"
          placeholder="Enter your email..."
          ref={userRef}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          className="loginInput"
          name=""
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" disabled={isFetching}>Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
