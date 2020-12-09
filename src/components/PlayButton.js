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
        !this.props.playStatus ? this.startTimer() : this.stopTimer();
    }

    /**
     * Sets tick to 0 and creats timer loop to increment tick.
     */
    startTimer = () => {
        this.props.play(Date.now());
        this.interval = setInterval(() => {
            this.props.tick(Date.now());
        });
    }

    /**
     * Clears timer loop, set's tick to -1, leads to re-render.
     */
    stopTimer = () => {
        clearInterval(this.interval);
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