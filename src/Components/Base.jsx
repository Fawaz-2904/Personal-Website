import './normal.css'

export default function Base() {
    return(
        <>
        <header>
        <div>
        <nav className="nav">
            <a href="/" style={{ "--i": 1 }} className="active">Home</a>
            <a href="/about" style={{ "--i": 2 }}>About</a>
            <a href="/projects" style={{ "--i": 3 }}>Projects</a>
            <a href="/contact" style={{ "--i": 4 }}>Contact Me</a>
        </nav>
        </div>
        </header>
        </>
    )
}