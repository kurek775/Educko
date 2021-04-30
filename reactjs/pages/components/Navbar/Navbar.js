import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuItems from "./MenuItems";
import NavStyle from "../../../styles/NavStyle.module.css";

const Navbar = props => {
  const [click, setClick] = React.useState();

  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <nav className={NavStyle.nav}>
      <div className={NavStyle.nav-center.container}>
        <h1 className={NavStyle.logo}>Edučko</h1>

        <ul className={click ? NavStyle.nav-list active : NavStyle.nav-list}>
          {MenuItems.map(({ id, title}) => (
            <li key={id} className={NavStyle.nav-item}>
              <div className={NavStyle.nav-link}>{title}</div>
            </li>
          ))}
        </ul>

        <div className={NavStyle.hamburger} onClick={clickHandler}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
