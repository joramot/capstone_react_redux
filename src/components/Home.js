import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, getId } from '../redux/home/homeSlice';

const Home = () => {
  console.log(fetchData.data);
  const {
    isPending, error, data,
  } = useSelector((state) => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleGetId = (id) => {
    dispatch(getId(id));
  };

  return (
    <>This the HOME</>
  );
};

export default Home;
