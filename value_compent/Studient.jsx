//default propse 

import PropTypes from 'prop-types'
function  Studient(props){
    return(
        <div className="student">
        <p className="p1">Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>isStudinet:{props.isStudinet ? "Yes" : "Non"}</p>
        <hr className="hr" />
        </div>
    );
}
Studient.PropType={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudinet: PropTypes.bool,
}
Studient.defaultProps={
    name:"Guest",
    age :0,
    isStudinet:false,
}
export default Studient;

// import Studient from './value_compent/Studient.jsx'
// function App() {
//   return(
//    <>
//     <Studient name="mohammed ezzaim" age={30} isStudinet={true}/>
//     <Studient name="lina ezzaim" age="mohammed" isStudinet={false}/>
//     <Studient name="latifa regiwi" age={56} isStudinet={true}/>
//     <Studient name="mareyame ezzaim" age={14} isStudinet={true}/>
//     <Studient name="houda ezzaim" age={14} isStudinet={false}/>
//     <Studient name="Lunda"/>
//    </>
//   )
// }

// export default App;


//css
// *{
//     box-sizing: border-box;
// }
// body{
//     background-position: 50% 50%;
// }
// .student{
//     font-family: Arial, Helvetica, sans-serif;
//     font-size: 30px;
//     font-style: italic;
//     color: blue;
//     background-color:white;
//     padding: 10px;
//     box-shadow:  4px 8px 9px 0px #0000002e;
// }
// .student p{
//     margin: 0;
// }
// .hr{
//     border: solid black 3px;
// }