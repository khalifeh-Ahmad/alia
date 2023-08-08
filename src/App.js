import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import HTML from "./pages/html";
import Css from "./pages/css";
import Javascript from "./pages/javascript";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/html" element={HTML} />
        <Route path="/css" element={Css} />
        <Route path="/javascript" element={Javascript} />
      </Routes>
    </div>
  );
}

export default App;
