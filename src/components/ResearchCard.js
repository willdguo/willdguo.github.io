import './ResearchCard.css'

function ResearchCard({title, authors, desc, links}) {

    return (
        <div className='researchcard'>
            <h4 style={{fontSize: '18px'}} onClick={()=>{console.log(authors)}}> {title} </h4>
            {/* <p> {desc} </p> */}
            <i> {authors} </i>
            <p style={{color: "#888"}}> {desc} </p>
            <p>
                {/* {"    "} */}
                {links.map(l => (
                    <a href={l.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        // style={{marginLeft: '20px'}}
                        key={l.text}
                    >
                        {l.text}
                    </a> 
                ))}
            </p>
            {/* <p>

            </p> */}
        </div>
    )
}

export default ResearchCard