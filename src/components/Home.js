import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, getId } from '../redux/home/homeSlice';
import fmpLogo from '../images/fmp_logo.webp';

const Home = () => {
  const {
    isLoading, error, data,
  } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleGetId = (id) => {
    dispatch(getId(id));
  };

  return (
    <div>
      <h1>FMP Financial Modeling Prep</h1>
      <img src={fmpLogo} alt="Financial Modeling Prep" />
      <h2> Stock Prices</h2>
      {isLoading && <p className="">Loading...</p>}
      {error && <p className="">{error}</p>}
      <div className="">
        {data
        && data.map((item) => (
          <div key={item.id}>
            <Link className="" to="content" onClick={() => handleGetId(item.id)}>
              <img alt="right arrow" />
            </Link>
            <p>{item.symbol}</p>
            <p>
              Price:&nbsp;
              {item.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
