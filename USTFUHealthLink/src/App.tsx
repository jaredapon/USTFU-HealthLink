import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ServiceCards from "./components/ServiceCards";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="BaseContainer">
      <Header />
      <Sidebar />
      <div className="AppContainer">
        <div className="MainContent">
          <div className="WelcomeSection">
            <h2>Welcome to USTFU HealthLink</h2>
            <p>Choose your service application below</p>
          </div>
          <ServiceCards />
        </div>
      </div>
    </div>
  );
};

export default App;
