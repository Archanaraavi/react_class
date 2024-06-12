import { Component } from "react";

class Data extends Component{
    state={
        java:"archi",
        react:"akhi",
        html:"sai"
    }
    jav=()=>{
        this.setState({
            java:"sdfg is a java",
        })
       }

       write=()=>{
        this.setState({
            java:"gdjegk is a react",
        })
       }
      ht=()=>{
        this.setState({
            java:"vdghfj is a html",
        })
       }

    render(){
        return(
            <>
            <button onClick={this.jav}>java</button>
            <button onClick={this.write}>react</button>
            <button onClick={this.ht}>htm</button>
            {this.state.java}
            {this.state.react}
            {this.state.html}
            </>
        )
    }
}
export default Data