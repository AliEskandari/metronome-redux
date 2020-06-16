import React, { Component } from 'react';
import styled from 'styled-components';
import UIfx from 'uifx'
import clickAudio from '../sounds/clickSound.wav'

const click = new UIfx(
    clickAudio,
    {
        // volume: 0.9, // number between 0.0 ~ 1.0
        throttleMs: 100
    }
)

const Dot = styled.span`
    height: 50px;
    width: 50px;
    background-color: ${props => props.active ? "#000" : "#bbb"};
    border-radius: 50%;
    display: inline-block;
`;

class MetronomeLight extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.active === nextProps.active) {
            return false;
        }
        return true;
    }

    render() {
        console.log("Light rendering");
        if (this.props.active) {
            console.log("sound");
            click.setVolume(this.props.volume).play();
        }
        return (
            <Dot active={this.props.active}></Dot>
        );
    }
}

export default MetronomeLight;