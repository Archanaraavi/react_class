 const ButtonComponents=(prop)=>{
    console.log(prop)
    const{text,textcolor="yellow",onSmash}=prop
    return(
        <button 
        style={{color:textcolor ,backgroundcolor:"grean"}}
         onClick={onSmash}>{text}</button>
    )
}
export default ButtonComponents