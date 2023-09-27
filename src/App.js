/* eslint-disable import/no-extraneous-dependencies */
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Calculator from './components/Calc';
import Quote from './components/Quote';
import Error404 from './components/Error';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

    </>
  );
}

export default App;
