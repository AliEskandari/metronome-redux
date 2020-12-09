import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { play, stop, tick } from "../store/reducer"

class ConnectedPlayButton extends React.Component {

    /**
     * Toggle play stop
     */
    togglePlayStop = () => {
        console.log("toggling play stop");
        !this.props.playStatus ? this.start() : this.stop();
    }

    /**
     * Sets tick to 0 and creats timer loop to increment tick.
     */
    startTimer = () => {
        console.log("play at bpm:", this.props.bpm);

        this.props.setTick(0); // cause re-render => play button: "Stop", metronome lights: 1st active
        let mspb = 60000 / this.props.bpm;
        this.interval = setInterval(() => {
            this.props.setTick(this.props.tick + 1) // 1st iteration will run after interval time
        }, mspb);
    }

    /**
     * Clears timer loop, set's tick to -1, leads to re-render.
     */
    resetTimer = () => {
        clearInterval(this.interval);
        this.props.setTick(-1) // cause re-render of play button (to "play") and lights (to blank lights)
    }

    start = () => {
        this._interval = requestAnimationFrame(this.progress);
        this.props.play(Date.now())
    }

    progress = () => {
        this.props.tick(Date.now());
        this._interval = requestAnimationFrame(this.progress);
    }

    stop() {
        cancelAnimationFrame(this._interval);
        this.props.stop();
    }

    render() {
        const { playStatus } = this.props;
        return (
            <Button onKeyDown={(event) => event.preventDefault()} size="lg" onClick={this.togglePlayStop}>
                {!playStatus ? "Play" : "Stop"}
            </Button>
        )
    }

}

const select = (state) => { return { playStatus: state.playStatus } }
const mapDispatchToProps = { play, stop, tick }

const PlayButton = connect(select, mapDispatchToProps)(ConnectedPlayButton);
export default PlayButton;