import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content" element={<Content />} />
        <Route path="*" errorElement={<div> Page not foudnd</div>} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
