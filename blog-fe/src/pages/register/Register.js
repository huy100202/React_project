import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label for="">Username</label>
        <input
          type="text"
          name=""
          className="registerInput"
          placeholder="Enter your username..."
        />
        <label for="">Email</label>
        <input
          type="email"
          name=""
          className="registerInput"
          placeholder="Enter your email..."
        />
        <label for="">Password</label>
        <input
          type="password"
          className="registerInput"
          name=""
          placeholder="Enter your password..."
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
    </div>
  );
}
