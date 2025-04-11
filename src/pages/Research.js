import ResearchCard from "../components/ResearchCard";
import chemposter from "../files/OregonElectrochemistry_poster-2021_09_18.pdf"
// import chempres from "../files/pnwavs_WG_presentation.pdf"
// import physpaper from "../files/3D Midair Object Collision.pdf"
import streampca from "../files/Streaming_PCA.pdf"
import multicalibpaper from '../files/Multicalib_CIS6200.pdf'

function Research () {

    const topics = [
        {
            'title': "Oja's Algorithm for Streaming PCA",
            'desc': "Tightening existing bounds on the spectral ratio for Oja's algorithm in adversarial streams.",
            'authors': "William Guo, Erik Waingarten",
            'date': 'In Progress',
            'links': [
                {'link': streampca, 'text': '[Draft]'}
            ],
        },
        {
            'title': "Sequential Algorithms Minimizing Distance to Multicalibration",
            'desc': "Final Project for CIS 6200: Conditional Learning, taught by Prof. Aaron Roth",
            'date': 'Dec 2024',
            'authors': "William Guo, Max Rubin-Toles",
            'links': [
                {link: multicalibpaper, 'text': '[PDF]'}
            ]
        },
        {
            'title': "Techno-Economic Comparison of Catalysts for Proton-Exchange Membrane Electrolysis",
            'desc': '',
            'authors': "William Guo, Zhenxing Feng",
            'date': 'Apr 2022',
            'links': [                
                {'link': chemposter, 'text': '[Poster]'},
            ],
        },
        {
            'title': '3D Collision Tracking and Analysis',
            'desc': '',
            'authors': "Lori Shaaban, Justin Dunlap, Ralf Widenhorn, William Guo",
            'date': 'Mar 2022',
            'links': [
                {'link': 'https://doi.org/10.1119/5.0147346', 'text': '[Paper]'}
            ],
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
                        authors={topic.authors}
                        links={topic.links}
                    />
                ))}
            </div>
        </div>
    )
}

export default Research;