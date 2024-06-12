
// const Image=()=>{
//     return(
//         <img src={this.props.src} width="200px"></img>
//     )
// }
// export default Image

import { Component } from "react";


class Image extends Component{
    render(){
        return(
            <img src={this.props.src} width={150} height={150}/>
        )
    }
}
export default Image