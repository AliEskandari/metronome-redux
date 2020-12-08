import React, { useState, useRef } from 'react';
import './App.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import PlayButton from "./components/PlayButton";
import VolumeBar from "./components/VolumeBar";
import MetronomeLightController from './components/MetronomeLightController'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { connect } from "react-redux";
import { togglePlayStatus } from "./store/reducer";

function ConnectedApp(props) {
  const interval = useRef();
  const bpm = useRef(100);
  const [bpmInputValue, setBpmInputValue] = useState(parseInt(bpm.current));
  const [tick, setTick] = useState(-1); // must be state variable to re-render light controller

  /**
   * Sets tick to 0 and creats timer loop to increment tick.
   */
  const startTimer = () => {
    console.log("play at bpm:", bpm.current);

    setTick(0); // cause re-render => play button: "Stop", metronome lights: 1st active
    let ms = 60000 / bpm.current;
    interval.current = setInterval(() => {
      setTick(tick => tick + 1); // 1st iteration will run after interval time
    }, ms);
  }

  /**
   * Clears timer loop, set's tick to -1, leads to re-render.
   */
  const resetTimer = () => {
    clearInterval(interval.current);
    setTick(-1); // cause re-render of play button (to "play") and lights (to blank lights)
  }


  /**
   * Runs when the input value changes. Does NOT run on initial
   * render. Will set state var to either empty string or num
   * between specified values. Otherwise, input value is unchanged.
   * Then set bpm to integer from input value. Then plays the timer
   * if the status was already playing.
   */
  const handleBpmInputChange = (e) => {
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
        if (bpm.current > 0 && bpm.current <= 200 && props.playStatus === true) {
          startTimer(); // set tick to 1, start timer
          // Render with tick: 1, bpm: new bpm,
        }
      }
    }
  }

  /**
   * Change bpm depending on delta
   */
  const handleBpmChange = (e, delta) => {
    bpm.current = bpm.current + delta;
    setBpmInputValue(bpm.current);
    resetTimer();
    if (props.playStatus === true) {
      startTimer();
    }
  }

  /**
   * Prevents default. Used on buttons.
   */
  const preventDefault = (e) => {
    e.preventDefault();
  }

  return (
    <Container className="d-flex align-items-center justify-content-between flex-wrap">

      <KeyboardEventHandler handleKeys={['space']} onKeyEvent={props.togglePlayStatus} handleFocusableElements={true} />

      <Row>

        {/* Spacer: None on mobile, Left for medium */}
        <Col md={2} className="d-none d-sm-none d-md-block">
        </Col>

        {/* Metronome full row on mobile, Middle for medium */}
        <Col xs={12} md={8}>
          <Row className="d-flex align-items-center justify-content-between">
            <Col xs={{ span: 3, order: 2 }} lg={{ span: 1, order: 1 }} className="d-flex px-3 px-lg-0 justify-content-center">
              <Button size="lg" block onKeyDown={preventDefault} onClick={(e) => handleBpmChange(e, -5)}>-5</Button>
            </Col>
            <Col xs={{ span: 3, order: 3 }} lg={{ span: 1, order: 2 }} className="d-flex px-3 px-lg-0 justify-content-center">
              <Button size="lg" block onKeyDown={preventDefault} onClick={(e) => handleBpmChange(e, -1)}>-</Button>
            </Col>

            <Col xs={{ span: 12, order: 1 }} lg={{ span: 6, order: 3 }} className="text-center">
              <input value={bpmInputValue} className="input-bpm" onChange={handleBpmInputChange} />
            </Col>

            <Col xs={{ span: 3, order: 4 }} lg={{ span: 1, order: 4 }} className="d-flex px-3 px-lg-0 justify-content-center">
              <Button size="lg" block onKeyDown={preventDefault} onClick={(e) => handleBpmChange(e, 1)}>+</Button>
            </Col>
            <Col xs={{ span: 3, order: 5 }} lg={{ span: 1, order: 5 }} className="d-flex px-3 px-lg-0 justify-content-center">
              <Button size="lg" block onKeyDown={preventDefault} onClick={(e) => handleBpmChange(e, 5)}>+5</Button>
            </Col>
          </Row>

          <Row className="d-flex justify-content-center row-metronome-lights mt-5 mt-lg-0">
            <Col xs={8} sm={6} md={8} lg={6} className="">
              <MetronomeLightController tick={tick} length={4} />
            </Col>
          </Row>

          <Row className="d-flex justify-content-center">
            <Col xs={6} className="d-flex justify-content-center">
             <PlayButton />
            </Col>
          </Row>
        </Col>

        {/* Volume: full row on mobile, Right for medium */}
        <Col xs={12} md={{ span: 1, offset: 1 }} className="d-flex justify-content-center py-4">
            <VolumeBar />
        </Col>
      </Row>
    </Container>
  );
}

const App = connect(null, { togglePlayStatus })(ConnectedApp);

export default App;
