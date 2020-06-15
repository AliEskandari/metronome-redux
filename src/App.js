import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import MetronomeLightController from './components/MetronomeLightController'

var loop = null;
function App() {

  // const [loop, setLoop] = useState(null);
  const [bpmInputValue, setBpmInputValue] = useState("100");
  const [bpm, setBpm] = useState(100);
  const [tick, setTick] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  const play = () => {
    let ms = 60000 / bpm;
    setTick(1); // run first time
    loop = setInterval(() => {
      setTick(tick => tick + 1); // 1st iteration will run after interval time
    }, ms);
    setPlayStatus(true);
  }

  const stop = () => {
    clearInterval(loop);
    setTick(0);
    setPlayStatus(false);
  }

  const togglePlayStop = () => {
    if (playStatus === true) {
      stop();
    } else {
      play();
    }
  }

  /**
   * Runs whenever the bpmInputValue variable is set. Will run after
   * the state variable is defined with useState on initial render.
   * Then will run whenever setX is run.
   * 
   * Sets bpm to a num. Then starts the timer loop.
   */
  useEffect(() => {
    if (isNaN(bpmInputValue)) {
      setBpm(0);
    } else {
      setBpm(bpmInputValue);
    }
    stop();
    if (bpm > 0 && bpm <= 200 && playStatus === true) {
      play();
    }
  }, [bpmInputValue]);

  /**
   * Runs when the input value changes. Does NOT run on initial 
   * render. Will set state var to either empty string or num
   * between specified values. Otherwise, input value is unchanged.
   */
  const handleChange = (e) => {
    let string = e.target.value;
    if (string === "") {
      setBpmInputValue("");
    }
    let parsedString = parseInt(string)
    if (!isNaN(parsedString)) {
      let num = parsedString;
      if (num > 0 && num <= 200) {
        setBpmInputValue(num);
      }
    }
  }

  return (
    <Container className="d-flex align-items-center">
      <span className="w-100">
        <Row className="d-flex justify-content-center w-100 row-metronome-lights">
          <Col xs={4} className="text-center">
            <input value={bpmInputValue} className="input-bpm" onChange={handleChange} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center w-100 row-metronome-lights">
          <Col xs={6} className="">
            <MetronomeLightController tick={tick} length={4} />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center w-100">
          <Col xs={6} className="d-flex justify-content-center">
            <Button style={{ backgroundColor: "black", border: "none" }} onClick={togglePlayStop}>{!playStatus ? "Play" : "Stop"}</Button>
          </Col>
        </Row>
      </span>
    </Container>

  );
}

export default App;
