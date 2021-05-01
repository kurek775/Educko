import classes from "../styles/loginPage.module.css";
import Link from "next/link";

function LoginPage(props) {
  return (
    <div>
      {props.map((user) => (
        <div>
          <h1>{user.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default LoginPage;
