import classes from "./ContainerReg.module.css"
import Button from 'react-bootstrap/Button'
import Link from "next/link";

const ContainerReg = () => {
  
return (
<div className={classes.cont}>
    <div><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Sed elit dui, 
        pellentesque a, faucibus vel, interdum nec, diam. Vivamus porttitor turpis ac leo. Proin pede metus, vulputate nec, f
        ermentum fringilla, vehicula vitae, justo. Nullam at arcu a est sollicitudin euismod. Nullam sapien sem, ornare ac, nonummy 
        non, lobortis a enim. Aenean placerat. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Donec quis nibh at felis 
        congue commodo. Vivamus porttitor turpis ac leo. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nam libero tempore, 
        cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda es
        t, omnis dolor repellendus. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Itaque earum rerum hic tenetur 
        a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Fusce tellus. 
        Integer tempor. Suspendisse nisl.</p>
        <Link href="/reg_modal">
        <Button variant="primary" size="lg" active>
    Registrujte se
  </Button>
  </Link>
  
        </div>



    <div>
        <h1>Nakupte si tokeny</h1>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In enim a arcu imperdiet malesuada. Sed elit dui, 
        pellentesque a, faucibus vel, interdum nec, diam. Vivamus porttitor turpis ac leo. Proin pede metus, vulputate nec, f
        ermentum fringilla, vehicula vitae, justo. Nullam at arcu a est sollicitudin euismod. Nullam sapien sem, ornare ac, nonummy 
        non, lobortis a enim. Aenean placerat. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Donec quis nibh at felis 
        congue commodo. Vivamus porttitor turpis ac leo. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Nam libero tempore, 
        cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda es
        t, omnis dolor repellendus. Sed vel lectus. Donec odio tempus molestie, porttitor ut, iaculis quis, sem. Itaque earum rerum hic tenetur 
        a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Fusce tellus. 
        Integer tempor. Suspendisse nisl.</p></div>
   

</div>

)
}

export default ContainerReg;