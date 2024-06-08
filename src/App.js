import './App.css';
import HomePage from './pages/homepage.component';

import { Route, Routes } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route exact path='/hats' element={<HatsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
