import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './App.css';
import Home from './Components/Home';
import Context from './Components/Context';
import Movie from './Components/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [current, setCurrent] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((res) => res.json())
      .then((res) => setMovies(res))
        .catch((err) => console.log(err))
  }, []);

  movies.length && console.log(movies);

  return (
    <div className="App">
      <Context.Provider value={{movies, setMovies, filtered, setFiltered, current, setCurrent}}>
        <Router>
          <Routes>
            <Route path="/" element ={<Home/>}/>
            <Route path="/:mov" element ={<Movie/>}/>
          </Routes>
        </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
