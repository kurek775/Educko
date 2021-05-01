import { Fragment, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuItems from "./MenuItems";
import NavStyle from "./NavStyle.module.css";
import Link from "next/link";

const Navbar = (props) => {
  const [click, setClick] = useState();

  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <header>
      <nav className={NavStyle.nav}>
        <div className={NavStyle.navCenter}>
          <h1 className={NavStyle.logo}>
            <Link href="/">Edučko</Link>
          </h1>
          <ul className={click ? NavStyle.navListActive : NavStyle.navList}>
            {MenuItems.map(({ id, title }) => (
              <li key={id} className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href="/loginPage">
                    <button className={NavStyle.button}>{title}</button>
                  </Link>
                </div>
              </li>
            ))}
          </ul>

          <div className={NavStyle.hamburger} onClick={clickHandler}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
