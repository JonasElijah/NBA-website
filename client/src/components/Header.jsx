import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/react.svg';

function Header() {
  return (
    <>
      <header>
        <Link to="/" ><h2 className="title">NBA Website</h2></Link>
        <nav>
          <NavLink to="/players">players</NavLink>
          <div class="select-wrapper">
            <select name="teams" id="teams">
              <option value="">teams</option>
              <option value="gsw">Warriors</option>
              <option value="lal">Lakers</option>
              <option value="sa">Spurs</option>
              <option value="dal">Mavericks</option>
            </select>
          </div>
          <div class="select-wrapper">
            <select name="seasons" id="seasons">
              <option value="">seasons</option>
              <option value="2324">2023-2024</option>
              <option value="2223">2022-2023</option>
              <option value="2122">2021-2022</option>
              <option value="2021">2020-2021</option>
            </select>
          </div>        
          <NavLink to="/predictions">predictions</NavLink>
          <NavLink to="/boxscores">box scores</NavLink>
        </nav>
        {/*Create a search bar component in the future called SearchBar.jsx or something. Replace this paragraph element with it. 
        it will take in user input as props and works as a regular search bar
        https://www.youtube.com/watch?v=sWVgMcz8Q44  */}
        <p className="searchBar">Search bar</p>
      </header>
    </>
  );
}

export default Header;
