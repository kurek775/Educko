import classes from "./Footer.module.css";
import Link from "next/link";
function Footer() {
  return (
 <footer className={classes.footer}>
 <div className={classes.footerLeft}>
<img src="https://www.czechdesign.cz/files/brosintrikos-praha3-01-1920x1080.png"></img>
<p>Máme top logo proto pojd
 </p>
 <div className={classes.soc}>
 <a href="#">d</a>
 <a href="#">d</a>
 <a href="#">d</a>
 <a href="#">w</a>

 </div>
 </div>
 <ul className={classes.footerRight}>
<li>  <h2 className={classes.h2}>Služby</h2>
<ul className={classes.box}>
 <li> <a href="#">Pomoc s úkolem</a></li>
 <li> <a href="#">Příprava na písemku</a></li>
 
   </ul>

</li>

<li className={classes.kontakty}>
  <h2 className={classes.h2}>Kontakty</h2>

<ul className={classes.box}>
<li> <a href="#">info@educko.cz</a></li>
 <li> <a href="#">879 456 133</a></li>

  </ul>

</li>



 </ul>
 <div className={classes.footerBottom}>
   <p>Všechna práva vyhrazena Educko 2021</p>
 </div>
 </footer>

  );
}

export default Footer;