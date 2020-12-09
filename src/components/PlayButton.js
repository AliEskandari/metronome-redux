import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { togglePlayStatus, tick } from "../store/reducer"

class ConnectedPlayButton extends React.Component {
    render() {
        const { playStatus } = this.props;
        return (
            <Button onKeyDown={(event) => event.preventDefault()} size="lg" onClick={this.props.togglePlayStatus}>
                {!playStatus ? "Play" : "Stop"}
            </Button>
        )
    }

}

const select = (state) => { return { playStatus: state.playStatus } }
const mapDispatchToProps = { togglePlayStatus, tick }

const PlayButton = connect(select, mapDispatchToProps)(ConnectedPlayButton);
export default PlayButton;