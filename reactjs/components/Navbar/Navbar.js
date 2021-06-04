import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSession, signOut } from "next-auth/client";

import NavStyle from "./NavStyle.module.css";
import Link from "next/link";
import Login_button from "./Login_button";
// import { connectToDatabase } from "../../helpers/db";

const Navbar = (props) => {
  const [click, setClick] = useState();
  const [user, setUser] = useState({ u: [] });
  const [session, loading] = useSession();
  var users = [];
  let userEmail = "";

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // async function fetchData() {
  //   const fetchedData = await fetch("api/user/dataUzivatel", {
  //     method: "GET",
  //   });
  //   const users = await fetchedData.json();
  //   setUser(users);
  //   console.log("EFFECT" + users);
  //   // for (var u in user) {
  //   //   users.push(user[u]);
  //   // }
  // }

  const clickHandler = () => {
    setClick(!click);
  };

  function logoutHandler() {
    signOut();
  }
  if (loading) {
    return <p>Loading...</p>;
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
            {/* {session && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  {user.u.some((e) => e.email === session.user.email) ? (
                    <p>{e.name + "" + e.penize}</p>
                  ) : null}
                </div>
              </li>
            )} */}
            {session && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href="/platba">
                    <a className={NavStyle.button}>Platba</a>
                  </Link>
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

            {session && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href="/kalendar-rezervaci">
                    <a className={NavStyle.button}>Rezervacni system</a>
                  </Link>
                </div>
              </li>
            )}
            {!session && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Login_button></Login_button>
                </div>
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
            {session && session.user.name === "admin" && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href="/vytvareni-lektora">
                    <a className={NavStyle.button}>Vytvoření lektora</a>
                  </Link>
                </div>
              </li>
            )}
            {session && session.user.name === "admin" && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href="/vytvareni-predmetu">
                    <a className={NavStyle.button}>Vytvoření předmětu</a>
                  </Link>
                </div>
              </li>
            )}
            {session && session.user.image === "lector" && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href={"/vytvoreni-hodiny"}>
                    <a className={NavStyle.button}>Vytvoreni hodiny</a>
                  </Link>
                </div>
              </li>
            )}
            {session && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href={"hodiny"}>
                    <a className={NavStyle.button}>Hodiny</a>
                  </Link>
                </div>
              </li>
            )}
            {session && (
              <li className={NavStyle.navItem}>
                <div className={NavStyle.navLink}>
                  <Link href="/seznam-lektoru">
                    <a className={NavStyle.button}>Seznam lektorů</a>
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
