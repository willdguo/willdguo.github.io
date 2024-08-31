import ResearchCard from "../components/ResearchCard";
import chemposter from "../files/OregonElectrochemistry_poster-2021_09_18.pdf"
import chempres from "../files/pnwavs_WG_presentation.pdf"
import physpaper from "../files/3D Midair Object Collision.pdf"

function Research () {

    const topics = [
        {
            'title': "Oja's Algorithm for Streaming PCA",
            'desc': "Tightening/improving existing bounds on the spectral gap for Oja's algorithm to achieve low reconstruction error on arbitrary data matrices.",
            'date': 'Feb 2024 - Present',
            'links': [],
        },
        {
            'title': "Techno-Economic Comparison of Catalysts for Proton-Exchange Membrane Electrolysis",
            'desc': '',
            'date': 'Feb 2021 - Apr 2022',
            'links': [                
                {'link': chempres, 'text': '[Presentation]'},
                {'link': chemposter, 'text': '[Poster]'},
            ],
        },
        {
            'title': '3D Collision Tracking and Analysis',
            'desc': '',
            'date': 'Sep 2020 - Mar 2022',
            'links': [
                {'link': physpaper, 'text': '[Paper]'}
            ],
            // paper: https://doi.org/10.1119/5.0147346
        },
    ]

    return (
        <div style={{padding: '10px', marginLeft: '40px'}}>
            <h3 style={{fontWeight:'400'}}> Research </h3>
            <div style={{paddingTop: '20px'}}>
                {topics.map((topic, idx) => (
                    <ResearchCard 
                        key={idx} 
                        title={topic.title} 
                        desc={topic.desc} 
                        date={topic.date}
                        links={topic.links}
                    />
                ))}
            </div>
        </div>
    )
}

export default Research;