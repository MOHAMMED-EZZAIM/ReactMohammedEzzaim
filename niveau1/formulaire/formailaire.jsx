import style from './formulaire.module.css';
function TestField(props){
    return(   
            
<div className='Mycontent'>
           <div className="firstname">
               <label htmlFor="" className="label">firstname:</label>
                <input type="text"  
                value={props.firstname}
                placeholder="exemple:mohammed"/>
            </div>
   <br />
            <div className="lasname">
                <label htmlFor="">Lastname:</label>
                <input type="text"  value={props.lastname}placeholder="exemple:ezzaim"/>
            </div>
            <button>envoyer</button>
           {props.children}
</div>
    );
}
export default TestField;



// import TestField from './ReactMohammedEzzaim/formulaire/formailaire.jsx';
// function App(){
//     return(
//         <>
//             <TestField firstname="mohammed " lastname="ezzaim">
//                <div>
//                  i am mohammed ezzaim i am verry happy to me here i wante to thank you everry one 
//                </div>
//             </TestField>
            
//         </>
    
//     );
// }

// export default App