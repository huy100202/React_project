import "./register.css";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import axiosApi from "../../config/axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [full_name, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axiosApi.post(
        "http://localhost:5000/api/auth/register",
        {
          email,
          password,
          address,
          full_name,
          phone,
        }
      );
      res.data && navigate('/login');
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label for="">Full Name</label>
        <input
          type="text"
          name=""
          className="registerInput"
          placeholder="Enter your Full Name..."
          onChange={(e) => setFullName(e.target.value)}
        />
        <label for="">Address</label>
        <input
          type="text"
          name=""
          className="registerInput"
          placeholder="Enter your address..."
          onChange={(e) => setAddress(e.target.value)}
        />
        <label for="">Phone</label>
        <input
          type="text"
          name=""
          className="registerInput"
          placeholder="Enter your phone..."
          onChange={(e) => setPhone(e.target.value)}
        />
        <label for="">Email</label>
        <input
          type="email"
          name=""
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label for="">Password</label>
        <input
          type="password"
          className="registerInput"
          name=""
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
      {error && <span className="text-danger mt-1">Something went wrong!</span>}
    </div>
  );
}
