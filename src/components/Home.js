import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, getId, setSearch } from '../redux/home/homeSlice';
import fmpLogo from '../images/fmp_logo.webp';
import '../App.css';

const Home = () => {
  const {
    isLoading, error, data,
  } = useSelector((state) => state.home);
  const { search } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(setSearch(''));
  }, [dispatch]);

  const handleGetId = (id) => {
    dispatch(getId(id));
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div>
      <div className="principalHeader">
        <img src={fmpLogo} alt="Financial Modeling Prep" />
        <h1>FMP Financial Modeling Prep</h1>
      </div>
      <h2> Stock Prices List</h2>
      <div>
        <input type="text" onChange={(e) => handleSearch(e)} />
      </div>
      {isLoading && <p className="">Loading...</p>}
      {error && <p className="">{error}</p>}
      <div className="">
        {data && data.filter((stock) => (search.toLowerCase() === '' ? stock : stock.symbol.toLowerCase().includes(search))).map((item) => (
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
