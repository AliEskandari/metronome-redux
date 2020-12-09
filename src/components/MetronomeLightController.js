import React from 'react';
import MetronomeLight from './MetronomeLight';
import { connect } from 'react-redux';

class ConnectedMetronomeLightController extends React.Component {
    constructor(props) {
        super(props);
        this.activeIndex = -1;
        this.sound = new Audio("/clickSound.mp3");
    }

    /**
     * Sets activeIndex to next index. Or resets activeIndex if tick is 0.
     */
    setActiveIndex = () => {
        if (this.props.tick === -1) {
            this.activeIndex = -1;
        } else {
            this.activeIndex = this.props.tick % this.props.length;
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.tick === nextProps.tick) {
            return false;
        }
        return true;
    }

    render() {
        this.setActiveIndex();
        console.log(`LightController Rendering \n tick: ${this.props.tick} activeIndex: ${this.activeIndex}`);

        let lights = [];
        for (let index = 0; index < this.props.length; index++) {
            let active = this.activeIndex === index;
            lights.push(
                <MetronomeLight key={index} active={active} />
            );
        }
        return (
            <span className="d-flex justify-content-between">
                {lights}
            </span>
        );
    }
}

const select = (state) => { return { volume: state.volume, tick: state.tick } };

const MetronomeLightController = connect(select)(ConnectedMetronomeLightController);
export default MetronomeLightController;