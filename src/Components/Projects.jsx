import { useState, useEffect } from "react"; // Add useEffect for Escape key
import "./Project.css";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null); // Tracks open modal

  const projects = [
    {
      id: 1,
      img: "https://img.freepik.com/free-vector/flat-design-bank-business-landing-page_23-2150423022.jpg",
      title: "Bank Website",
      desc: "The Interactive Banking Website is a self made personal project designed to provide users with comprehensive information about banking services, account management, and customer support.",
      fullDesc: "The Interactive Banking Website is a self made personal project designed to provide users with comprehensive information about banking services, account management, and customer support. The website features a user-friendly interface that allows both new and existing users to navigate easily through various sections, including Home, Services, About, and Contact. Roles and Responsibility: Frontend Development: Designed and implemented the user interface using React.js, HTML, and CSS, ensuring a responsive and intuitive user experience. Integrated React Router for seamless navigation across various sections, including Home, Services, About, and Contact. Backend Development: Developed server-side logic with Node.js and Express.js, creating RESTful APIs for user authentication and data management. Connected the application to Firebase for secure storage of customer query data and user authentication. ",
      alt: "Bank Website Screenshot",
      tech: ["React.js", "Node.js", "Express.js", "HTML/CSS", "JavaScript", "Firebase"],
      features: ["Bank's Services", "Bank's Products", "Bank Contact access"],
      github: "https://github.com/Fawaz-2904/Project-1-Fawaz-Shaikh.git",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13YzgvjSBBVF3UTcQihEUK2ATqNpqYzR3bQ&s",
      title: "Zomato Clone",
      desc: "This project replicates key functionalities of the popular food delivery platform Zomato, providing users with an interactive and engaging experience like search options.",
      fullDesc: "The Zomato Clone is a self-initiated project aimed at gaining practical experience with modern web development frameworks, specifically React for the frontend and Node.js for the backend. This project replicates key functionalities of the popular food delivery platform Zomato, providing users with an interactive and engaging experience like Search option, Food options, Price filter and Skeleton Effect while exploring food options. Roles and Responsibility: Frontend Development: Employed React.js language to build a dynamic and responsive user interface, leveraging its component-based architecture for efficient development and maintenance. Utilized HTML and CSS to structure and style the application, ensuring a clean and user-friendly layout. Integrated CSS frameworks to enhance the visual design, closely mirroring the aesthetic of the Zomato app and providing a familiar experience for users. Backend Development: Implemented Node.js as the backend technology to manage server-side operations and facilitate data integration between the frontend and backend. Developed a feature to incorporate a skeleton loading effect, enhancing user experience by providing visual feedback during data fetching, particularly when users refresh the page.",
      alt: "Zomato Clone Screenshot",
      tech: ["HTML/CSS", "React.js", "JavaScript"],
      features: ["Search & filters", "Cart system", "Skeleton Effect"],
      github: "https://github.com/Fawaz-2904/Project-2-Fawaz-Shaikh.git",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70sfit8I0drLM1TLU-zU88nD22fy2VgC2sg&s",
      title: "Hotel Mgmnt Sys",
      desc: "This project replicates key functionalities of the popular food delivery platform Zomato, providing users with an interactive and engaging experience like search options.",
      fullDesc: "Functionality Description: The Hotel Management System is an In-house project which is an efficient application for hotel reception operations. It includes a Registration page for new users and a Login page for existing users. The Customer Details page allows for managing customer information with options to Save, Update, Reset, and Delete records. The Room Details page facilitates room assignments, Check-in and Checkout management, and room searches. Additionally, it features a page for reassigning vacated rooms and a Report Section for users to communicate functionality issues to the backend team, enhancing overall operational efficiency. Roles and Responsibilities: I independently developed the entire frontend and backend of the Hotel Management System from the ground up. This involved creating MySQL database tables to securely store data and implementing backend coding to connect user forms to the database effectively. Additionally, I prepared a comprehensive project report in IEEE format, detailing the project specifications and outcomes, which I presented at my college. This experience enhanced my technical skills and provided valuable insights into full-stack development and project documentation.",
      alt: "Hotel Management System Screenshot",
      tech: ["Python", "Django", "Tkinter GUI", "MySQL"],
      features: ["Login & Logout", "Room deatils", "Customer details", "Check-In details","Check-Out details"],
      github: "https://github.com/Fawaz-2904/Project-3-Fawaz-Shaikh.git",
    },
    {
      id: 4,
      img: "https://5.imimg.com/data5/SELLER/Default/2022/9/RN/SY/GL/96727933/40-hotel-booking-500x500.jpg",
      title: "Hotel Booking Sys",
      desc: "The Hotel Booking system is a project designed to make hotel booking easier for those hotels who are not technologically and digitally available in the market.",
      fullDesc: "The Hotel Booking System is a web-based project designed to simplify the process of booking rooms for hotels that are not yet technologically or digitally established in the market. Many small and mid-sized hotels still rely on manual methods for reservations, which can lead to errors, double bookings, and inefficiencies. This project provides a user-friendly solution that automates the booking process, reduces administrative workload, and enhances customer satisfaction. Guests can easily view available rooms, check details such as pricing and amenities, and confirm reservations online, eliminating the need for phone calls or physical visits. From a technical perspective, this system is built using HTML, CSS, and JavaScript. HTML (HyperText Markup Language) forms the backbone of the project, structuring the content and layout of the booking interface. CSS (Cascading Style Sheets) is used to style the application, making it visually appealing with a responsive design that adapts across devices such as desktops, tablets, and smartphones. JavaScript adds interactivity and dynamic functionality, including form validation, date selection, availability checks, and confirmation pop-ups. Together, these technologies ensure a smooth and seamless user experience.",
      alt: "Hotel Booking System Screenshot",
      tech: ["HTML/CSS", "Javascript"],
      features: ["Login & Logout", "Check-In details form", "Hotels Page", "About", "Contact"],
      github: "https://github.com/yourusername/zomato-clone-v3",
    },
  ];

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    if (selectedProject) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [selectedProject]);

  // Open modal for a project
  const openModal = (project) => setSelectedProject(project);

  // Close modal
  const closeModal = () => setSelectedProject(null);

  // Close on outside click (overlay)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return (
    <>
      <header>
        <div>
          <nav className="nav">
            <a href="/" style={{ "--i": 1 }}>Home</a>
            <a href="/about" style={{ "--i": 2 }}>About</a>
            <a href="/projects" style={{ "--i": 3 }} className="active">Projects</a>
            <a href="/contact" style={{ "--i": 4 }}>Contact Me</a>
          </nav>
        </div>
      </header>

      <div className="project">
        <h2 style={{ width: "100%", textAlign: "center", color: "#0ef", fontSize: "2.5rem", marginBottom: "10px" }}>My Projects</h2>
        {projects.map((project) => (
          <div key={project.id} className="project_card" style={{ "--i": project.id }}>
            <img src={project.img} alt={project.alt} />
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            <button onClick={() => openModal(project)}>See More</button>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>
            <img src={selectedProject.img} alt={selectedProject.alt} className="modal-img" />
            <h3>{selectedProject.title}</h3>
            <p className="modal-desc">{selectedProject.fullDesc}</p>
            
            <div className="modal-section">
              <h4>Technologies Used</h4>
              <ul className="tech-list">
                {selectedProject.tech.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className="modal-section">
              <h4>Key Features</h4>
              <ul className="features-list">
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="modal-links">
              <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
