
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieList from './Components/MovieList';
import Favorites from './Components/Favorites';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MovieList />}></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
