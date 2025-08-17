import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { TrianglePage } from './triangle'
import App from './App'

import { useState } from 'react'

export function RootCmp() {
  const [points, setPoints] = useState([
    { x: 400, y: 200 },
    { x: 250, y: 600 },
    { x: 550, y: 600 },
  ])
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route
              path='/'
              element={<App points={points} setPoints={setPoints} />}
            />
            <Route
              path='/triangle'
              element={<TrianglePage points={points} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}
