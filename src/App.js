import "./App.css";
import { Suffling } from "./components/Suffling";

function App() {
  return (
    <div className="App">
      <Suffling />
    </div>
  );
}

export default App;

// React Router in this file

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { About } from "./pages/About";
// import { Blog } from "./pages/Blog";
// import { Navbar } from "./pages/Navbar";
// import { ContactUs } from "./pages/ContactUs";
// import ThemeContext from "./pages/ThemeContextUse";

/* <ThemeContext>
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contactUs" element={<ContactUs />} />
  </Routes>
</BrowserRouter>
</ThemeContext> */
