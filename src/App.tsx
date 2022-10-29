import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import reactLogo from './assets/react.svg'
import './App.css'
import { Home as TourHome } from './components/pages/Tour/Home'
import TourInformation from './components/pages/Tour/TourInformation'
import { Layout as TourLayout } from './components/Layouts/Tour/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <div>
                <a href="https://vitejs.dev" target="_blank">
                  <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.tsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
            </>
          }>
          </Route>
          <Route path="/tour" element={<TourLayout />}>
            <Route path="" element={<TourHome />} />
            <Route path=":id" element={<TourInformation />} />
          </Route>
        </Routes>

      </Router>
    </div>
  )
}

export default App
