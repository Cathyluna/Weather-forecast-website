import React from 'react';
import logo from './rainbow.png'
import css from './index.module.css'

export class Header extends React.Component {
  render() {
    return (
      <header className={css.title}>
        <img src={logo} className={css.logo} alt="logo" />
        <h1>Weather App</h1>
        <i className={css.subTitle} > “Wish you a good weather!”</i>
      </header>
    );
  }
}