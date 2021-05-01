import classes from "../../styles/loginPage.module.css";
import Link from "next/link";
function LoginInputs({ properties }) {
  return (
    <div className={classes.div}>
      <form className={classes.form}>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <label htmlFor="" className={classes.label}>
              username
            </label>
            <input type="text" name="" id="username" />
            <label htmlFor="" className={classes.label}>
              heslo
            </label>
            <input type="text" name="" id="heslo" />
            <Link href="/">
              <button className={classes.button}>Přihlásit se</button>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default LoginInputs;
