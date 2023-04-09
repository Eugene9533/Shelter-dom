import React from "react";

const PetsCollection = [
    { petName: "Katrine", url: "../images/pets-katrine.png" },
    { petName: "Jennifer", url: "../images/pets-jennifer.png" },
    { petName: "Woody", url: "../images/pets-woody.png" },
    { petName: "Sophia", url: "../images/pets-sophia.png" },
    { petName: "Timmy", url: "../images/pets-timmy.png" },
    { petName: "Charly", url: "../images/pets-charly.png" },
    { petName: "Scarlet", url: "../images/pets-scarlet.png" },
    { petName: "Freddie", url: "../images/pets-freddie.png" },
];

class Card extends React.Component {

    render() {
        return (
            <>
                <div class="card" id={`${this.props.idpage}`}>
                    <img src={`${PetsCollection[this.props.idCard].url}`} alt={`${PetsCollection[this.props.idCard].petName}`} />
                    <p>{`${PetsCollection[this.props.idCard].petName}`}</p>
                    <button class="learn">Learn more</button>
                </div>
            </>
        );
    }
};
export default Card;