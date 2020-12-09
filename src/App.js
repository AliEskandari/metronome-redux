import React from 'react';
import './App.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import PlayButton from "./components/PlayButton";
import VolumeBar from "./components/VolumeBar";
import BpmInput from "./components/BpmInput";
import MetronomeLightController from './components/MetronomeLightController'
import KeyboardEventHandler from 'react-keyboard-event-handler'
import { connect } from "react-redux";
import { togglePlayStatus, incrementBpm } from "./store/reducer";

function ConnectedApp(props) {

  /**
   * Change bpm depending on delta
   */
  const handleBpmChange = (e, delta) => {
    props.incrementBpm(delta)
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
              <BpmInput />
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
              <MetronomeLightController length={4} />
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

const App = connect(null, { togglePlayStatus, incrementBpm })(ConnectedApp);

export default App;
