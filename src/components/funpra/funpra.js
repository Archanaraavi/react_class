import { useState } from "react"

const Funpra=()=>{
    const [name,setName]=useState(["Archana","raavi"])
    const [newname,setNewname]=useState("akhi")

    const addname=()=>{
        setName([...name,newname])
    };

    const deleteName=()=>{
        const newlist = name.filter((eachname, index) => index !== index);
        setName(newlist);
        }

    const updateName=(index)=>{
        const random="likki";
        const updateName=name.map((eachname,i)=>(index == i ? random : eachname))
        setName(updateName);
    }

    return(
        <>
       <button onClick={addname}>click the button chance name</button>
       <ol>
        {name.map((eachname,index)=>(
        <li>
         {eachname}
         <button onClick={()=>deleteName(index)}>Delete</button>
         <button onClick={()=>updateName(index)}>update</button>
        </li>
        ))}
        
       </ol>
        </>
    )
}
export default Funpra;