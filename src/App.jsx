import { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import moviesData from './data'
import Moveis from "./components/Moveis";
import WatchList from "./components/WatchList";

function App() {
  const [movies, setMovies] = useState(moviesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [showWatchlist, setshowWatchlist] = useState(false);

  const showMovies = movies.filter(movie => movie.title.toLocaleLowerCase().trim().includes(searchQuery.toLocaleLowerCase().trim()));
  const watchlist = movies.filter(movie => movie.inWatchlist == true);

  function handelWatchlist(id){
    setMovies((movies) => 
      movies.map(movie => movie.id === id ? {...movie, inWatchlist: !movie.inWatchlist} : movie

      ))
  }
  return (
  <>
  <Header watchlistLength={watchlist.length} onChangeShow={setshowWatchlist}/>
  {showWatchlist && <WatchList watchlist={watchlist} handelWatchlist={handelWatchlist}/> }
  <Search searchQuery={searchQuery} onSearchChang={setSearchQuery}/>
  <Moveis movies={showMovies} handelWatchlist={handelWatchlist}/>
  </>
  )
}

export default App
