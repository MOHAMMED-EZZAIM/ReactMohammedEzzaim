
function Myjsx(props){
    let age;
    let isAdult;
   const h1=
   <h1>
        <p>mohammed ezzaim</p>
        <p>age:{props.age}</p>
        <p>you are adult</p>
       
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
        </ul>
   </h1>;
      const h2=
      <h1>
           <p>mohammed ezzaim</p>
           <p>age:{props.age}</p>
           <p>you are n'est adult</p>
           <ul>
               <li>HTML</li>
               <li>CSS</li>
               <li>JS</li>
           </ul>
      </h1>;
   if(props.isAdult){
    return h1
   }
   else{
    return h2
   }
   
} 
export default Myjsx; 