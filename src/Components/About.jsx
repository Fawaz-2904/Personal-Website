import "./normal.css"
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaJava, FaPython, FaDatabase } from "react-icons/fa";

export default function About() {
    return(
        <>
        <header>
        <div>
        <nav className="nav">
            <a href="/" style={{ "--i": 1 }}>Home</a>
            <a href="/about" style={{ "--i": 2 }} className="active">About</a>
            <a href="/projects" style={{ "--i": 3 }}>Projects</a>
            <a href="/contact" style={{ "--i": 4 }}>Contact Me</a>
        </nav>
        </div>
        </header>

        <div className="about">
            <h2 style={{ width: "100%", textAlign: "center", color: "#0ef", fontSize: "2.5rem", marginBottom: "10px" }}>Objective</h2>
            <h4>
            My name is Fawaz Shaikh, and I hail from Mira Road, Mumbai. I have pursued my engineering degree in Information Technology from Vidyavardhini’s College of Engineering and Technology.</h4>
            <h4>As a budding IT professional, I am passionate about leveraging my technical expertise and managerial skills to create innovative and practical solutions. My academic journey and hands-on experiences have shaped me into a proactive learner who is eager to take on challenges in the ever-evolving tech industry.</h4>
            <h4>I strongly believe in combining technology with effective leadership to bring about impactful change. With a vision to contribute meaningfully to the field of technology, I aspire to work on projects that not only solve problems but also create value for people and businesses.</h4>
            <h4>What drives me is the pursuit of continuous growth—be it in coding, system design, project management, or team collaboration. As an upcoming youth personality, I am determined to showcase my skills, share ideas, and make a lasting impression with my work ethic, adaptability, and forward-thinking mindset.
            </h4>
        </div>

        <div className="skills">
            <h2 style={{ width: "100%", textAlign: "center", color: "#0ef", fontSize: "2.5rem", marginBottom: "10px" }}>My Skills</h2>
            <div className="cards-container">
            <div className="card" style={{"--i": 5}}>
            <FaHtml5 size={60} style={{paddingTop: "20px", }} color="#E44D26" />
            <p>HTML5</p>
            </div>
            <div className="card" style={{"--i": 6}}>
            <FaCss3Alt size={60} style={{paddingTop: "20px"}} color="#264de4" />
            <p>CSS</p>
            </div>
            <div className="card" style={{"--i": 7}}>
            <FaBootstrap size={60} style={{paddingTop: "20px"}} color="#563d7c" />
            <p>Bootstrap</p>
            </div>
            <div className="card" style={{"--i": 8}}>
            <FaJs size={60} style={{paddingTop: "20px"}} color="#F7DF1E" />   
            <p>JavaScript</p>
            </div>

            <div className="card" style={{"--i": 9}}>
            <FaReact size={60} style={{paddingTop: "20px"}} color="#0ef" />   
            <p>React</p>
            </div >
            <div className="card" style={{"--i": 10}}>
            <FaJava size={60} style={{paddingTop: "20px"}} color="#f89820" />
            <p>Java</p>
            </div>
            <div className="card" style={{"--i": 11}}>
            <FaPython size={60} style={{paddingTop: "20px"}} color="#3776AB" />
            <p>Python</p>
            </div>
            <div className="card" style={{"--i": 12}}>
            <FaDatabase size={60} style={{paddingTop: "20px"}} color="#4DB33D" />
            <p>SQL</p>
            </div>
            </div>
            </div>
        </>
    )
}