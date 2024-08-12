import ProjectCard from "../components/ProjectCard"
import cowork from "../images/cowork.png"
import speedmath from "../images/speedmath.png"

function Projects() {

    /*
    List of projects:
    Research
        Undergrad
            Oja's Algorithm for Adversarial Streaming PCA
                Improving existing bounds on the spectral gap 
        HS
            3D Object Tracking
            Techno-Economic Modeling
    Web Apps
        Cowork
        Speedmath
        Notes or equivalent
        OHQ.io
    Other
        Contrary Research
        Bubble
    */
   const projects = [
    {
        "title": "Cowork",
        "img": cowork,
        "desc": "A virtual workspace for users to publicly track tasks with others. Built with MERN stack, websocket.io, & Semantic UI.",
        "date": "Aug 2023",
    },
    {
        "title": "Speedmath",
        "img": speedmath,
        "desc": "Timed arithmetic game inspired by zetamac. Stores past games & allows users to see time spent per question. Data viz using D3 recharts.",
        "date": "May 2023",
    }
   ]

    return (
        <div style={{display:"flex"}}>
            {projects.map((project, idx) => (
                <ProjectCard 
                    title={project.title} 
                    img={project.img} 
                    desc={project.desc} 
                    date={project.date} 
                    key={idx}
                />
            ))}
        </div>
    )
}

export default Projects

