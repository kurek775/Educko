import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuItems from "./MenuItems";
import "../../../styles/NavStyle.module.css";

const Navbar = props => {
  const [click, setClick] = React.useState();

  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <nav className="nav">
      <div className="nav-center container">
        <h1 className="logo">Edučko</h1>

        <ul className={click ? "nav-list active" : "nav-list"}>
          {MenuItems.map(({ id, title, cName }) => (
            <li key={id} className="nav-item">
              <div className={cName}>{title}</div>
            </li>
          ))}
        </ul>

        <div className="hamburger" onClick={clickHandler}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
