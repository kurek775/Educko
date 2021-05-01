import { Fragment } from "react";
import LoginInputs from "./loginInputs";
import Navbar from "./Navbar";

function Layout(props) {
  return (
    <Fragment>
      <LoginInputs></LoginInputs>
      <Navbar></Navbar>
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
