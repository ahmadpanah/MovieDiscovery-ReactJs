import React , {useEffect , useState} from "react";
import Movie from "./components/Movie";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=db68f50c83657f5ef29885bef9520b12&language=en-US&sort_by=popularity.desc&page=1"
const IMG_API = "https://image.tmdb.org/t/p/w1200"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=db68f50c83657f5ef29885bef9520b12&language=en-US&page=1"

function App() {
  const [ movies , setMovies ] = useState ([]);

  useEffect(() => {
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then ((data) => {
      console.log(data);
      setMovies(data.results);
    })
  }, [])

  return <div>
    {movies.length > 0 && movies.map((movie) => (
      <Movie key={movie.id} {...movie} />
    ))}
    </div>
}

export default App;
