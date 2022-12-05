import '../App.css';
import {useState, useContext} from 'react';
import { Link } from "react-router-dom";
import Context from './Context';

const Search = () => {
  const { movies, setCurrent } = useContext(Context);
  const [query, setQuery] = useState('');

  return (
    <div className="Search">
      <div className="SearchBar">
        <input className="SearchInput"
          type="text"
          placeholder="Search for a Movie Here..."
          onChange={(e) => {
            e.target.value = e.target.value.trim();
            setQuery(e.target.value);}}/>
      </div>
      <div className="Results" key="results">
        {(movies.filter(e => e.title.toLowerCase().includes(query.toLowerCase()))).map( f =>
          <div key={f.title}>
          <Link to={`/${f.title}`} onClick={() => setCurrent(f)}>{f.title}</Link><br/>
          </div>
        )}
      </div>
    </div>
  )
}

export default Search;