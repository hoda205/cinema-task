export default function MovieItem({movie, handelWatchlist}) {
  return (
    <div className="movie-card" >
      <img src={movie.posterUrl} className="movie-poster" alt={movie.title} />
      <div className="movie-info">
        <header className="movie-header">
        <h3 className="movie-title">{movie.title}</h3>
        <span className="movie-rating">{movie.rating}</span>
        </header>
        <p className="movie-description">{movie.description}</p>
        <div className="movie-footer">
          <p className="movie-price">{movie.price}$</p>
          <p className="movie-duration">{movie.duration}</p>
        </div>
          <button className={`add-to-watchlist-btn ${movie.inWatchlist && "added"}`} onClick={() => handelWatchlist(movie.id)}>
            {!movie.inWatchlist ? "Add to watchlist" : "Remove From Watchlist"}
            </button>
      </div>
    </div>
  )
}
