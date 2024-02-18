import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Navbar } from "./pages/Navbar";
import { ContactUs } from "./pages/ContactUs";
import ThemeContextUse from "./pages/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextUse>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contactUs" element={<ContactUs />} />
          </Routes>
        </BrowserRouter>
      </ThemeContextUse>
    </div>
  );
}

export default App;
