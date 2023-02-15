import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LupeIcon from '../images/lupe_icon.png';

class FormSearch extends Component {
  render() {
    const { searchInputReturn, handleChange, submitButtonClick } = this.props;

    return (
      <form data-testid="page-form-search">
        <div className="nav-input">
          <input
            id="searchInput"
            name="searchInputReturn"
            type="text"
            value={ searchInputReturn }
            onChange={ handleChange }
            data-testid="query-input"
            placeholder="Digite um produto"
          />
          <button
            id="searchButton"
            name="searchButton"
            type="button"
            data-testid="query-button"
            onClick={ submitButtonClick }
          >
            <img
              src={ LupeIcon }
              alt="Pesquisar"
            />
          </button>
        </div>
      </form>
    );
  }
}

FormSearch.propTypes = {
  searchInputReturn: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitButtonClick: PropTypes.func.isRequired,
};

export default FormSearch;
