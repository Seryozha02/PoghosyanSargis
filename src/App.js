import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home.jsx";
import NotFoundPage from "./pages/NotFoundPage";
import About from "./pages/About";
import OnePointTwo from "./pages/OnePointTwo";
import OnePointOne from "./pages/OnePointOne";
import TwoPointOne from "./pages/TwoPointOne";
import TwoPointTwo from "./pages/TwoPointTwo";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/PoghosyanSargis" element={<Home />} />
        <Route path="onePointOne" element={<OnePointOne />} />
        <Route path="onePointTwo" element={<OnePointTwo />} />
        <Route path="twoPointOne" element={<TwoPointOne />} />
        <Route path="twoPointTwo" element={<TwoPointTwo />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
