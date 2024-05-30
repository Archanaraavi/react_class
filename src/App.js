//import Table from "./components/table/table.js"
import Image from "./components/image/image.js"
import Form from "./components/form/form.js"
import Button from "./components/button/button.js"
import List from "./components/list/list.js"
import NavBar from "./components/navbar/navabar.js"

import Heading1,{Heading2,Heading3,Heading4,Heading5} from "./components/headings/headings.js"
import HeadingComponent from "./components/class components/headings.js"
import React from 'react';
import { Accordion } from "react-bootstrap"
import AccordionComponent from "./components/accordion/accordion.js"
import ProgressBar1 from "./components/progress bar/progress bar.js"
import Spinne from "./components/Spinners/Spinners.js"
//import Uncontrolled from "./components/Carousels/Carousels.js"
import Static from "./components/Modals/Modals.js"

import Basic from "./components/table/table.js"



// function Hello()
// {
//   return(
//     <div>
//       <h1>hello world </h1>
      {/* <Table/>
      <Image/>    
      <Form/><br/>  
      <Button/>
      <List/> */}
//     </div>
//   )
// }
// export default Hello


//create js file 
// function Hello(){
  // const employee={
  //   name:"kiran",
  //   secondname:"ram"
  // }
  //destructuring
  // const {name,secondname}=employee
  // return(
  //    <div>
  //      {/* <h1>Hello world {employee.name}</h1>  {/*this represent html and js file 
  //      <h1>Hello world {employee.secondname}</h1> */}
  //      <h1 className="name">Hello world {name}</h1>  {/*destructuring code.*/}
  //      <h1>Hello world {secondname}</h1>
  //    </div>
  // )

  //this is first way of conditional reandering.<h1> ne return chesamu but component kuda return cheyavachu
  // const isSubscibed=true
  // if(issubscibed){
  //   return <h1>thanks for subscibed</h1>//replace h1 to <List/>
  // }
  // else{
  //   return <h1>please subscibed</h1>
  // }

  //ternary operator code

//   return(
//     <div>
//       {
//         isSubscibed && <List/>
//         // ?
//         // <List/>
//         // :
//         // <h1>plase subscibed</h1>
//       }
//     </div>
//   )
// }
// export default Hello


//export and import

// function Hello(){
//   return(
//     <div>
// <Heading1/>
// <Heading2/>
// <Heading3/>
// <Heading4/>
// <Heading5/>
//     </div>
//   )
// }
// export default Hello



function Hello() {
  const ipl = [
    {
      id:1,
      team: "csk",
      playernames: ["Ruturaj Gaikwad", "Devon Conway", "MS Dhoni", "Ajinkya Rahane", "Shaik Rasheed"],
      wincup: 2021
    },
    {
      id:2,
      team: "rcb",
      playernames: ["Faf du Plessis", "Rajat Patidar", "Virat Kohli", "Anuj Rawat", "Dinesh Karthik"],
      wincup: 0
    },
    {
      id:3,
      team: "src",
      playernames: ["Abdul Samad", "Aiden Markram", "Rahul Tripathi", "Glenn Phillips", "Mayank Agarwal"],
      wincup: 2016
    },
    {
      id:4,
      team: "mi",
      playernames: ["Rohit Sharma", "Dewald Brevis", "Suryakumar Yadav", "Ishan Kishan", "Harvik Desai"],
      wincup: 2020
    },
  ];

  return (
    
    <>
    {/* <table border="1" style={{ width: "100%", textAlign: "left" }}>
      <tr>
        <td>team</td>
        <td>playernames</td>
      </tr>
    </table>
      {ipl.map((ipl) => {
        if (ipl.wincup <= 2020) {
          return (
            <table border="1" style={{width: "100%", textAlign: "left",borderCollapse:"collapse"}}>
            <tr>
            {/* <div key={ipl.id}> */}
              {/* <td><h3>{ipl.team}</h3></td>
              <td><h3>{ipl.playernames}</h3></td>
              </tr> */}
            {/* </div> */}
            {/* </table>
          );
        }
      // })} }*/}
      <NavBar/> 
      <AccordionComponent/>
      <ProgressBar1/>
      <Spinne/>
      {/* <Uncontrolled/> */}
      <Static/>
      <Basic/>
    {/* <Heading2/>
      <HeadingComponent/> */}
    </> 
  );
}

export default Hello;