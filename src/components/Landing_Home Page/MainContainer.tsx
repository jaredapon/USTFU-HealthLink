import "./MainContainer.css";
import { Routes, Route } from "react-router-dom";
import ServiceCards from "./ServiceCards";

const MainContainer = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <div className={`MainContainer ${isSidebarOpen ? "with-sidebar" : "full-width"}`}>
      <Routes>
        <Route path="/" element={<ServiceCards />} />
        <Route path="/hospitalization-application" element={<div>Hospitalization Application</div>} />
        <Route path="/tracking" element={<div>Hospitalization Tracking</div>} />
        <Route path="/faq" element={<div>FAQ</div>} />
        <Route path="/settings" element={<div>Settings</div>} />
        <Route path="/logout" element={<div>Logout</div>} />
      </Routes>
    </div>
  );
};

export default MainContainer;
