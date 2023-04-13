import React from "react";
import "./modal.css"
import PetsList from "../../pets-list.json";

const ModalW = ({ active, setActive, idCard }) => {
    console.log(PetsList[2].inoculations.join(" "))
    return (
        <>
            <div class={active ? "modal mactive" : "modal"} >
                <div class={active ? "modalContent mactive" : "modalContent"} onClick={e => e.stopPropagation()}>
                    <img src={PetsList[idCard].img} alt={PetsList[idCard].name} />
                    <div className="info">
                        <div className="name"><h3>{PetsList[idCard].name}</h3></div>
                        <div className="breed"><h4>{PetsList[idCard].type + " - " + PetsList[idCard].breed}</h4></div>
                        <div className="description">{PetsList[idCard].description}</div>
                        <ul class="points">
                            <li class="age"><p>Age: </p>{PetsList[idCard].age}</li>
                            <li class="inoculations"><p>Inoculations: </p>{PetsList[idCard].inoculations.join(", ")}</li>
                            <li class="diseases"><p>Diseases: </p>{PetsList[idCard].diseases.join(", ")}</li>
                            <li class="parasites"><p>Parasites: </p>{PetsList[idCard].parasites.join(", ")}</li>
                        </ul>
                    </div>
                </div>
                <button className="close" onClick={() => setActive(false)}></button>
            </div>
        </>
    );
}
export default ModalW;