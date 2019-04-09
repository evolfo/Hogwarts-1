import React from 'react';

const Search = props => {
	return (
	  <div className="search">
	  	<input onChange={props.handleSearchChange} value={props.searchTerm} placeholder="Search by name/house" name="searchTerm" />
	  </div>
	)
}

export default Search