import MovieItem from "./MovieItem";

export default function Moveis({ movies, handelWatchlist }) {
  // console.log(movies);
  return (
    <div className="movies-grid">
      {!movies.length && <p>No Movies</p>}
      {movies.map(movieItem => <MovieItem handelWatchlist={handelWatchlist} key={movieItem.id} movie={movieItem} />)}
    </div>
  )
}
