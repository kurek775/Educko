import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Todo from "./Todo"
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
        <h1>
          <Link href="/"><a className={NavStyle.logo}>Edučko</a></Link>
        </h1>
          <ul className={click ? NavStyle.navListActive : NavStyle.navList}>
           
          <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href="/reg_modal">
                    <button className={NavStyle.button}>O nás</button>
                  </Link>
                </div>
              </li>
           
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href="/reg_modal">
                    <button className={NavStyle.button}>Registrace</button>
                  </Link>
                </div>
              </li>
     <li><Todo></Todo></li>
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
