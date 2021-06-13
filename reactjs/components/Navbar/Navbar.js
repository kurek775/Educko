import { useState } from "react";

import { useSession, signOut } from "next-auth/client";
import{ Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import classes from "./Navbar.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import Login_button from "./Login_button";
import Buttonlink from "./Buttonlink";
const Naavbar = (props) => {
  const mystyle = {

    display: "flex",
    margin: "auto",
    alignItems: "center",
    zIndex: "489",
    backgroundColor: "rgb(117, 148, 158)" 

 
 
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
<Navbar expand="lg" bg="lightblue" variant="dark" style={mystyle}>
  <Container>

   <div className={classes.Brand}>
     
    <Link href="/">

<Navbar.Brand  ><img src="/logo.png"></img></Navbar.Brand>

</Link>
   </div>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"  >
      <div className={classes.Jmeno}>
    {session && (<Nav.Link  >
             {session.user.name}
             </Nav.Link>
            )}</div>
            {session && session.user.name === "admin" && (
  <div className={classes.Dropdown}>
<NavDropdown title="Vytvoření" id="basic-nav-dropdown">
  <NavDropdown.Item ><Link href="/vytvareni-lektora"><div className={classes.Dropitem}>Lektora</div></Link></NavDropdown.Item>
      <NavDropdown.Item ><Link href="/vytvareni-predmetu"><div className={classes.Dropitem}>Předmětu</div></Link></NavDropdown.Item>
        </NavDropdown></div>
)}


{session && session.user.image === "lector" && (
  <div className={classes.Dropdown}>
<NavDropdown title="Hodiny" id="basic-nav-dropdown">
  <NavDropdown.Item ><Link href="/vytvoreni-hodiny"><div className={classes.Dropitem}> Vytvoření hodiny</div></Link></NavDropdown.Item>
      <NavDropdown.Item ><Link href="hodiny"><div className={classes.Dropitem}>Moje hodiny</div></Link></NavDropdown.Item>
        </NavDropdown></div>
)}



{session &&  session.user.image === "user" &&(<Nav.Link ><Buttonlink link="/platba" nazev="Platba">  </Buttonlink> </Nav.Link>
            )}

{session && (<Nav.Link><Buttonlink link="/kalendar-rezervaci" nazev="Rezervace">  </Buttonlink> </Nav.Link>
            )}

{session && (<Nav.Link><Buttonlink link="/profile" nazev="Profil">  </Buttonlink> </Nav.Link>
            )}



{session && (<Nav.Link  >
<Buttonlink link="/seznam-lektoru" nazev="Lektoři">  </Buttonlink>
             </Nav.Link>
            )}

<Nav.Link >
<Buttonlink link="/oNas" nazev="O nás">  </Buttonlink>
  
      </Nav.Link>

      <Nav.Link>
      <Buttonlink link="/contacts" nazev="Kontakty">  </Buttonlink></Nav.Link>
 
    </Nav>
    <Nav>


    {!session && (
     <Nav.Link>    <Login_button></Login_button></Nav.Link>
    )}

{session && (<a onClick={logoutHandler}><Nav.Link>
   <Buttonlink link="/" nazev="Odhlášení">  </Buttonlink>

           </Nav.Link> </a>
            )}

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

)
}
export default Naavbar;
