import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import "./style.css";

const Nav = () => {
  const history = useHistory();
  const goBack = history.goBack();

  return (
    <div>
      <ul className="myNav">
        <li>
          <IoArrowBackCircleSharp id="icon" onClick={goBack} />
        </li>
        <li>
          <Link to="/" className="link">Home</Link>
        </li>
        <li>
          <Link to="/About" className="link"> About</Link>
        </li>
        <li>
          <Link to="/Contact" className="link">Contact</Link>
        </li>
        <li>
          <Link to="/Cards" className="link"> Cards</Link>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
