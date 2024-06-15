import { Nav } from "react-bootstrap"
import ProductListing from "../products/products"
import NavBar from "../navbar/navabar"

const Homescreen=()=>{
    return(
       <>
       <NavBar/>
       <ProductListing/>
       </>
    )
}
export default Homescreen