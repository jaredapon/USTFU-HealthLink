import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ServiceCards from "./components/ServiceCards";
import "./App.css";
import Profile from "./components/Profile";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className="BaseContainer">
      <Header />
      <Profile />
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
