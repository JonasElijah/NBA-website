import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/react.svg';

function Header() {
  return (
    <>
      <header>
        <Link to="/" className="logo"><img src={logo} alt="React" />NBA Website</Link>
        <nav>
          <NavLink to="/players">players</NavLink>
          <select name="teams" id="teams">
            <option value="gsw">Warriors</option>
            <option value="lal">Lakers</option>
            <option value="sa">Spurs</option>
            <option value="dal">Mavericks</option>
          </select>
          <select name="seasons" id="seasons">
            <option value="2324">2023-2024</option>
            <option value="2223">2022-2023</option>
            <option value="2122">2021-2022</option>
            <option value="2021">2020-2021</option>
          </select>
          <NavLink to="/predictions">predictions</NavLink>
          <NavLink to="/boxscores">box scores</NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
