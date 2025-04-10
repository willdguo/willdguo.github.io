import './ResearchCard.css'

function ResearchCard({title, desc, date, links}) {

    return (
        <div className='researchcard'>
            <h4 style={{fontSize: '18px'}}> {title} </h4>
            {/* <p> {desc} </p> */}
            <p style={{color: "#888"}}> {date} 
                {/* {"    "} */}
                {links.map(l => (
                    <a href={l.link} target="_blank" rel="noreferrer" style={{marginLeft: '20px'}}>{l.text}</a> 
                ))}
            </p>
            {/* <p>

            </p> */}
        </div>
    )
}

export default ResearchCard