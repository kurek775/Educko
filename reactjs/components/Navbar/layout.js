import { Fragment } from "react";
import Navbar from "./Navbar";
import Background from "../background-animace/background";
import Footer from "./Footer";
<<<<<<< HEAD

=======
// import Naavbar from "./Naavbar";
>>>>>>> 130d29ada6c2c528cc6d4f476fff8a6dcb8a5627

import "bootstrap/dist/css/bootstrap.min.css";
function Layout(props) {
  return (
    <Fragment>
<<<<<<< HEAD
    
=======
      {/* <Naavbar></Naavbar> */}
>>>>>>> 130d29ada6c2c528cc6d4f476fff8a6dcb8a5627
      <Navbar></Navbar>

      <main>{props.children}</main>
      <Background></Background>
      <Footer></Footer>
    </Fragment>
  );
}

export default Layout;
