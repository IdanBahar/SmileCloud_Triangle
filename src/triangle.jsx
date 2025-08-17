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
          <circle key={i} cx={p.x} cy={p.y} r='4' fill='blue' />
        ))}
      </svg>
    </div>
  )
}
