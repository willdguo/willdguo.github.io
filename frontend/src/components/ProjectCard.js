import './ProjectCard.css'

function ProjectCard( {title, img, desc, link, date} ) {

    return (
        // <div className="project-card">
        <a className="project-card" href={link} target="_blank" rel="noreferrer"> 
            <div className="project-image">
                <img style={{width:"100%", marginRight: "5px"}} src={img} alt={title}/>
            </div>
            <div className="project-desc"> 
                <p style={{fontSize:'18px', fontWeight:'500'}}> {title} </p>
                <p> {desc} </p>
                <p style={{color: "#888"}}> {date} </p>
            </div>
        </a>

    )
}

export default ProjectCard;