import React from "react";
import PropTypes from 'prop-types';
import "./DeleteBtn.css";

class DeleteBtn extends React.Component {
  render () {
    return (
      <span onClick={this.props.onClick}>
        <button className = "btn btn-danger"> Delete Article </button>
      </span>
    );
  }
}

DeleteBtn.props = {
  onClick: PropTypes.func
}

export default DeleteBtn;
