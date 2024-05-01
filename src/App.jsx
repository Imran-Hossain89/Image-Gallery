import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import First from "./Components/Layout/First";
import Second from "./Components/Layout/Second";
import Third from "./Components/Layout/Third";
import Home from "./Components/Layout/Home";

function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/first" element={<First />} />
            <Route path="/second" element={<Second />} />
            <Route path="/third" element={<Third />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
