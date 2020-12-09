import React from "react";
import { connect } from "react-redux";
import { tick } from "../store/reducer"

class ConnectedTimer extends React.Component {

    /**
     * Creates timer loop to increment tick.
     */
    startTimer = () => {
        this.interval = setInterval(() => {
            this.props.tick(Date.now());
        });
    }

    /**
     * Clears timer loop
     */
    stopTimer = () => {
        clearInterval(this.interval);
    }

    render() {
        this.props.playStatus ? this.startTimer() : this.stopTimer();
        return null;
    }

}

const select = (state) => { return { playStatus: state.playStatus } }
const mapDispatchToProps = { tick }

const Timer = connect(select, mapDispatchToProps)(ConnectedTimer);
export default Timer;