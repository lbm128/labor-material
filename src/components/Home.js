import { Link } from "react-router-dom";
import { useContext } from "react";
import { TotalsContext } from "../App";

const Home = () => {
  const [totals, setTotals] = useContext(TotalsContext);

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
        <p>Labor Total: ${totals.laborTotal}, Material Total: {totals.materialTotal}</p>
    </div>
  );
};

export default Home;
