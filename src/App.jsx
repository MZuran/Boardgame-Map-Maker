import { useState } from 'react'

//imports
import Map from './components/map.jsx'

//CSS
import './../css/app.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='map-parent'>
    <Map trulyRandomPorts={false} hexagonOrientations={"random"}/>
    </div>
    </>
  )
}

export default App