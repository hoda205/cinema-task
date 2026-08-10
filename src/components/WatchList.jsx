import WatchlistItem from "./WatchlistItem";

export default function WatchList({watchlist, handelWatchlist}) {
  return (
    <div className="watchlist-panel">
        {!watchlist.length && <p>no movie in watchlist</p>}
      {watchlist.map(item => <WatchlistItem key={item.id} watchItem={item} handelWatchlist={handelWatchlist}/>)}
    </div>
  )
}
