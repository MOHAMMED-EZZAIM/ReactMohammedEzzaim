
function Myfruit({fruits}){
   let temps;
   temps=Array(temps);
//    temps=[...fruits,"mohammed","lina","latifa"];
temps=fruits;
   const dispaleyFunction=function(){
    return fruits.map( function (fruit){
        return <li>{fruit}</li>
    });
   }

    const ArroFunction=()=>
    temps.map(fruit => <li>{fruit}</li>)
    return(
        <>
            <h1>hello fruids</h1> 
           <ul>
            {ArroFunction()}
           </ul> 
        </>
        
    );
}
export default Myfruit;

// import Myfruit from "./Myfruit.jsx";
// function App(){
//     const tabFruids=["Banana","Kiwi","Fraise","Stromburer"];
//     return(
// <>
//        <Myfruit fruits={tabFruids}/>
// </>
//     );
// }
// export default App;