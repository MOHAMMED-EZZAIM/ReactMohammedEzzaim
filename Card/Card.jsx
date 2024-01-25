import imgages from "../assets/image4s.jpeg";
function Card(){
    return(
        <div className="card">
            <img className="card-imag" src={imgages} alt="" />
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make Youtube videos and i am the best</p>
        </div>
    );
}
export default Card