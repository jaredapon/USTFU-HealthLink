import { useState } from "react";
import "../css/Sidebar.css";

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
          <div className="profile-section">
            <div className="profile-image">
              <img src="https://via.placeholder.com/50" alt="Profile" />
            </div>
            <div className="profile-name">
              <p>Jeon Jungkook</p>
              <small>Member</small>
            </div>
          </div>


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
