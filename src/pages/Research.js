import ResearchCard from "../components/ResearchCard";
import streampca from "../files/Streaming_PCA.pdf"
import multicalibpaper from '../files/Multicalib_CIS6200.pdf'
import stat9310 from "../files/STAT_9310_Project.pdf"
import pcaposter from "../files/WALDO_Poster.pdf"
import dimacs_slides from "../files/DIMACS_slides.pdf"
import dimacs_writeup from "../files/truth_learning.pdf"
import dimacs_poster from "../files/truth_learning_poster.pdf"
import srthesis_milestone from "../files/sr_thesis_milestone.pdf"

function Research () {

    const topics = [
        // {
        //     'title': "Efficient Algorithms for High-Dimensional Earth Mover's Distance",
        //     'authors': "William Guo, Erik Waingarten",
        //     'desc': 'Senior Thesis',
        //     'links': [
        //         {'link': srthesis_milestone, 'text': 'Milestone Report'},
        //     ],
        // },
        {
            // 'title': "Truth Learning in Social Networks Under Random Decision Orderings",
            'title': "Robust Sequential Learning in Random Order Networks",
            'authors': "William Guo, Edward Xiong, Jie Gao",
            'desc': 'To appear in AAMAS 2026',
            'links': [
                {'link': dimacs_writeup, 'text': '[PDF]'},
                // {'link': dimacs_slides, 'text': '[Presentation]'},
                // {'link': dimacs_poster, 'text': '[Poster]'},
            ],
        },
        // {
        //     'title': "Oja’s Algorithm for Streaming PCA: Tight Guarantees for Sparse Matrices",
        //     'authors': "William Guo, Erik Waingarten",
        //     'desc': 'Workshop on Algorithms for Large Data (Online) 2025',
        //     'links': [
        //         {'link': streampca, 'text': '[PDF]'},
        //         {'link': pcaposter, 'text': '[Poster]'}
        //     ],
        // },
        // {
        //     'title': "Sequential Algorithms Minimizing Distance to Multicalibration",
        //     'desc': "Final project for CIS 6200: Conditional Learning",
        //     'authors': "William Guo, Max Rubin-Toles",
        //     'links': [
        //         {link: multicalibpaper, 'text': '[PDF]'}
        //     ]
        // },
        // {
        //     'title': "Online Regret Minimization via Rademacher Complexities",
        //     'desc': "Final project for STAT 9310: Stochastic Processes",
        //     'authors': "William Guo",
        //     'links': [
        //         {link: stat9310, 'text': '[PDF]'}
        //     ]
        // },
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