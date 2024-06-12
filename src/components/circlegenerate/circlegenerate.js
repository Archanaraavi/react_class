import { Component } from "react";

class CircleGenerator extends Component {
    state = {
        circles: [false, false, false]
    }

    addCircles = () => {
        this.setState({
            circles: [...this.state.circles, false]
        });
    }
    circleClicked=(index)=>{
        console.log("clicked",index,this.state.circles)
    }
    circleClicked = (index) => {
        const newCircles = this.state.circles.map((circle, i) => 
            i === index ? !circle : circle
        );
        this.setState({ circles: newCircles });
    }

    render() {
        return (
            <>
            <h3 >circles count {this.state.circles.length}</h3>
                <button onClick={this.addCircles}>Add circles</button>
                {
                    this.state.circles.map((eachCircle, index) => {
                        return (
                            <div
                               
                                style={{
                                    border: "2px solid black",
                                    width: 100,
                                    height: 100,
                                    borderRadius: "50%",
                                    background: eachCircle ? "red" : "green"
                                }}
                                onClick={()=>this.circleClicked(index)}
                            ></div>
                        );
                    })
                }
            </>
        )
    }
}

export default CircleGenerator;