import { Fragment } from "react";
import Navbar from "./Navbar";
import Background from "../background-animace/background";

function Layout(props) {
  return (
    <Fragment>
      <Navbar></Navbar>
      <main>{props.children}</main>
      <Background></Background>
    </Fragment>
  );
}

export default Layout;
