import './App.css'
import { useNavigate } from 'react-router-dom'

function App({ points, setPoints }) {
  const navigate = useNavigate()
  function handleChange(vertex, coordinate, value) {
    setPoints((prev) => {
      const newPoints = [...prev]
      newPoints[vertex] = {
        ...newPoints[vertex],
        [coordinate]: Number(value) || 0,
      }
      return newPoints
    })
  }
  function goToTrianglePage() {
    navigate('/triangle')
  }

  return (
    <>
      <h1>הזן נתוני משולש</h1>
      <section className='triangle-1'>
        <h3>צלע 1</h3>
        <input
          type='text'
          id='x1'
          value={`X: ${points[0].x}`}
          onChange={(e) => {
            const val = e.target.value.replace(/[^\d]/g, '')
            handleChange(0, 'x', val)
          }}
        />
        <input
          type='text'
          id='y1'
          value={`Y: ${points[0].y}`}
          onChange={(e) => {
            const val = e.target.value.replace(/[^\d]/g, '')
            handleChange(0, 'y', val)
          }}
        />
      </section>
      <section className='triangle-2'>
        <h3>צלע 2</h3>
        <input
          type='text'
          id='x2'
          value={`X: ${points[1].x}`}
          onChange={(e) => {
            const val = e.target.value.replace(/[^\d]/g, '')
            handleChange(1, 'x', val)
          }}
        />
        <input
          type='text'
          id='y2'
          value={`Y: ${points[1].y}`}
          onChange={(e) => {
            const val = e.target.value.replace(/[^\d]/g, '')
            handleChange(1, 'y', val)
          }}
        />
      </section>
      <section className='triangle-3'>
        <h3>צלע 3</h3>
        <input
          type='text'
          id='x3'
          value={`X: ${points[2].x}`}
          onChange={(e) => {
            const val = e.target.value.replace(/[^\d]/g, '')
            handleChange(2, 'x', val)
          }}
        />
        <input
          type='text'
          id='y3'
          value={`Y: ${points[2].y}`}
          onChange={(e) => {
            const val = e.target.value.replace(/[^\d]/g, '')
            handleChange(2, 'y', val)
          }}
        />
      </section>
      <br />
      <button onClick={goToTrianglePage}>הצג משולש</button>
      <button
        style={{ marginRight: '1em' }}
        onClick={() =>
          setPoints([
            { x: 0, y: 0 },
            { x: 0, y: 0 },
            { x: 0, y: 0 },
          ])
        }
      >
        איפוס שדות
      </button>
    </>
  )
}
export default App
