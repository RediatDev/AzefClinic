import { Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import Jobs from "./Component/Jobs/Jobs";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import ScrollManager from "./ScrollManager";

function App() {
  return (
    <div className="app">
      <Header />

      {/* Handles hash + route scrolling */}
      <ScrollManager />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
