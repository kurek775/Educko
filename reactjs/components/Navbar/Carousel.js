import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css';


const Imagecarousel = () => {
  const mystyle = {
    width: "100%",

    display: "flex",
    margin: "auto",
    justifyContent: "center",
    zIndex: "3",
 

 
 
  };
  const caritstyle = {
height: "50%"
};
   
return (



<Carousel style={mystyle}>
 
  <Carousel.Item style={caritstyle}>

    <img
      className="d-block w-100"
      src="/skola1.png"
      alt="First slide"
   
    />
  
  </Carousel.Item>
  <Carousel.Item style={caritstyle}>
    <img 
      className="d-block w-100"
      src="/skola2.png"
      alt="Second slide"

    />

  
  </Carousel.Item>
  <Carousel.Item style={caritstyle}>
    <img
      className="d-block w-100"
      src="/skola3.png"
      alt="Third slide"

    />


  </Carousel.Item>
</Carousel>

)  
}

export default Imagecarousel;