import ProjectCard from "../components/ProjectCard"
import cowork from "../images/cowork2.png"
import speedmath from "../images/speedmath.png"
import ohq from "../images/ohq.png"
import cresearch from "../images/contraryresearch.png"
import RandomWalkBackground from "../components/RandomWalkBackground"
import multicalibpaper from '../files/Multicalib_CIS6200.pdf'
import stat9310paper from "../files/STAT_9310_Project.pdf"
import multicalibthumb from '../images/multicalib_thumb.png'
import stat9310thumb from "../images/stat9310_thumb.png"

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
    // {
    //     "title": "Senior Thesis",
    //     "img": null,
    //     "desc": "",
    //     "link": null,
    //     "date": "May 2026",
    //     "id": "4",
    // },
    {
        "title": "STAT 9310 Final Project",
        "img": stat9310thumb,
        "desc": "Final project for STAT 9310: Stochastic Processes",
        "link": stat9310paper,
        "date": "Apr 2025",
        "id": "5",
    },
    {
        "title": "CIS 6200 Final Project",
        "img": multicalibthumb,
        "desc": "Final project for CIS 6200: Conditional Learning",
        "link": multicalibpaper,
        "date": "Dec 2024",
        "id": "4",
    },
    {
        "title": "OHQ",
        "img": ohq,
        "desc": "Office hours management platform made by Penn Labs.",
        "link": "https://ohq.io",
        "date": "Jan 2024",
        "id": "2",
    },
    {
        "title": "Cowork",
        "img": cowork,
        "desc": "A virtual workspace for users to publicly track tasks with coworkers.",
        // Built with MERN stack, socket.io, & AWS EC2.",
        "link": "https://github.com/willdguo/Cowork",
        "date": "Aug 2023",
        "id": "0",
    },
    // {
    //     "title": "Speedmath",
    //     "img": speedmath,
    //     "desc": "Timed arithmetic game inspired by zetamac. Stores past games & allows users to see time spent per question. Data viz using D3 recharts.",
    //     "link": "https://speedmath-woad.vercel.app",
    //     "date": "May 2023",
    //     "id": "1",
    // },
    {
        "title": "Startup Deep Dives",
        "img": cresearch,
        "desc": "In-depth tech startup memos written for Contrary Research.",
        "link": "https://research.contrary.com/company?author=William+Guo",
        "date": "Dec 2023",
        "id": "3"
    }
   ]

    return (
        <div style={{padding: '10px', marginLeft: '40px'}}>
            <h2 style={{fontWeight:'400'}}> Projects </h2>
            <div style={{display:"flex", 
                        flexWrap: "wrap", 
                        position: "relative", 
                        zIndex: 1}}>            
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

            <RandomWalkBackground />
        </div>
    )
}

export default Projects

