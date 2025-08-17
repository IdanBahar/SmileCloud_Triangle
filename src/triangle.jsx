import { useNavigate } from 'react-router-dom'
export function TrianglePage({ points }) {
  const polyPoints = points.map((p) => `${p.x},${p.y}`).join(' ')
  const navigate = useNavigate()

  return (
    <div dir='rtl' style={{ padding: 16 }}>
      <button onClick={() => navigate(-1)}>חזרה </button>
      <h2>תצוגת המשולש</h2>
      <svg width='800' height='800' style={{ border: '1px solid #ddd' }}>
        <polygon points={polyPoints} fill='lightblue' stroke='black' />
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r='4' fill='blue' />
            <text
              x={p.x + 10}
              y={p.y - 10}
              fontSize='20'
              fill='black'
              fontFamily='Arial'
              alignmentBaseline='middle'
            >
              {`(${p.x}, ${p.y})`}
            </text>
          </g>
        ))}
      </svg>
    </div>
  )
}
