import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession, signOut } from "next-auth/client";

import NavStyle from "./NavStyle.module.css";
import Link from "next/link";
import Login_button from "./Login_button";

const Navbar = (props) => {
  const [click, setClick] = useState();
  const [session, loading] = useSession();
  // const { name, email } = session.user;

  const clickHandler = () => {
    setClick(!click);
  };

  function logoutHandler() {
    signOut();
  }
  return (
    <header>
      <nav className={NavStyle.nav}>
        <div className={NavStyle.navCenter}>
          <h1>
            <Link href="/">
              <a className={NavStyle.logo}>Edučko</a>
            </Link>
          </h1>

          <ul className={click ? NavStyle.navListActive : NavStyle.navList}>
            {session && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <p>{session.user.name}</p>
                </div>
              </li>
            )}
            <li className={NavStyle.navItem}>
              <div className={NavStyle.navLink}>
                <Link href="/oNas">
                  <a className={NavStyle.button}>O nás</a>
                </Link>
              </div>
            </li>
            <li className={NavStyle.navItem}>
              <div className={NavStyle.navLink}>
                <Link href="/contacts">
                  <a className={NavStyle.button}>Kontakty</a>
                </Link>
              </div>
            </li>
            {!session && !session && (
              <li>
                <Login_button></Login_button>
              </li>
            )}
            {session && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href="/profile">
                    <a className={NavStyle.button}>Profil</a>
                  </Link>
                </div>
              </li>
            )}
            {session && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href="/">
                    <a className={NavStyle.button} onClick={logoutHandler}>
                      Odhlásit se
                    </a>
                  </Link>
                </div>
              </li>
            )}
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
