import React from "react";
import { connect } from "react-redux";
import { setVolume } from "../store/reducer"

class ConnectedVolumeBar extends React.Component {

    /**
     * Set the volume
     */
    handleVolumeChange = (e) => {
        console.log("setting volume");
        this.props.setVolume(parseFloat(e.target.value));
    }

    render () {
        const { volume } = this.props;
        return (
            <input
                type="range"
                className="vert-input"
                min="0.0"
                max="1.0"
                step="0.05"
                value={volume}
                onChange={this.handleVolumeChange} />
        )
    }

}

const select = (state) => {
    return {
        volume: state.volume
    }
}

const mapDispatchToProps = { setVolume }

const VolumeBar = connect(select, mapDispatchToProps)(ConnectedVolumeBar);

export default VolumeBar;