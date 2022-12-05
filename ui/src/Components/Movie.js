import '../App.css';
import { Link, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import Context from './Context';

const Movie = () => {
  const [result, setResult] = useState('');
  const { current } = useContext(Context);

  useEffect(() => {
    fetch('http://localhost:3001')
      .then((res) => res.json())
      .then((res) => setResult(res))
        .catch((err) => console.log(err))
  }, []);

  return (
    <div className="Movie">
      <Link to={`/`}><button>&lt; Go Home</button></Link><br/>
      {current.title}
      <br/>Movie Info from <a href="https://www.themoviedb.org/" title="The Movie Database (TMDB)" target="_blank" rel="noreferrer"><img className="apiCredit" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="https://www.themoviedb.org/"/></a>
    </div>
  )
}

export default Movie;