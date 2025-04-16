import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/SideBar";
import Introduction from "./components/Introduction";
import CurrentRole from "./components/CurrentRole";
import Projects from "./components/Projects";
import Traveller from "./components/Traveller";
import Spotify from "./components/Spotify";

function App() {
  return (
    <Router>
      <div className="w-full py-30 flex">
        <SideBar />
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex flex-col w-3/5 pr-30">
                <Introduction />
                <CurrentRole />
                <Projects />
              </div>
            }
          />
          <Route path="/traveller" element={<Traveller />}></Route>
          <Route path="/spotify" element={<Spotify />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
