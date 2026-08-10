export default function WatchlistItem({watchItem, handelWatchlist}) {
    return (
        <div className="watchlist-item">
            <div className="watchlist-item-info">
                <img src={watchItem.posterUrl} alt={watchItem.title} />
                <h3>{watchItem.title}</h3>
            </div>
            <button className="remove-btn" onClick={() => handelWatchlist(watchItem.id)}>Remove</button>
        </div>
    )
}
