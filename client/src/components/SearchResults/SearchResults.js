import React from "react";
import PropTypes from 'prop-types';
import "./SearchResults.css";

class SearchResults extends React.Component {

  render () {
    const { results } = this.props
    const arrayOfArticles = []    

    return (
    <div className="results"> 
      <ul className="list-group search-results">


{results.map(function(search, i) {
              // Build array of articles
              arrayOfArticles.push({
                id: search._id,
                title: search.headline.main,
                date: search.pub_date,
                url: search.web_url,
                image: search.multimedia[1].url
              });
              return (
                <li key={search._id} className="list-group-item" style={ {borderWidth: "0px"} }>
                  <div className="input-group">
                    <div type="text" className="form-control" id="results-form">
                      <b><a href={search.web_url} target="_new" style={ {color: "black"} }>{search.headline.main}</a></b>
                      <i> {search.pub_date.substring(0, 10)}
                          <img alt="Pic" src={"https://static01.nyt.com/"+search.multimedia[1].url} />
                      </i>
                    </div>       
                  </div>
                </li>
              );
            })} 
      </ul>
    </div>
    );
  }
}

SearchResults.props = {
  results: PropTypes.array
}

export default SearchResults;
