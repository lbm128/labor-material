import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div className="header">
      <div className="nav-link-container">
        <Link to="/" className="nav-link" data-text="Home">
          <span>Home</span>
        </Link>
      </div>
      <div className="nav-link-container">
        <Link to="/labor" className="nav-link" data-text="Labor">
          <span>Labor</span>
        </Link>
      </div>
      <div className="nav-link-container">
        <Link to="/material" className="nav-link" data-text="Material">
          <span>Material</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;