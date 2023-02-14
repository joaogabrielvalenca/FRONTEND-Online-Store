import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormSearch extends Component {
  render() {
    const { searchInputReturn, handleChange, submitButtonClick } = this.props;

    return (
      <div>
        <form data-testid="page-form-search">
          <div className="container-form-search">
            <input
              id="searchInput"
              name="searchInputReturn"
              type="text"
              value={ searchInputReturn }
              onChange={ handleChange }
              data-testid="query-input"
              placeholder="Digite um produto"
              className="search-input"
            />

            <button
              id="searchButton"
              name="searchButton"
              type="button"
              data-testid="query-button"
              className="search-button"
              onClick={ submitButtonClick }
            >
              Pesquisar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

FormSearch.propTypes = {
  searchInputReturn: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  submitButtonClick: PropTypes.func.isRequired,
};

export default FormSearch;
