

function ProjectCard( {title, img, desc, date} ) {

    const style = {
        "display": "flex",
        "padding": "10px",
        "margin": "10px",
        "border": "1px solid #000",
        "borderRadius": "10px", 
        "width": "50%",
    }

    return (
        <div style = {style}>
            <div>
                <img style={{width:"400px"}} src={img} alt={title}/>
            </div>
            <div style={{paddingLeft: "20px", borderLeft: "1px solid #ccc"}}> 
                <h2> {title} </h2>
                <br />
                <p> {desc} </p>
                <p> {date} </p>
            </div>
        </div>
    )
}

export default ProjectCard;