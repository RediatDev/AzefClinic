import { Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import Jobs from "./Pages/Jobs/Jobs";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import ScrollManager from "./ScrollManager";
import About from "./Pages/About/About";
import MainServices from "./Pages/MainServices/MainServices";

function App() {
  return (
    <div className="app">
      <Header />

      {/* Handles hash + route scrolling */}
      <ScrollManager />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<MainServices/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
