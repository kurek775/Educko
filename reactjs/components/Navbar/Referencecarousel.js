import Carousel from 'react-bootstrap/Carousel'

import 'bootstrap/dist/css/bootstrap.min.css';


const Referencecarousel = () => {
  const mystyle = {
    width: "70%",
    height: "auto",
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    zIndex: "3",
marginTop: "3%",

 
 
  };
  const caritstyle = {
    textAlign: "center",
    backgroundColor: "lightblue",
    padding:"60px"
};
   
return (



<Carousel style={mystyle}>
  <Carousel.Item style={caritstyle}>
    <div>
      <h1> Reference 1</h1>
      <p>
        wqerqwerwerrrrrrrrrrrrrrrrrrrrrrwereqwrqwerweq
        ewqrqwerqewrqewr
        qwerewqrwer
        qwer
      </p>
      <p>
        wqerqwerwerrrrrrrrrrrrrrrrrrrrrrwereqwrqwerweq
        ewqrqwerqewrqewr
        qwerewqrwer
        qwer
      </p>
    </div>
   
  </Carousel.Item>
  <Carousel.Item style={caritstyle}>
  <div>
      <h1> Reference 2</h1>
      <p>
        wqerqwerwerrrrrrrrrrrrrrrrrrrrrrwereqwrqwerweq
        ewqrqwerqewrqewr
        qwerewqrwer
        qwer
      </p>
      <p>
        wqerqwerwerrrrrrrrrrrrrrrrrrrrrrwereqwrqwerweq
        ewqrqwerqewrqewr
        qwerewqrwer
        qwer
      </p>
    </div>

  
  </Carousel.Item>
  <Carousel.Item style={caritstyle}>
  <div>
      <h1> Reference 3</h1>
      <p>
        wqerqwerwerrrrrrrrrrrrrrrrrrrrrrwereqwrqwerweq
        ewqrqwerqewrqewr
        qwerewqrwer
        qwer
      </p>
      <p>
        wqerqwerwerrrrrrrrrrrrrrrrrrrrrrwereqwrqwerweq
        ewqrqwerqewrqewr
        qwerewqrwer
        qwer
      </p>
    </div>


  </Carousel.Item>
</Carousel>

)  
}

export default Referencecarousel;