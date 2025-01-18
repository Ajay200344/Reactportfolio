import logo from "./assets/logo.jpg";
import technology from "./assets/technology.png";
import bycicle from "./assets/bycicle.png";
import "./Projects.css";
 function Projects(){
    return <div className="projects" id="projects">
    <h1>Projects</h1>
    <div className="content">
        <div className="project1">
            <div className="logo"><img src={logo}/></div>
            <div className="description">
                <h2>Inventory Management System</h2>
                <p> I created an Inventory Management System using basics html, css, javascript and php. Website is easy to use integrated with basic functions like add, delete and update records. </p>
            </div>
            <div className="b3"><button>Github</button></div>
        </div>
        <div className="project1">
            <div className="logo"><img src={technology}/></div>
            <div className="description">
                <h2>PortFolio</h2>
                <p> I developed my portfolio web page it includes my educational information, skills and knowledge, projects etc. It is a frontend project  made using html and css.   </p>
            </div>
            <div className="b3"><button>Github</button></div>
        </div>
        <div className="project1">
            <div className="logo"><img src={bycicle}/></div>
            <div className="description">
                <h2>Online Bike Information</h2>
                <p> I created an online bike information frontend website where we can get information about bikes.
                    It is based on html, css, java-script.    </p>
            </div>
            <div className="b3"><button>Github</button></div>
        </div>
        
    </div>
</div>

}
export default Projects;