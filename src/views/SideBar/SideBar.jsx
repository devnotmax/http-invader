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
          <li className={currentPath === "/" ? "active" : ""}>
            <Link to="/">
              Home<i className="bx bx-home-alt"></i>
            </Link>
          </li>
          <li className={currentPath === "/axios" ? "active" : ""}>
            <Link to="/axios">Axios</Link>
          </li>
          <li className={currentPath === "/fetch" ? "active" : ""}>
            <Link to="/fetch">Fetch</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
