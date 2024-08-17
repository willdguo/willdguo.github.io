
function ResearchCard({title, desc, date, links}) {
    const style = {
        'borderBottom': '1px solid #ccc',
        'padding': '10px',
        'paddingLeft': '0px',
    }

    return (
        <div style={style}>
            <h4> {title} </h4>
            <p> {desc} </p>
            <p style={{color: "#888"}}> {date} </p>
        </div>
    )
}

export default ResearchCard