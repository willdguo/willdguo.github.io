import './ProjectCard.css'

function ProjectCard( {title, img, desc, link, date} ) {

    return (
        // <div className="project-card">
        <a className="project-card" href={link} target="_blank" rel="noreferrer"> 
            <div>
                <img style={{width:"400px", marginRight: "5px"}} src={img} alt={title}/>
            </div>
            <div style={{paddingLeft: "20px", borderLeft: "1px solid #eee"}}> 
                <p style={{fontSize:'18px', fontWeight:'500'}}> {title} </p>
                <p> {desc} </p>
                <p style={{color: "#888"}}> {date} </p>
            </div>
        </a>

    )
}

export default ProjectCard;