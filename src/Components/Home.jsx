import "./normal.css"
import Base from "./Base.jsx"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return(
        <>
        <Base />
        <div className="home">
            <div className="home-content">
                <h3>Hello, It's me</h3>
                <h1>Fawaz Shaikh</h1>
                <h3>And I'm a <span>Frontend Developer</span></h3>

                <div className="social-media">
                    <a href="#" style={{ "--i": 5 }} target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="#" style={{ "--i": 6 }} target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="#" style={{ "--i": 7 }} target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </div>
                <a href="#" class="btn">Download CV</a>
            </div>

            <div class="home-img">
                <img src="/src/Components/Fawaz.png" alt=""></img>
            </div>
        </div>
        </>
    )
}