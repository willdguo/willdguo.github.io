import ResearchCard from "../components/ResearchCard";
import streampca from "../files/Streaming_PCA.pdf"
import multicalibpaper from '../files/Multicalib_CIS6200.pdf'
import stat9310 from "../files/STAT_9310_Project.pdf"
import pcaposter from "../files/WALDO_Poster.pdf"

function Research () {

    const topics = [
        {
            'title': "Oja’s Algorithm for Streaming PCA: Spectral Guarantees for Sparse Matrices",
            'authors': "William Guo, Erik Waingarten",
            'desc': 'Workshop on Algorithms for Large Data (Online) 2025',
            'links': [
                // {'link': streampca, 'text': '[Draft]'},
                {'link': pcaposter, 'text': '[Poster]'}
            ],
        },
        {
            'title': "Online Regret Minimization via Rademacher Complexities",
            'desc': "Final project for STAT 9310: Stochastic Processes",
            'authors': "William Guo",
            'links': [
                {link: stat9310, 'text': '[PDF]'}
            ]
        },
        {
            'title': "Sequential Algorithms Minimizing Distance to Multicalibration",
            'desc': "Final project for CIS 6200: Conditional Learning",
            'authors': "William Guo, Max Rubin-Toles",
            'links': [
                {link: multicalibpaper, 'text': '[PDF]'}
            ]
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
                        authors={topic.authors}
                        links={topic.links}
                    />
                ))}
            </div>
        </div>
    )
}

export default Research;