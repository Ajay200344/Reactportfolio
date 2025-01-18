import "./Contactus.css";
function Contactus(){
    return <div className=" contactmain" id="contact">
    <div className="heading">
        <h1>Contact Me</h1>
    </div>
    <form>
    <div className="name">
        <input type="text" id="name" placeholder="Your Name" required/>
    </div>
    <div className="email">
        <input type="email" id="email" placeholder="Your Email" required/>
    </div>
    <div className="message">
        <textarea placeholder="Your Message" rows="2" cols="21"></textarea>
    </div>
    <div className="b2"> 
        <button>Submit</button>
    </div>
    </form>
</div>;
}
export default Contactus;