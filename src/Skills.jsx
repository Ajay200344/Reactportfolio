import Html from "./assets/1051277.png";
import css from "./assets/css-3.png";
import javascript from "./assets/java-script.png";
import react from "./assets/react.png";
import programing from "./assets/programing.png";
import letterc from "./assets/letter-c.png";
import c from "./assets/c.png";
import java from "./assets/java.png";
import github from "./assets/github.png";
import "./Skills.css";

function Skills(){
    return <div className="skills" id="Skills" >
    <h1>Skills</h1>
    <div className="child">
        <div className="row1">
        <div className="boxes"><img src={Html}/></div>
        <div className="boxes"><img src={css}/></div>
        <div className="boxes"><img src={javascript}/></div>
        </div>
        <div className="row2">
            <div className="boxes"><img src={react}/></div>
            <div className="boxes"><img src={programing}/></div>
            <div className="boxes"><img src={letterc}/></div>
        </div>
        <div className="row3">
        <div className="boxes"><img src={c}/></div>
        <div className="boxes"><img src={java}/></div>
        <div className="boxes"><img src={github}/></div>
        </div>
    </div>
</div>;
}

export default Skills;