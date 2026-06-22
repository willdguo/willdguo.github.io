import { useEffect, useState } from "react";
import './RandomWalkBackground.css'

function RandomWalkBackground() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const stepSize = 50;
  const maxSegments = 300;
  const maxWalks = 20;

  const [walkers, setWalkers] = useState([
    // [{
    //   start: [width / 2, height / 2],
    //   end: [width / 2, height / 2],
    // }],
  ]);


  function hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash * 31 + str.charCodeAt(i)) >>> 0;
    }
    return hash;
  }


  function idToColor(id) {
    const hash = hashString(id);

    const hue = hash % 360;          // full color wheel
    const sat = 60 + (hash % 20);    // 60–80%
    const light = 50 + (hash % 10);  // 50–60%

    return `hsl(${hue}, ${sat}%, ${light}%)`;
  }

  
  const handleClick = (e) => {
    // console.log(walkers.length)
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setWalkers((old) => [

      ...(old.length >= maxWalks ? 
          old.slice(1) : old
        ),
        {
          id: crypto.randomUUID(),
          path: [
            {
              start: [x, y],
              end: [x, y],
            },
          ]
        },
    ]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setWalkers(prev =>
        prev.map((walk) => {
          const path = walk.path;
          const last = path[path.length - 1];

          let dx = (Math.random() - 0.5) * stepSize;
          let dy = (Math.random() - 0.5) * stepSize;

          let nx = last.end[0] + dx;
          let ny = last.end[1] + dy;

          nx = Math.max(0, Math.min(width, nx));
          ny = Math.max(0, Math.min(height, ny));

          const nextStep = {
            start: last.end,
            end: [nx, ny],
            length: Math.sqrt(dx**2 + dy**2)
          };

          const newPath = path.length >= maxSegments 
            ? [...path.slice(1)]
            : [...path, nextStep];

          return {
            ...walk, 
            path: newPath
          }
        })
      );
    }, 200);

    return () => clearInterval(interval);
  }, [width, height]);

  return (
    <svg
      width="100%"
      height="100%"
      onClick={handleClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        opacity: 0.5,
        pointerEvents: "auto",
      }}
    >
      {walkers.map((walk) => 
        walk.path.map((segment, segmentId) => (
            <line
              className="draw-line"
              key={`${walk.id}, ${segmentId}`}
              x1={segment.start[0]}
              y1={segment.start[1]}
              x2={segment.end[0]}
              y2={segment.end[1]}
              stroke={idToColor(walk.id)}
              strokeDasharray={segment.length}
              strokeDashoffset={segment.length}
              strokeWidth="1"
            />
        ))
      )}
    </svg>
  );
}

export default RandomWalkBackground;
