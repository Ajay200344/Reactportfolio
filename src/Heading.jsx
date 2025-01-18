import IMG20240911174935 from "./assets/IMG20240911174935.jpg";
import "./Heading.css";
function Heading(){
    return <div className="card">
    <div className="img">
        <img src={IMG20240911174935}/>

    </div>
    <div className="head">
        <h1>Ajay Sarode</h1>
        
    </div>
    <div className="Profileinfo">
       
        <p>My name is Ajay Thakaji Sarode. I have interest in fullstack development. I have completed BCA from Tilak Maharashtra Vidyapeeth. I have knowledge about Computer Fundamentals & Networking, DBMS, Basic Programming Knowledge and Operating System etc. </p>

    </div>
    <div className="b1">
        <button>Download My CV</button>
    </div>

</div>;
}
export default Heading;