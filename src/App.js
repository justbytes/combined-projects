import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/App.css";

//Import Bootstrap Navbar
import { BootstrapNavbar } from "./components/Navbar";
//Import Pages
import { PasswordGenerator } from "./components/pages/PasswordGenerator";
import { HomePage } from "./components/pages/HomePage";
import { WorkDayScheduler } from "./components/pages/WorkDayScheduler";
import { WeatherForecast } from "./components/pages/WeatherForecast";
import { CodingQuiz } from "./components/pages/CodingQuiz";

function App() {
  return (
    <Router>
      <BootstrapNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/passwordGenerator" element={<PasswordGenerator />} />
        <Route path="/workDayScheduler" element={<WorkDayScheduler />} />
        <Route path="/weatherForecast" element={<WeatherForecast />} />
        <Route path="/codingQuiz" element={<CodingQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;
