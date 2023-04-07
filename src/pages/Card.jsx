import React, { Component } from "react";

function cap(str) {
    return str.replace(/(^|\s)\S/g, function (a) { return a.toUpperCase() })
}

export default class Card extends Component {
    render() {
        return (
            <>
                <div class={`card${this.props.page}`}>
                    <img src={`images/pets-${this.props.name}.png`} alt={`${this.props.name}`} />
                    <p>{cap(this.props.name)}</p>
                    <button class={`learn${this.props.page}`}>Learn more</button>
                </div>
            </>
        );
    }
};