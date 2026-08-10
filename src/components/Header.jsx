export default function Header({watchlistLength, onChangeShow}) {
  return (
    <header className="navbar">
    <h1 className="navbar-brand">
        FAST CINEMA
    </h1>
    <button onClick={() => onChangeShow(value => !value)} className="watchlist-btn">Watchlist ({watchlistLength})</button>
    </header>
  )
}
