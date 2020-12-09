import React, { Component } from 'react';
import styled from 'styled-components';

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
        return (
            <Dot active={this.props.active}></Dot>
        );
    }
}

export default MetronomeLight;