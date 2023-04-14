import React from "react";
import Card from './Card';
import './pets.css';

let num = [0, 1, 2, 3, 4, 5, 6, 7];
let pag = document.querySelector('.pag');
class Pets extends React.Component {
    constructor() {
        super();
        this.state = {
            numCard: num,
            x: num,
        }
    }

    prevPets = () => {
        num = num.map(item => {
            let i = item - 1;
            if (i < 0) i = 7;
            return i;
        });

        this.setState({
            numCard: num,
        });
    }

    nextPets = () => {
        num = num.map(item => {
            let i = item + 1;
            if (i > 7) i = 0;

            return i;
        });

        this.setState({
            numCard: num,
        });
    }

    paginator = () => {
        return this.props.width > 1279 ? "pag inactive" : "pag";
    }

    render() {

        return (
            <>
                <div class="start-screen" />
                <div class="pets" id="pets">
                    <div class="pets-main">
                        <div class="content">
                            <h3 class="title">Our friends who<br /> are looking for a house</h3>
                            <div class="slider">
                                <div class="pets-cards">
                                    {this.state.x.map(i => (
                                        <Card idpage="PetsPage" idCard={this.state.numCard[i]} />
                                    ))}
                                </div>
                            </div>
                            <div class="paginator">
                                <button class={this.paginator()} >&lt;&lt;</button>
                                <button class={this.paginator()} onClick={this.prevPets}>&lt;</button>
                                <button class={this.props.width}>1</button>
                                <button class={this.paginator()} onClick={this.nextPets}>&gt;</button>
                                <button class={this.paginator()} >&gt;&gt;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Pets;