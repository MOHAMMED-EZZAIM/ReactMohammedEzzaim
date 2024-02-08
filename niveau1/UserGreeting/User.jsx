import PropTypes from 'prop-types'
function User(props){
//   if(props.isLogin){
//     return(
//         <h2>Welcom {props.name}</h2>
//     );
//   }
//   else{
//     return(
//         <h2>Enter votre name s'esl vous plais</h2>
//     );
//   }
return(
    props.isLogin ?  <h2 className='myH2'>Welcom {props.name}</h2> : <h2 className='myH22'>Enter votre name s'esl vous plais</h2>
);
}
User.prototype={
    name:PropTypes.string,
    isLogin: PropTypes.true,
}
User.defaultProps={
    name:"Guest",
    isLogin:false,
}

export default User;


// import User from './UserGreeting/User.jsx';
// function App() {
//   return(
//    <>
//     <User isLogin={false} name="mohammed ezzaim"/>
//     <User isLogin={true} name="mohammed ezzaim"/>
//     <User isLogin={true} />
//    </>
//   )
// }

// export default App;

//css
// .myH2{
//     font-size: 2.5rem;
//     background-color: aquamarine;
//     padding: 10px;
//     box-shadow: 4px 7px 12px 0px #0000004a;
//     max-width: 500px;
//     border-radius: 5px;

// }
// .myH22{
//     font-size: 2.5rem;
//     background-color: rgb(6, 233, 233);
//     padding: 10px;
//     box-shadow: 4px 7px 0px 5px #04e5f94a;
//     max-width: 600px;
//     border-radius: 5px;

// }