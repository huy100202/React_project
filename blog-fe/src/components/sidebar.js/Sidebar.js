import "./sidebar.css";
import { useState, useEffect } from "react";
import axiosApi from "../../config/axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCat] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axiosApi.get("http://localhost:5000/api/category");
      setCat(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://creativelayers.net/themes/superio/images/resource/news-4.jpg"
          alt=""
        />
        <p>
          Far much that one rank beheld bluebird after outside ignobly allegedly
          more when oh arrogantly vehement irresistibly fussy penguin insect
          additionally wow absolutely crud meretriciously hastily dalmatian a
          glowered inset one echidna cassowary some parrot and much as goodness
          some froze the sullen much connected bat wonderfully on
          instantaneously eel valiantly petted this along across highhandedly
          much.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link"><li className="sidebarListItem">{c.name}</li></Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  );
}
