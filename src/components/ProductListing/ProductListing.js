import { Component } from "react"
import Image from "../image/image.js"
import List from "../list/list.js"
import Heading1, { Heading4 } from "../headings/headings.js"

class ProductListing extends Component{
    state={
        recipesList:[],
        isSucess:false,
    }
    fetchproducts=()=>{
        fetch('https://dummyjson.com/recipes')
        .then(res => res.json())
        .then((response)=>{
            const {recipes}=response;

        this.setState({
            recipesList:recipes,
            isSucess:true,
        },
        ()=>{
            console.log(this.state.recipesList,"inside setststus");
        }
    )
    })
}
    render(){
       return(
        <>
        <h2>Product Listing</h2>
        <button onClick={this.fetchproducts}>click to retrive the products</button>
        {
            this.state.isSucess?
            this.state.recipesList.map((eachRecipe)=>{
                return(
                    <>
                    {/* <h4>{eachRecipe.name}</h4> */}
                    <Heading4 tittle={eachRecipe.name}/>
                    <Image src={eachRecipe.image}/>
                    <Heading1 tittle={"Ingredients"}/>
                    <List List={eachRecipe.ingredients}/>
                    <Heading1 tittle={"Instructions"}/>
                    <List List={eachRecipe.instructions}/>
                    </>
                )

            })
            :      
            <h3>Lodeing...</h3>
        }
        </>
       )
    }
}
export default ProductListing;