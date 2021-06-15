import classes from "./Footer.module.css";
import Link from "next/link";
import { FaPhoneAlt , FaEnvelope } from "react-icons/fa";
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
<li>  <h2 className={classes.h2}>Informace</h2>
<ul className={classes.box}>
 <li> <a href="#">GDPR</a></li>
 <li> <a href="#">Obchodní podmínky</a></li>
 <li> <Link href="/contacts"><a>Kontakty</a></Link></li>
 
   </ul>

</li>

<li className={classes.kontakty}>
  <h2 className={classes.h2}>Kontakt</h2>

<ul className={classes.box}>
<li><FaEnvelope size={20} style={{ marginRight: 5 }}/>  info@educko.cz</li>
 <li><FaPhoneAlt size={20} style={{ marginRight: 5 }}/>  879 456 133</li>

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