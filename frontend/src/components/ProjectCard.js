import './ProjectCard.css'

function ProjectCard( {title, img, desc, date} ) {

    return (
        <div className="project-card">
            <div>
                <img style={{width:"400px", marginRight: "5px"}} src={img} alt={title}/>
            </div>
            <div style={{paddingLeft: "20px", borderLeft: "1px solid #eee"}}> 
                <p style={{fontSize:'20px', fontWeight:'bold'}}> {title} </p>
                <br />
                <p> {desc} </p>
                <p style={{color: "#888"}}> {date} </p>
            </div>
        </div>
    )
}

export default ProjectCard;