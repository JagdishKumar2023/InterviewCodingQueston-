import "./App.css";
// import { InterviewCoding } from "./components/InterviewCoding";
// import InterviewFirstCode from "./components/InterviewFirstCode";
// import { RadioButton } from "./components/RadioButton";
// import { InterviewDropDown } from "./components/IntervieDropDown";
// import { InterviewRound } from "./components/InterviewRound";
// import { PostComponent } from "./components/PostComponent";
// import { PostApi } from "./components/PostApi";
import { DarkModeTheme } from "./components/DarkModeTheme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <DarkModeTheme />
    </div>
  );
}

export default App;
