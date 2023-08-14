import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Home = () => {
  const reduxLaborTotal = useSelector(store => {
    return store.laborTotal;
  });
  const reduxMaterialTotal = useSelector(store => {
    return store.materialTotal;
  });

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
      <p>Labor Total: ${reduxLaborTotal}, Material Total: {reduxMaterialTotal} gallons</p>
    </div>
  );
};

export default Home;
