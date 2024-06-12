import { useState } from "react";
import ButtonComponents from "../button/button.js";

 const Counter=()=>{
    const [Count, setCount] = useState(0)

    // const IncrementHandler=()=>{
    //     setCount(Count+1);
    // }


    // const decrementHandler=()=>{
    //     if(Count>0){
    //         setCount(Count-1)
    //     }
    //     else{
    //         alert("count is already zero")
    //     }
    // }


    // const resetHandler=()=>{
    //     setCount(0)
    // }



    const CountHandler=(action,value =1)=>{
     switch(action){
        case "INCREMENT":
            setCount(Count+value)
            break;

            case "DECREMENT":
            if(Count>0){
                setCount(Count-value)
             }
             else{
              alert("count is already zero")
            }
                break;

                case "RESET":
                setCount(0);
                break;

            default:
            break;
     }
    }


    return(
       <>
       <h5>counter App</h5>
       <h4>current count value{Count}</h4>
       {/* <button onClick={()=>CountHandler("INCREMENT",10)}>Increment</button>
       <button onClick={()=>CountHandler("DECREMENT",10)}>decrement</button>
       <button onClick={()=>CountHandler("RESET")}>reset</button> */}
       <ButtonComponents text="INCREMENT" onSmash={
        ()=>CountHandler("INCREMENT",10)
        }/>

<ButtonComponents text="INCREMENT" onSmash={
        ()=>CountHandler("DECREMENT",10)
        }/>

<ButtonComponents text="INCREMENT" onSmash={
        ()=>CountHandler("RESET")
        }/>
       </> 
    )
 }
 export default Counter;



//  state lifting (or)state up lifting:same state ,we can control from the 
//  parent component and from child Components.to keep in sync