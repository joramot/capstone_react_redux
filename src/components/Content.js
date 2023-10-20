import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import X from '../images/x-mark.png';
import '../App.css';

const Content = () => {
  const { data, id } = useSelector((store) => store.home);

  return (
    <div>
      <div className="cross-container">
        <Link to="/" className="cross-icon">
          <img src={X} alt="cross" />
        </Link>
      </div>
      <div className="details-container">
        <h1>{data[id].symbol}</h1>
        <h2>{data[id].name}</h2>
        <h3>
          Price:
          {' '}
          {data[id].price}
        </h3>
        <h3>
          Day Low:
          {' '}
          {data[id].dayLow}
        </h3>
        <h3>
          Day High:
          {' '}
          {data[id].dayHigh}
        </h3>
      </div>
    </div>
  );
};

export default Content;
