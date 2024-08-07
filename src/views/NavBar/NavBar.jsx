import { Link } from "react-router-dom";
import "./NavBar.css";
import "../../assets/roots.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav className="nav-bar-menu">
        <ul className="nav-bar-list">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <a href="https://github.com/devnotmax" target="_blank">
              Contact
            </a>
          </li>
          <li>
            {/* <a href="#">Docs</a> */}
          </li>
          <li>
            {/* <a href="#">Blog</a> */}
          </li>
        </ul>
        <div className="socials-menu">
          <a href="https://github.com/devnotmax" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
          <a href="#">
            <i class="bx bxl-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/machifrias/" target="_blank">
            <i class="bx bxl-linkedin-square" undefined></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
