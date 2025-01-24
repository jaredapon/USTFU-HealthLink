import { useState } from "react";
import "../css/Sidebar.css";
import "../components/Profile.tsx";
import Profile from "../components/Profile.tsx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Toggle Button */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "Hide" : "Show"}
      </button>

      {/* Sidebar Content */}
      {isOpen && (
        <div className="sidebar-content">
          {/* Profile Section */}
          <Profile />
          {/* Navigation Menu */}
          <ul className="sidebar-menu">
            <li className="active">HOSPITALIZATION APPLICATION</li>
            <li>HOSPITALIZATION TRACKING</li>
            <li>FAQ</li>
            <li>SETTINGS</li>
            <li>LOGOUT</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
