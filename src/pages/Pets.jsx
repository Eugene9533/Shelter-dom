import './style.css';
function Pets() {
    return (
        <>
            <div class="start-screen">

            </div>
            <div class="pets" id="pets">
                <div class="pets-main">
                    <div class="content">
                        <h3 class="title">Our friends who<br /> are looking for a house</h3>
                        <div class="slider">
                            <div class="pets-cards">
                                <div class="card">
                                    <img src="./images/pets-katrine.png" alt="Katrine" />
                                    <p>Katrine</p>
                                    <button class="learn">Learn more</button>
                                </div>
                                <div class="card">
                                    <img src="./images/pets-jennifer.png" alt="Jennifer" />
                                    <p>Jennifer</p>
                                    <button class="learn">Learn more</button>
                                </div>
                                <div class="card">
                                    <img src="./images/pets-woody.png" alt="Woody" />
                                    <p>Woody</p>
                                    <button class="learn">Learn more</button>
                                </div>
                                <div class="card">
                                    <img src="./images/pets-sophia.png" alt="Sophia" />
                                    <p>Sophia</p>
                                    <button class="learn">Learn more</button>
                                </div>
                                <div class="card">
                                    <img src="./images/pets-timmy.png" alt="Timmy" />
                                    <p>Timmy</p>
                                    <button class="learn">Learn more</button>
                                </div>
                                <div class="card">
                                    <img src="./images/pets-charly.png" alt="Charly" />
                                    <p>Charly</p>
                                    <button class="learn">Learn more</button>
                                </div>
                                <div class="card">
                                    <img src="./images/pets-scarlett.png" alt="Scarlett" />
                                    <p>Scarlett</p>
                                    <button class="learn">Learn more</button>
                                </div>
                                <div class="card">
                                    <img src="./images/pets-freddie.png" alt="Freddie" />
                                    <p>Freddie</p>
                                    <button class="learn">Learn more</button>
                                </div>
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