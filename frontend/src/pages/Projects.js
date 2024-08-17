import ProjectCard from "../components/ProjectCard"
import cowork from "../images/cowork.png"
import speedmath from "../images/speedmath.png"
import ohq from "../images/ohq.png"

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
        "title": "OHQ",
        "img": ohq,
        "desc": "Penn Labs' office hours software used by professors, TAs, and students across campus. Built with TypeScript/Semantic UI, Django,",
        "link": "https://ohq.io",
        "date": "Present",
        "id": "2",
    },
    {
        "title": "Cowork",
        "img": cowork,
        "desc": "A virtual workspace for users to publicly track tasks with others. Built with MERN stack, socket.io, & AWS EC2.",
        "link": "https://github.com/willdguo/Cowork",
        "date": "Aug 2023",
        "id": "0",
    },
    {
        "title": "Speedmath",
        "img": speedmath,
        "desc": "Timed arithmetic game inspired by zetamac. Stores past games & allows users to see time spent per question. Data viz using D3 recharts.",
        "link": "https://speedmath-woad.vercel.app",
        "date": "May 2023",
        "id": "1",
    }
   ]

    return (
        <div style={{padding: '10px', marginLeft: '40px'}}>
            <h2 style={{fontWeight:'400'}}> Projects </h2>
            <div style={{display:"flex", flexWrap: "wrap"}}>            
                {projects.map((project, idx) => (
                    <ProjectCard 
                        title={project.title} 
                        img={project.img} 
                        desc={project.desc} 
                        date={project.date} 
                        link={project.link}
                        key={idx}
                    />
                ))}
            </div>
        </div>
    )
}

export default Projects

