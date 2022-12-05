import '../App.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import Context from './Context';

const Movie = () => {
  const { current } = useContext(Context);

  return (
    <div className="Movie">
      <Link to={`/`}><button>&lt; Go Home</button></Link><br/>
      {current.title}
    </div>
  )
}

export default Movie;