import React from "react";
import PropTypes from 'prop-types';
import "./SearchResults.css";

class SearchResults extends React.Component {

  render () {
    const { results } = this.props

    return (
    <div className="results"> 
      <ul className="list-group search-results">
        {results.map(result =>
          <li key={result} className="list-group-item">
                {result}  
          </li>
        )}
      </ul>
    </div>
    );
  }
}

SearchResults.props = {
  results: PropTypes.array
}

export default SearchResults;
