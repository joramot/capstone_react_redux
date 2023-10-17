import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, getId } from '../redux/home/homeSlice';

const Home = () => {
  console.log(fetchData.data);
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
    <>
      {isLoading && <p className="">Loading...</p>}
      {error && <p className="">{error}</p>}
      <div className="">
        {data
        && data.map((item) => (
          <div key={item.id}>
            <Link className="" to="details" onClick={() => handleGetId(item.id)}>
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
    </>
  );
};

export default Home;
