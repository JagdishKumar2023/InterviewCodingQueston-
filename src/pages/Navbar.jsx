import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Blog">Blog</Link>
      </div>
    </nav>
  );
};
