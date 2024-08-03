import "./SideBar.css";
import "../../assets/roots.css";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="side-bar-container">
      <div className="side-bar-info">
        <div className="side-bar-logo">
          <i className="bx bxs-invader"></i>
        </div>
        <p>http Invader</p>
      </div>
      <div className="side-bar-menu">
        <ul>
          <li className={currentPath === "/axios" ? "active" : ""}>
            <Link to="/axios">
              <img
                src="/axios-icon.svg"
                alt=""
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
              Axios
            </Link>
          </li>
          <li className={currentPath === "/fetch" ? "active" : ""}>
            <Link to="/fetch">
              <i
                class="bx bxl-javascript"
                style={{ fontSize: "1.5rem", color: "yellow" }}
              ></i>
              Fetch
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
