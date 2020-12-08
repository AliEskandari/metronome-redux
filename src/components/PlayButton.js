import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { togglePlayStatus } from "../store/reducer"

class ConnectedPlayButton extends React.Component {

    /**
     * Toggle play stop
     */
    togglePlayStop = () => {
        console.log("toggling play stop");
        this.props.togglePlayStatus();
    }

    render () {
        const { playStatus } = this.props;
        return (
            <Button onKeyDown={(event) => event.preventDefault()} size="lg" onClick={this.togglePlayStop}>
                {!playStatus ? "Play" : "Stop"}
            </Button>
        )
    }

}

const select = (state) => {
    return {
        playStatus: state.playStatus
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        togglePlayStatus: () => dispatch(togglePlayStatus())
    };
}

const PlayButton = connect(select, mapDispatchToProps)(ConnectedPlayButton);

export default PlayButton;