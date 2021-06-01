import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from "./Footer.module.css";

const Imagecarousel = () => {
  
return (
<div className={classes.dov}>

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.tasteofhome.com/wp-content/uploads/2018/07/back-to-school-excitement-GettyImages-908815432.jpg"
      alt="First slide"
      sizes="80vh"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img 
      className="d-block w-100"
      src="https://img.etimg.com/thumb/msid-77391367,width-650,imgsize-677864,,resizemode-4,quality-100/to-reduce-risk-experts-say-schools-should-make-adjustments-when-resuming-in-person-classes-.jpg"
      alt="Second slide"
      sizes="80vh"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.vanityfair.com/photos/5f64eda08f3d1388648dde56/master/pass/covid-classrooms.jpg"
      alt="Third slide"
      sizes="80vh"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
)  
}

export default Imagecarousel;