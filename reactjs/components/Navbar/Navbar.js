import { useState } from "react";

import { useSession, signOut } from "next-auth/client";
import { Navbar, Container, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Login_button from "./Login_button";
import Buttonlink from "./Buttonlink";
const Naavbar = (props) => {
  const mystyle = {
    width: "100%",
    height: "7h",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    zIndex: "489",
    backgroundColor: "lightblue",
  };

  const navstyle = {
    fontSize: "1.3rem",
  };
  const navlinkstyle = {
    fontSize: "1.2rem",
    color: "white",
  };

  const [click, setClick] = useState();
  const [session, loading] = useSession();
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
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="lightblue"
      variant="dark"
      style={mystyle}
    >
      <Container>
        <Link href="/">
          <Navbar.Brand>EDUCKO</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" style={navstyle}>
            {session && <Nav.Link>{session.user.name}</Nav.Link>}

            {session && session.user.image === "user" && (
              <Nav.Link>
                <Buttonlink link="/platba" nazev="Platba">
                  {" "}
                </Buttonlink>{" "}
              </Nav.Link>
            )}

            {session && (
              <Nav.Link>
                <Buttonlink link="/kalendar-rezervaci" nazev="Kalendar">
                  {" "}
                </Buttonlink>{" "}
              </Nav.Link>
            )}

            {session && (
              <Nav.Link>
                <Buttonlink link="/profile" nazev="Profil">
                  {" "}
                </Buttonlink>{" "}
              </Nav.Link>
            )}

            {session && session.user.name === "admin" && (
              <Nav.Link>
                {" "}
                <Buttonlink link="/vytvareni-lektora" nazev="Vytvoření lektora">
                  {" "}
                </Buttonlink>
              </Nav.Link>
            )}
            {session && session.user.name === "admin" && (
              <Nav.Link>
                <Buttonlink
                  link="/vytvareni-predmetu"
                  nazev="Vytvoření předmětu"
                >
                  {" "}
                </Buttonlink>
              </Nav.Link>
            )}

            {session && session.user.image === "lector" && (
              <Nav.Link>
                <Buttonlink link="/vytvoreni-hodiny" nazev="Vytvoření hodiny">
                  {" "}
                </Buttonlink>
              </Nav.Link>
            )}
            {session && (
              <Nav.Link style={navlinkstyle}>
                <Buttonlink link="hodiny" nazev="Hodiny">
                  {" "}
                </Buttonlink>{" "}
              </Nav.Link>
            )}
            {session && (
              <Nav.Link style={navlinkstyle}>
                <Buttonlink link="/seznam-lektoru" nazev="Seznam lektorů">
                  {" "}
                </Buttonlink>
              </Nav.Link>
            )}

            <Nav.Link>
              <Buttonlink link="/oNas" nazev="O nas">
                {" "}
              </Buttonlink>
            </Nav.Link>

            <Nav.Link>
              <Buttonlink link="/contacts" nazev="Kontakty">
                {" "}
              </Buttonlink>
            </Nav.Link>
          </Nav>
          <Nav>
            {!session && (
              <Nav.Link>
                {" "}
                <Login_button></Login_button>
              </Nav.Link>
            )}

            {session && (
              <Nav.Link>
                <a onClick={logoutHandler}>
                  {" "}
                  <Buttonlink link="/" nazev="Odhlásit se">
                    {" "}
                  </Buttonlink>
                </a>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Naavbar;
