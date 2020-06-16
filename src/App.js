import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import MetronomeLightController from './components/MetronomeLightController'

function App() {
  const interval = useRef();
  const bpm = useRef(100);
  const playStatus = useRef(false);
  const [volume, setVolume] = useState(.5);
  const [bpmInputValue, setBpmInputValue] = useState(parseInt(bpm.current));
  const [tick, setTick] = useState(-1); // must be state variable to re-render light controller

  const startTimer = () => {
    console.log("play at bpm:", bpm.current);

    setTick(0); // run first time
    let ms = 60000 / bpm.current;
    interval.current = setInterval(() => {
      setTick(tick => tick + 1); // 1st iteration will run after interval time
    }, ms);
  }

  const resetTimer = () => {
    clearInterval(interval.current);
    setTick(-1);
  }

  const togglePlayStop = () => {
    if (playStatus.current === true) {
      resetTimer();
      playStatus.current = false;
    } else {
      startTimer();
      playStatus.current = true;
    }
  }

  /**
   * Runs when the input value changes. Does NOT run on initial 
   * render. Will set state var to either empty string or num
   * between specified values. Otherwise, input value is unchanged.
   * Then set bpm to integer from input value. Then plays the timer
   * if the status was already playing.
   */
  const handleBpmChange = (e) => {
    let string = e.target.value;
    if (string === "") {
      setBpmInputValue("");
      bpm.current = 0;
    }

    let parsedString = parseInt(string)
    if (!isNaN(parsedString)) {
      let num = parsedString;
      if (num > 0 && num <= 200) {
        setBpmInputValue(num);
        bpm.current = num;
        resetTimer(); // stop timer, set tick to 0
        if (bpm.current > 0 && bpm.current <= 200 && playStatus.current === true) {
          startTimer(); // set tick to 1, start timer
          // Render with tick: 1, bpm: new bpm, 
        }
      }
    }
  }

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  }

  return (
    <Container className="d-flex align-items-center justify-content-between">
      <div>

      </div>
      <div>
        <Row className="d-flex justify-content-center">
          <Col xs={4} className="text-center">
            <input value={bpmInputValue} className="input-bpm" onChange={handleBpmChange} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center row-metronome-lights">
          <Col xs={6} className="">
            <MetronomeLightController tick={tick} length={4} volume={volume} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs={6} className="d-flex justify-content-center">
            <Button style={{ backgroundColor: "black", border: "none" }} onClick={togglePlayStop}>{!playStatus.current ? "Play" : "Stop"}</Button>

          </Col>
        </Row>
      </div>
      <div>
        <input type="range" className="vert-input" min="0.1" max="1.0" step="0.05" value={volume}
          onChange={handleVolumeChange} />
      </div>
    </Container>

  );
}

export default App;
