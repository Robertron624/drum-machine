import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  const handlePress = () => {
    
  }

  return (
    <div className="App">
      <div id="drummer-machine">
        <div id="display"></div>
          <div className="pad__bank">
          <div className="drum-pad">
            <p>Q</p>
            <audio className="clip" id="Q" src=""></audio>
          </div>  
          <div id="W" className="drum-pad">
            W
            <audio className="clip" src=""></audio>
          </div>
          <div className="drum-pad">
            E
            <audio className="clip" id="E" src=""></audio>
          </div>
          <div className="drum-pad">
            <audio className="clip" id="A" src=""></audio>
            A
          </div>
          <div className="drum-pad">
            <audio className="clip" id="S" src=""></audio>
            S
          </div>
          <div className="drum-pad">
            <audio className="clip" id="D" src=""></audio>
            D
          </div>
          <div className="drum-pad">
            <audio className="clip" id="Z" src=""></audio>
            Z
          </div>
          <div className="drum-pad">
            <audio className="clip" id="X" src=""></audio>
            X
          </div>
          <div className="drum-pad">
            <audio className="clip" id="C" src=""></audio>
            C
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
