import './ResearchCard.css'

function ResearchCard({title, desc, date, links}) {

    return (
        <div className='researchcard'>
            <h4 style={{fontSize: '20px'}}> {title} </h4>
            <p> {desc} </p>
            <p style={{color: "#888"}}> {date} </p>
            <p>
            {links.map(l => (
                <a href={l.link} target="_blank" rel="noreferrer">{l.text}</a> 
            ))}
            </p>
        </div>
    )
}

export default ResearchCard