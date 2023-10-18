import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Content = () => {
  const { data, id } = useSelector((store) => store.home);

  return (
    <div>
      <div className="">
        <Link to="/" className="">
          <img alt="cross" />
        </Link>
      </div>
      <div className="">
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
