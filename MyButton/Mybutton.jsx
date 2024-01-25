 import styles from './Button.module.css';

 function Mybutton(){
   const styles={
      backgroundColor: "hsl(200, 100%, 50%)",
      color: "black",
      fontSize: "30px",
      borderRadius: "5px ",
      padding: "10px 50px",
      border: "none",
      cursor: "pointer",
 }
    return(
    <button style={styles}>Click Me</button>
    );
 }
 export default Mybutton;