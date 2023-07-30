const Search = ({ searchText,setSearchText }) => {
  return <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
}

export default Search
