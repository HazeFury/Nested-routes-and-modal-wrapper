import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/Navbar";
import Item0 from "./components/Items/Item0";
import Item1 from "./components/Items/Item1";
import Item2 from "./components/Items/Item2";
import Item3 from "./components/Items/Item3";
import Item4 from "./components/Items/Item4";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Item0 />} />
          <Route path="first-item" element={<Item1 />} />
          <Route path="second-item" element={<Item2 />} />
          <Route path="third-item" element={<Item3 />} />
          <Route path="fourth-item" element={<Item4 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
