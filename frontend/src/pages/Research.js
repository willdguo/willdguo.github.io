import ResearchCard from "../components/ResearchCard";

function Research () {

    const style = {
        'borderBottom': '1px solid #ccc',
        'padding': '10px',
    }

    const topics = [
        {
            'title': "Oja's Algorithm for Streaming PCA",
            'desc': "Tightening/improving existing bounds on the spectral gap for Oja's algorithm to achieve low reconstruction error on arbitrary data matrices.",
            'date': 'Current research in progress',
        },
    ]

    return (
        <div style={style}>
            {topics.map((topic, idx) => (
                <ResearchCard key={idx} title={topic.title} desc={topic.desc} date={topic.date}/>
            ))}
        </div>
    )
}

export default Research;