import { useState, useEffect } from "react";
import "./App.scss";

function App() {
  const [drummerPower, setDrummerPower] = useState(true);

  const handleKeyPressed = (e) => {
  const pressedKey = e.key.slice().toUpperCase()
    console.log(pressedKey)
    const audioFile = document.getElementById(pressedKey);
    if(drummerPower && audioFile){
      audioFile.play()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressed)
  }, [])


  const [displayText, setDisplayTest] = useState("");

  const handleSwitch = () => {
    setDrummerPower((current) => !current);
    if (drummerPower) {
      setDisplayTest("");
    }
  };
  const handleKeyClick = (e) => {
    const options = {
      "Heater-1": "Q",
      "Heater-2": "W",
      "Heater-3": "E",
      Cev_H2: "A",
      "Heater-4": "S",
      "Heater-6": "D",
      Dsc_Oh: "Z",
      Kick_n_Hat: "X",
      RP4_Kick: "C",
    };

    const audioId = e.target.id.slice();
    const audioFile = document.getElementById(options[audioId]);
    if (drummerPower) {
      audioFile.play();
      setDisplayTest(audioId);
    }
  };

  return (
    <div className="App">
      <div id="drummer-machine">
        <div className="content-header">
          <div id="display">{displayText} </div>
          <div className="switch-wrapper">
            <div className="switch-header">Power</div>
            <div className="switch">
              <div
                onClick={handleSwitch}
                className={`inner-switch ${
                  drummerPower ? "float-right" : "float-left"
                }`}
              ></div>
            </div>
          </div>
        </div>
        <div className="main-content-wrapper">
          <div className="pad__bank">
            <div
              onClick={(e) => handleKeyClick(e)}
              id="Heater-1"
              className="drum-pad"
            >
              <p>Q</p>
              <audio
                className="clip"
                id="Q"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              ></audio>
            </div>
            <div
              onClick={(e) => handleKeyClick(e)}
              id="Heater-2"
              className="drum-pad"
            >
              W
              <audio
                id="W"
                className="clip"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              ></audio>
            </div>
            <div
              onClick={(e) => handleKeyClick(e)}
              id="Heater-3"
              className="drum-pad"
            >
              E
              <audio
                className="clip"
                id="E"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              ></audio>
            </div>
            <div
              onClick={(e) => handleKeyClick(e)}
              id="Cev_H2"
              className="drum-pad"
            >
              <audio
                className="clip"
                id="A"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              ></audio>
              A
            </div>
            <div
              onClick={(e) => handleKeyClick(e)}
              id="Heater-4"
              className="drum-pad"
            >
              <audio
                className="clip"
                id="S"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              ></audio>
              S
            </div>
            <div
              onClick={(e) => handleKeyClick(e)}
              id="Heater-6"
              className="drum-pad"
            >
              <audio
                className="clip"
                id="D"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              ></audio>
              D
            </div>
            <div
              onClick={(e) => handleKeyClick(e)}
              id="Dsc_Oh"
              className="drum-pad"
            >
              <audio
                className="clip"
                id="Z"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              ></audio>
              Z
            </div>
            <div
              onClick={(e) => handleKeyClick(e)}
              id="Kick_n_Hat"
              className="drum-pad"
            >
              <audio
                className="clip"
                id="X"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              ></audio>
              X
            </div>
            <div
              onClick={(e) => handleKeyClick(e)}
              id="RP4_Kick"
              className="drum-pad"
            >
              <audio
                className="clip"
                id="C"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              ></audio>
              C
            </div>
          </div>
          <div className="author-wrapper">
            <p>Created by: </p>
            <a href=""><h2>Robetron624</h2></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
