import "./App.css";
import Home from "./views/Home/Home.jsx";
import SideBar from "./views/SideBar/SideBar.jsx";
import FetchPT from "./components/FetchPT/FetchPT.jsx";
import AxiosPT from "./components/AxiosPT/AxiosPT.jsx";
import { Router, Routes, Route } from "react-router-dom";
import "./assets/roots.css";

function App() {
  return (
    <>
      <div className="appContainer">
        <div className="sideBarContent">
          <SideBar />
        </div>

        <div className="appContent">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fetch" element={<FetchPT />} />
            <Route path="/axios" element={<AxiosPT />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
