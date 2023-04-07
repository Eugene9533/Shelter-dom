import { HashLink } from 'react-router-hash-link';
import Card from './Card';

function Home() {
    return (
        <>
            <div class="start-screen">
                <div class="start">
                    <div class="content">
                        <h2 class="start-title">Not only people <br /> need a house</h2>
                        <p>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or
                            she will love you more than anybody else in the world, you will see!</p>
                        <HashLink smooth to='#pets'>
                            <button class="btn-start primary">Make a friend</button>
                        </HashLink>
                    </div>
                    <img src="images/start-screen-puppy.png" alt="puppy" />
                </div>
            </div>
            <div class="about" id="about">
                <div class="about-main">
                    <div class="about-content">
                        <img src="images/about-pets.png" alt="About pets" />
                        <div class="about-container">
                            <h3 class="about-title">About the shelter <br /> “Cozy House”</h3>
                            <p>Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of
                                them will find a family. The others will continue to live with us and will be waiting
                                for a lucky chance to become dearly loved.</p>
                            <p>We feed our wards with the best food and make sure that they do not get sick, feel
                                comfortable (including psychologically) and well. We are supported by 87 volunteers and
                                28 employees of various skill levels. About 12% of the animals are taken by the shelter
                                staff. Taking care of the animals, they become attached to the pets and would hardly
                                ever leave them alone.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pets" id="pets">
                <div class="pets-main">
                    <div class="content">
                        <h3 class="title">Our friends who<br /> are looking for a house</h3>
                        <div class="slider">
                            <button class="btn-slider left"><img src="icons/Arrow-left.svg" alt="arrow left" /></button>
                            <div class="pets-cards">
                                <Card name="katrine" page="" />
                                <Card name="jennifer" page="" />
                                <Card name="woody" page="" />
                            </div>
                            <button class="btn-slider right"><img src="icons/Arrow-right.svg" alt="arrow right" /></button>
                        </div>
                        <HashLink to='/Pets#pets'>
                            <button class="btn-rest primary">Get to know the rest</button>
                        </HashLink>
                    </div>
                </div>
            </div>
            <div class="help" id="help">
                <div class="help-main">
                    <div class="content">
                        <h3 class="title">How you can help<br /> our shelter</h3>
                        <div class="container">
                            <div class="item">
                                <img src="icons/icon-pet-food.svg" alt="food" />
                                <p>Pet food</p>
                            </div>
                            <div class="item">
                                <img src="icons/icon-transportation.svg" alt="transport" />
                                <p>Transportation</p>
                            </div>
                            <div class="item">
                                <img src="icons/icon-toys.svg" alt="toys" />
                                <p>Toys</p>
                            </div>
                            <div class="item">
                                <img src="icons/icon-bowls-and-cups.svg" alt="bowl" />
                                <p>Bowls and cups</p>
                            </div>
                            <div class="item">
                                <img src="icons/icon-shampoos.svg" alt="shampoo" />
                                <p>Shampoos</p>
                            </div>
                            <div class="item">
                                <img src="icons/icon-vitamins.svg" alt="vitamins" />
                                <p>Vitamins</p>
                            </div>
                            <div class="item">
                                <img src="icons/icon-medicines.svg" alt="medicines" />
                                <p>Medicines</p>
                            </div>
                            <div class="item">
                                <img src="icons/icon-collars-leashes.svg" alt="collar" />
                                <p>Collars / leashes</p>
                            </div>
                            <div class="item">
                                <img src="icons/icon-sleeping-area.svg" alt="house" />
                                <p>Sleeping areas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="donation">
                <div class="donation-main">
                    <div class="donation-content">
                        <img src="images/donation-dog.png" alt="Donation dog" height="100%" />
                        <div class="donation-container">
                            <h3 class="donation-title">You can also <br />make a donation</h3>
                            <h5>Name of the bank / Type of bank account</h5>
                            <a href="##">
                                <div class="bank-card">
                                    <img src="icons/credit-card.svg" alt="credit card" />
                                    <h4>8380 2880 8028 8791 7435</h4>
                                </div>
                            </a>
                            <p>Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a
                                ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et
                                vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Home;