import { useCallback, useEffect, useRef, useState } from 'react';
import './RandomWalkBackground.css';
const STEP_SIZE = 48;
const MAX_SEGMENTS = 90;
const MAX_WALKS = 8;
function colorFor(id) { let hash = 0; for (let i = 0; i < id.length; i += 1) hash = (hash * 31 + id.charCodeAt(i)) >>> 0; return `hsl(${hash % 360} 58% 42%)`; }
export default function RandomWalkBackground() {
  const [walkers, setWalkers] = useState([]);
  const [bounds, setBounds] = useState({ width: window.innerWidth, height: window.innerHeight });
  const id = useRef(0);
  useEffect(() => { const resize = () => setBounds({ width: window.innerWidth, height: window.innerHeight }); window.addEventListener('resize', resize); return () => window.removeEventListener('resize', resize); }, []);
  const launch = useCallback((x, y) => { id.current += 1; setWalkers(old => [...old.slice(-(MAX_WALKS - 1)), { id: `walk-${Date.now()}-${id.current}`, path: [{ start: [x, y], end: [x, y], length: 0 }] }]); }, []);
  useEffect(() => {
    const interval = window.setInterval(() => setWalkers(old => old.map(walk => { const last = walk.path[walk.path.length - 1]; const dx = (Math.random() - .5) * STEP_SIZE; const dy = (Math.random() - .5) * STEP_SIZE; const end = [Math.max(0, Math.min(bounds.width, last.end[0] + dx)), Math.max(0, Math.min(bounds.height, last.end[1] + dy))]; return { ...walk, path: [...walk.path.slice(-(MAX_SEGMENTS - 1)), { start: last.end, end, length: Math.hypot(dx, dy) }] }; })), 220);
    return () => window.clearInterval(interval);
  }, [bounds]);
  return <><svg className="random-walk-layer" onClick={event => launch(event.clientX, event.clientY)} aria-hidden="true">{walkers.flatMap(walk => walk.path.map((segment, index) => <line className="draw-line" key={`${walk.id}-${index}`} x1={segment.start[0]} y1={segment.start[1]} x2={segment.end[0]} y2={segment.end[1]} stroke={colorFor(walk.id)} strokeDasharray={segment.length} strokeDashoffset={segment.length} strokeWidth="1.5" />))}</svg><button className="walk-button" onClick={() => launch(bounds.width * .72, bounds.height * .62)} aria-label="Launch a random walk" title="Launch a random walk">random walk</button></>;
}
