import classes from "./Footer.module.css";
import Link from "next/link";
function Footer() {
  return (
 <footer className={classes.footer}>
 <div className={classes.footerLeft}>
   <div className={classes.logo}>
<img src="/logo.png"></img></div>
<p>Najdete nás i na sociálních sítích
 </p>
 <div className={classes.soc}>
<a href="https://www.facebook.com/"> <img src="/fb.png"></img> </a>
<a href="https://www.instagram.com/"><img src="/ig.png"></img> </a>


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
<li> info@educko.cz</li>
 <li> 879 456 133</li>

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