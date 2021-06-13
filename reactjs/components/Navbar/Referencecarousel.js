import Carousel from 'react-bootstrap/Carousel'
import classes from "./Refcar.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';


const Referencecarousel = () => {
  const mystyle = {
    width: "100%",
    height: "auto",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    zIndex: "3",
marginTop: "3%",
marginBottom: "3%"

 
 
  };
  const caritstyle = {
    textAlign: "center",
   color: "white",
    backgroundColor: "rgb(117, 148, 158)",
    padding:"40px",

};
   
return (



<Carousel style={mystyle}>
  <Carousel.Item style={caritstyle}>
    <div className={classes.text}>
      <h1>Marie</h1>
      <p>
  "Jožko se moc zlepšil v matematice nevím co bych si bez Edučka počla"
    </p>
    </div>
   
  </Carousel.Item>
  <Carousel.Item style={caritstyle}>
  <div className={classes.text}>
      <h1>Patrik "Rytmus" Vrbovský</h1>
      <p>
"One čavo Attilka uz do tri raz napocital a to neni nejaka hocijaka picovina to je vazna vec"
      </p>

    </div>

  
  </Carousel.Item>
  <Carousel.Item style={caritstyle}>
  <div className={classes.text}>
      <h1>Artuš</h1>
      <p>
     "Lancelot umí anglicky fakt v topu může s náma sedět u kulatého stolu"
      </p>

    </div>


  </Carousel.Item>
</Carousel>

)  
}

export default Referencecarousel;