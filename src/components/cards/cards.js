// import Card from 'react-bootstrap/Card';

// function BgColorExample() {
//   return (
//     <>
//       {[
//         'Primary',
//         'Secondary',
//         'Success',
//         'Danger',
//         'Warning',
//         'Info',
//         'Light',
//         'Dark',
//       ].map((variant) => (
//         <Card
//           bg={variant.toLowerCase()}
//           key={variant}
//           text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
//           style={{ width: '18rem' }}
//           className="mb-2"
//         >
//           <Card.Header>Header</Card.Header>
//           <Card.Body>
//             <Card.Title>{variant} Card Title </Card.Title>
//             <Card.Text>
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </>
//   );
// }

// export default BgColorExample;


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Component } from "react";
import Image from "../image/image.js";
import List from "../list/list.js";
import Heading1, { Heading4 } from "../headings/headings.js";

class ProductListing extends Component {
    state = {
        recipesList: [],
        isSucess: false,
    }

    fetchproducts = () => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then((response) => {
                const { recipes } = response;

                this.setState({
                    recipesList: recipes,
                    isSucess: true,
                }, () => {
                    console.log(this.state.recipesList, "inside setststus");
                });
            })
    }

    render() {
        return (
            <>
                <h2>Product Listing</h2>
                <Button onClick={this.fetchproducts}>Click to retrieve the products</Button>
                {
                    this.state.isSucess ?
                        this.state.recipesList.map((eachRecipe, index) => {
                            return (
                                <Card
                                    bg="light"
                                    key={index}
                                    text="dark"
                                    style={{ width: '18rem' }}
                                    className="mb-2"
                                >
                                    <Card.Header as="h5">{eachRecipe.name}</Card.Header>
                                    <Card.Body>
                                        <Image src={eachRecipe.image} />
                                        <Heading1 tittle={"Ingredients"} />
                                        <List List={eachRecipe.ingredients} />
                                        <Heading1 tittle={"Instructions"} />
                                        <List List={eachRecipe.instructions} />
                                    </Card.Body>
                                </Card>
                            )
                        })
                        :
                        <h3>Loading...</h3>
                }
            </>
        )
    }
}

export default ProductListing;


// import { Component } from "react";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'; // Ensure you have this line if you plan to use Bootstrap's Button component
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import Image from "../image/image.js";
// import List from "../list/list.js";
// import Heading1, { Heading4 } from "../headings/headings.js";

// class ProductListing extends Component {
//     state = {
//         recipesList: [],
//         isSucess: false,
//     }

//     fetchproducts = () => {
//         fetch('https://dummyjson.com/recipes')
//             .then(res => res.json())
//             .then((response) => {
//                 const { recipes } = response;

//                 this.setState({
//                     recipesList: recipes,
//                     isSucess: true,
//                 },
//                     () => {
//                         console.log(this.state.recipesList, "inside setststus");
//                     }
//                 )
//             })
//     }

//     render() {
//         return (
//             <>
//                 <h2>Product Listing</h2>
//                 <Button onClick={this.fetchproducts}>Click to retrieve the products</Button>
//                 {
//                     this.state.isSucess ?
//                         this.state.recipesList.map((eachRecipe, index) => {
//                             return (
//                                 <Card
//                                     bg="light"
//                                     key={index}
//                                     text="dark"
//                                     style={{ width: '18rem' }}
//                                     className="mb-2"
//                                 >
//                                     <Card.Header>{eachRecipe.name}</Card.Header>
//                                     <Card.Body>
//                                         <Image src={eachRecipe.image} />
//                                         <Heading1 tittle={"Ingredients"} />
//                                         <List List={eachRecipe.ingredients} />
//                                         <Heading1 tittle={"Instructions"} />
//                                         <List List={eachRecipe.instructions} />
//                                     </Card.Body>
//                                 </Card>
//                             )
//                         })
//                         :
//                         <h3>Loading...</h3>
//                 }
//             </>
//         )
//     }
// }

// export default ProductListing;
