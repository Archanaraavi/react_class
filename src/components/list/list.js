

const List=(prop)=>{
    const {List}=prop;
    console.log(List);
    return(
        <ol>
            {/* <li>flowers</li>
            <li>vegetables</li>
            <li>fruits</li> */}
            {List.map((each)=>{
                return<li>{each}</li>
            })}
        </ol>
    )
}
export default List