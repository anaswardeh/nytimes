import React from "react";
import PropTypes from 'prop-types';
import "./SearchResults.css";
import API from "../../utils/API";
import firebase from '../config/constants';


class SearchResults extends React.Component {

saveArticle = (title, date, url, image, uid) => {
  (image === undefined) ?
  image = 'http://lakefarmbeef.co.nz/wp-content/themes/lakefarm/img/noimage.png'
  :
  API.saveArticle({title: title, date: date, url: url, image: image, uid: uid})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  };


render () {
    const { results } = this.props
    const arrayOfArticles = []
    const uid = firebase.auth().currentUser.uid


return (
<div className="results"> 
      <ul className="list-group search-results">

{results.filter((search, i) => {
      return search.multimedia[1] !== undefined

      
  }).map((search, i) => {
              // Build array of articles
              arrayOfArticles.push({
                id: search._id,
                title: search.headline.main,
                date: search.pub_date,
                url: search.web_url, 
                image: search.multimedia.length,
                uid: search.uid
              });

    return (
      
          <li key={search._id} className="list-group-item" style={ {borderWidth: "0px"} }>
                  <div className="input-group">
                    <div type="text" className="form-control" id="results-form">
        {(search.multimedia[1] === undefined) 
        ?
            <img alt="placeHolder" src='http://lakefarmbeef.co.nz/wp-content/themes/lakefarm/img/noimage.png'/>
            :
            <img alt="placeHolder" src={"https://static01.nyt.com/"+search.multimedia[1].url} />
        }
          <b><a href={search.web_url} target="_new" style={ {color: "black"} }>{search.headline.main}</a></b>
          <span> {search.pub_date.substring(0, 10)} </span>
          <br/>
          <button className="btn btn-primary" value={search._id} 
          onClick={
            () => {this.saveArticle(
            search.headline.main, 
            search.pub_date.substring(0, 10),
            search.web_url, 
            search.multimedia[1].url, 
            uid );

          }}
            >  Save Article </button>

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
  results: PropTypes.array,
  deleteArticle: PropTypes.func
}

export default SearchResults;