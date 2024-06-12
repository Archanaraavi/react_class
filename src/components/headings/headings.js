const Heading1=(prop)=>{   //default export
   const{tittle}=prop;                                  // const headingstyle={
                                      // color:"red",
                                      // backgroundColor:"black"
  
return <h2>{tittle}</h2>;                            
                                    
  }
 export default Heading1
  
  // export const Heading2=()=>{
  //   return(
  //     <div>
  //       <h1>Heading...</h1>
  //     </div>
  //   )
  // }
  
  // export const Heading3=()=>{   //named export
  //   return(
  //     <div>
  //       <h1>Heading...</h1>
  //     </div>
  //   )
  // }
  
  export const Heading4=(props)=>{
    const{tittle}=props
    return(
      <div>
        <h1>{tittle}</h1>
      </div>
    )
  }
  //export default Heading4
  
  // export const Heading5=()=>{
  //   return(
  //     <div>
  //       <h1>Heading...</h1>
  //     </div>
  //   )
  // }
  
  
  