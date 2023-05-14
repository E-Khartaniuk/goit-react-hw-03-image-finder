import React, { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    inputValue: '',
    API: '34903513-476090311f5800fa8542a8b0c',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(event.target.input.value);
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handleSubmit}>
          <input
            className={css.input}
            name="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button type="submit" className={css.button}>
            <span className="button-label">Search</span>
          </button>
        </form>
      </header>
    );
  }
}
