import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contactUs">Contact us</Link>
      </div>
    </nav>
  );
};
