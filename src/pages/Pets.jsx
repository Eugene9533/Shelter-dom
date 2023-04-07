import Card from './Card';
import '../pets.css';

function Pets() {
    return (
        <>
            <div class="start-screen" />
            <div class="pets" id="pets">
                <div class="pets-main">
                    <div class="content">
                        <h3 class="title">Our friends who<br /> are looking for a house</h3>
                        <div class="slider">
                            <div class="pets-cards">
                                <Card name="katrine" page="P" />
                                <Card name="jennifer" page="P" />
                                <Card name="woody" page="P" />
                                <Card name="sophia" page="P" />
                                <Card name="timmy" page="P" />
                                <Card name="charly" page="P" />
                                <Card name="scarlet" page="P" />
                                <Card name="freddie" page="P" />
                            </div>
                        </div>
                        <div class="paginator">
                            <button class="inactive"></button>
                            <button class="inactive"></button>
                            <button class="active">1</button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Pets;