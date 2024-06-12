import { useState } from "react";
import Counter from "./counter";
import ButtonComponents from "../button/button";



const ProfileComponent =()=>{

    const[name,setName]=useState("mohan")
    const[isEmployed, setIsEmployed]=useState(false)
    const[Employee,setEmployee]=useState({
        name:"kiran",
        salary:1000,
        designation:"react developer"
    })

    const Incrementpercentage=50;

    const percentagecal=(value,percentage)=>{
   return value+value*(percentage/100);
    }

    const changeName=()=>{
        //name="ram"  //does not change because we cannot use directly we must use setName.
        setName("ram");

    }
    const changeIsEmployed=()=>{
        //name="ram"  //does not change because we cannot use directly we must use setName.
        setIsEmployed(!isEmployed);
    }


    const changerole=()=>{
        setEmployee({...Employee,designation:"Angular developer",
            salary:percentagecal(Employee.salary,Incrementpercentage),
        })
    }
    
    return(
        <>
        <h4>Profile details</h4>
        <h3>user name:{name}</h3>
        <button onClick={changeName}>Change name</button>
        <h3>Is Employed{isEmployed?"yes":"No"}</h3>
        <button onClick={changeIsEmployed}>change Employee status</button>
        {
            isEmployed && <Counter/>
        }
        <div>
          <h2>Employee details</h2> 
          <h4>{Employee.name}</h4>
          <h4>{Employee.salary}</h4>
          <h4>{Employee.designation}</h4>
          <ButtonComponents text="change role" onSmash={changerole}/>
        </div>
        </>
    )
}
export default ProfileComponent;