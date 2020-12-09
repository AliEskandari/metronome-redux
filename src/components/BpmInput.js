import React from "react";
import { connect } from "react-redux";
import { setBpm } from "../store/reducer"

class ConnectedBpmInput extends React.Component {

    /**
     * Runs when the input value changes. Does NOT run on initial
     * render. Will set state var to either empty string or num
     * between specified values. Otherwise, input value is unchanged.
     * Then set bpm to integer from input value. Then plays the timer
     * if the status was already playing.
     */
    handleBpmInputChange = (e) => {
        let inputString = e.target.value;
        if (inputString === "") {
            this.props.setBpm(0);
        }

        let parsedString = parseInt(inputString)
        if (!isNaN(parsedString)) {
            let num = parsedString;
            if (num > 0 && num <= 200) {
                this.props.setBpm(num);
            }
        }
    }

    render() {
        if (this.props.bpm === 0) {
            this.bpmInputValue = "";
        } else {
            this.bpmInputValue = parseInt(this.props.bpm);
        }
        return (
            <input value={this.bpmInputValue} className="input-bpm" onChange={this.handleBpmInputChange} />
        )
    }

}

const select = (state) => {
    return {
        bpm: state.bpm,
        playStatus: state.playStatus
    }
}

const mapDispatchToProps = { setBpm }

const BpmInput = connect(select, mapDispatchToProps)(ConnectedBpmInput);

export default BpmInput;