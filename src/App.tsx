import { Navbar } from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
