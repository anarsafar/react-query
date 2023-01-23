import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <Link to="home">Home</Link>
      <Link to="categories">Categories</Link>
      <Link to="categories-query">Categories Query</Link>
    </header>
  );
};

export default Header;
