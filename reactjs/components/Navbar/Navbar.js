import { useState } from "react";

import { useSession, signOut } from "next-auth/client";
import{ Navbar, Container, Nav} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Login_button from "./Login_button";

const Naavbar = (props) => {
  const mystyle = {
    width: "100%",
    height: "7h",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    zIndex: "489",
    backgroundColor: "lightblue"   

 
 
  };

  const navstyle = {


    fontSize: "1.3rem",

    

 
 
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
<Navbar collapseOnSelect expand="lg" bg="lightblue" variant="dark" style={mystyle}>
  <Container>
    <Link href="/">

    <Navbar.Brand >EDUCKO</Navbar.Brand>

    </Link>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto"  style={navstyle}>
    {session && (<Nav.Link>
             {session.user.name}
             </Nav.Link>
            )}

{session && (<Nav.Link><Link href="/platba">
             Platba
           </Link>  </Nav.Link>
            )}

{session && (<Nav.Link><Link href="/kalendar-rezervaci">
Rezervacni system
            </Link> </Nav.Link>
            )}

{session && (<Nav.Link><Link href="/profile">
Profil
            </Link> </Nav.Link>
            )}

{session && session.user.name === "admin" && (
  <Nav.Link> <Link href="/vytvareni-lektora">
Vytvoření lektora
            </Link> </Nav.Link>
            )}
{session && session.user.name === "admin" && (
  <Nav.Link> <Link href="/vytvareni-predmetu">
Vytvoření předmětu
            </Link> </Nav.Link>
            )}

{session && session.user.image === "lector" && (
  <Nav.Link> <Link href="/vytvoreni-hodiny">
Vytvoření hodiny
            </Link> </Nav.Link>
            )}
{session && (<Nav.Link><Link href="hodiny">
Hodiny
            </Link> </Nav.Link>
            )}
{session && (<Nav.Link><Link href="/seznam-lektoru">
Seznam lektorů
            </Link> </Nav.Link>
            )}



















<Nav.Link>

    <Link href="/oNas">
  
     O nás
      </Link>
      </Nav.Link>

      <Nav.Link>
      <Link href="/contacts">
     Kontakty
      </Link></Nav.Link>
 
    </Nav>
    <Nav>


    {!session && (
      <Nav.Link>      <Login_button></Login_button></Nav.Link>
    )}

{session && (<Nav.Link><Link href="/">
<a onClick={logoutHandler}> Odhlásit se </a>
            </Link> </Nav.Link>
            )}

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
}
export default Naavbar;