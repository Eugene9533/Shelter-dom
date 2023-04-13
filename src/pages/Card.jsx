import React from "react";
import ModalW from "./Modal/ModalW";
import PetsList from '../pets-list.json';

const Card = ({ idCard, idpage }) => {
    const [modalActive, setModalActive] = React.useState(false);
    return (
        <>
            <div class="card" id={`${idpage}`}>
                <img src={PetsList[idCard].img} alt={PetsList[idCard].name} />
                <p>{PetsList[idCard].name}</p>
                <button class="learn" onClick={() => setModalActive(true)}>Learn more</button>
                <ModalW active={modalActive} setActive={setModalActive} idCard={idCard} />
            </div>
        </>
    );
}
export default Card;