import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.mainfooter}>
  
        <div className={classes.row}>
          {/* Column1 */}
          <div className="col">
          
          </div>
          {/* Column2 */}
          <div className={classes.col1}>
            <h4>Info</h4>
            <ul className="list-unstyled">
              <li>GDPR</li>
              <li>Obchodní podmínky</li>
              <li>O nás</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className={classes.col2}>
            <h4>Kontakt</h4>
            <ul className="list-unstyled">
              <li>telefon</li>
              <li>ig</li>
              <li>fb</li>
            </ul>
          </div>
              {/* Column1 */}
              <div className="col">
          
          </div>
        </div>
      
       
      </div>
 
  );
}

export default Footer;