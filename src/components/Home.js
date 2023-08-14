import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const Home = () => {
  const reduxLaborTotal = useSelector(store => {
    return store.laborTotal;
  });
  const reduxMaterialTotal = useSelector(store => {
    return store.materialTotal;
  });
  const laborHistory = useSelector(store => {
    return store.laborHistory;
  });
  const materialHistory = useSelector(store => {
    return store.materialHistory;
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
      {/* <p>Labor Total: ${reduxLaborTotal}, Material Total: {reduxMaterialTotal} gallons</p> */}
      <div className='history-chart'>
        <div>
          <p><b>Labor History</b></p>
          {laborHistory.map((entry, i) => <p key={i}>${entry}</p>)}
        </div>
        <div>
          <p><b>Material History</b></p>
          {materialHistory.map((entry, i) => <p key={i}>{entry} gallons</p>)}
        </div>
      </div>
    </div>
  );
};

export default Home;
