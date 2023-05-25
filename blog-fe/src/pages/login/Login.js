import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label for="">Email</label>
        <input
          type="email"
          name=""
          className="loginInput"
          placeholder="Enter your email..."
        />
        <label for="">Password</label>
        <input
          type="password"
          className="loginInput"
          name=""
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
    </div>
  );
}
