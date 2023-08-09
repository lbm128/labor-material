import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="nav-link-container">
        <Link to="/labor" className="nav-link" data-text="Home">
          <span>Labor</span>
        </Link>
      </div>
      <div className="nav-link-container">
        <Link to="/material" className="nav-link" data-text="Home">
          <span>Material</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
