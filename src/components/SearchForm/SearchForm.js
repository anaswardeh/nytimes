import React from "react";
import PropTypes from 'prop-types';
import "./Search.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
class Search extends React.Component {

  render () {
    const { q, begin_date, end_date, handleFormSubmit, handleInputChange } = this.props

    return (
      <form className="search">
        <div className="form-group">
          <label htmlFor="topic">Topic: </label>
          <input
            value={q}
            onChange={handleInputChange}
            name="q"
            type="text"
            className="form-control"
            placeholder="Enter the Topic You Want to Search About"
            id="q"
          />


      <br/>
        <label htmlFor="begin_date">Start Date </label>
          <input
            value={begin_date}
            onChange={handleInputChange}
            name="begin_date"
            type="date"
            className="form-control"
            placeholder="Searching for Article from this Date"
            id="begin_date"
          />
        <br/>

        <label htmlFor="end_date">End Date </label>
          <input
            value={end_date}
            onChange={handleInputChange}
            name="end_date"
            type="date"
            className="form-control"
            placeholder="To this Date"
            id="end_date"
          />
        <br/>

          <button
            type="submit"
            onClick={handleFormSubmit}
            className="btn btn-success"
          >
            Search
          </button>
        </div>
      </form>
    );
  }
}

Search.props = {
  q: PropTypes.string,
  begin_date: PropTypes.date,
  end_date: PropTypes.date,
  handleInputChange: PropTypes.func,
  handleFormSubmit: PropTypes.func
}

export default Search;
