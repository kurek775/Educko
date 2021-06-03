import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css';


const Imagecarousel = () => {
  const mystyle = {
    width: "70%",
    height: "auto",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    zIndex: "3"

 
 
  };
  const caritstyle = {

};
   
return (



<Carousel style={mystyle}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.tasteofhome.com/wp-content/uploads/2018/07/back-to-school-excitement-GettyImages-908815432.jpg"
      alt="First slide"
   
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="https://img.etimg.com/thumb/msid-77391367,width-650,imgsize-677864,,resizemode-4,quality-100/to-reduce-risk-experts-say-schools-should-make-adjustments-when-resuming-in-person-classes-.jpg"
      alt="Second slide"

    />

  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.vanityfair.com/photos/5f64eda08f3d1388648dde56/master/pass/covid-classrooms.jpg"
      alt="Third slide"

    />


  </Carousel.Item>
</Carousel>

)  
}

export default Imagecarousel;