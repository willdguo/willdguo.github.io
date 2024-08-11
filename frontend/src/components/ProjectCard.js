

function ProjectCard( {title, img, desc, date} ) {

    const style = {
        "display": "flex",
        "padding": "10px",
        "margin": "10px",
        "border": "1px solid #000",
        "borderRadius": "10px", 
    }

    const imgStyle = {
        "width": "400px",
        "marginRight": "20px",
        "paddingRight": "10px",
        "borderRight": "1px solid #ccc",
    }

    return (
        <div style = {style}>
            <div>
                <img style={imgStyle} src={img} alt={title}/>
            </div>
            <div> 
                <h2> {title} </h2>
                <br />
                <p> {desc} </p>
                <p> {date} </p>
            </div>
        </div>
    )
}

export default ProjectCard;