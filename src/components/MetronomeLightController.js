import React, { Component } from 'react';
import MetronomeLight from './MetronomeLight'

class MetronomeLightController extends React.Component {
    constructor(props) {
        super(props);
        this.activeIndex = -1;
    }

    /**
     * Sets activeIndex to next index. Or resets activeIndex if tick is 0.
     */
    setActiveIndex = () => {
        if (this.props.tick === 0) {
            this.activeIndex = -1;
        } else {
            this.activeIndex = (this.activeIndex + 1) % this.props.length;
        }
    }

    render() {
        console.log("MetronomeLightController Render - tick:", this.props.tick);

        this.setActiveIndex();

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

export default MetronomeLightController;