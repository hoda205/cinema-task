export default function Search({onSearchChang, searchQuery}) {
  return (
    <div className="search-container">
      <input 
      type="text" 
      className="search-input" 
      placeholder="Search For a movies"
      value={searchQuery} 
      onChange={(e) => onSearchChang(e.target.value)}
      name="searchQuery"  />
    </div>
  )
}
