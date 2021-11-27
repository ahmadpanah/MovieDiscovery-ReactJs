import React , {useEffect , useState} from "react";
import Movie from "./components/Movie";

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?api_key=db68f50c83657f5ef29885bef9520b12&language=en-US&sort_by=popularity.desc&page=2"
const IMG_API = "https://image.tmdb.org/t/p/w1200"
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=db68f50c83657f5ef29885bef9520b12&query="

function App() {
  const [ movies , setMovies ] = useState ([]);
  const [ searchTerm , setSearchTerm] = useState('');

  useEffect(() => {
    fetch(FEATURED_API)
    .then((res) => res.json())
    .then ((data) => {
    
      setMovies(data.results);
    })
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_API + searchTerm)
    .then((res) => res.json())
    .then ((data) => {
    
      setMovies(data.results);
    })
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
  <><header>
    <form onSubmit={handleOnSubmit}>
    <input
        className="search"
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleOnChange}
      />
    </form>
    </header>
    <div className="movie-container">
        {movies.length > 0 && movies.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div></>
    )
}

export default App;
