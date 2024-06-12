const GreetingComponet=(prop)=>{
    console.log(prop)
    const{children}=prop
    return(
        <>
        <h1>Hello Good Moring</h1>
        {children}
        </>
    )
}
export default GreetingComponet;