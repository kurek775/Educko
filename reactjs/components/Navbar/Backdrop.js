import classes from "./Backdrop.module.css";

function Backdrop(props){
   
    return<div className="backdrop" onClick={props.onClick}></div>;
}

export default Backdrop;