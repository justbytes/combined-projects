import "./style/App.css";

// Components
import PasswordGenerator from "./components/PasswordGenerator";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <PasswordGenerator />
    </div>
  );
}

export default App;
