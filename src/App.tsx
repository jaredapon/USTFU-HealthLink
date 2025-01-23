import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ServiceCards from "./components/ServiceCards";
import InpatientForm from "./components/InpatientForm";
import AdmissionForm from "./components/AdmissionForm";
import OutpatientForm from "./components/OutpatientForm";
import EyeglassesForm from "./components/EyeglassesForm";

import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="BaseContainer">
        <Header />
        <Sidebar />
        <div className="AppContainer">
          <div className="MainContent">
            <Routes>
              <Route path="/" element={
                <div className="WelcomeSection">
                  <h2>Welcome to USTFU HealthLink</h2>
                  <p>Choose your service application below</p>
                  <ServiceCards />
                </div>
              } />
              <Route path="/inpatient" element={<InpatientForm />} />
              <Route path="/admission" element={<AdmissionForm />} />
              <Route path="/outpatient" element={<OutpatientForm />} />
              <Route path="/eyeglasses" element={<EyeglassesForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
