import './Home.css';
function Home() {
    return (
        <div>
            <header>
                <div class="header">
                    <div class="container">
                        <div class="logo">
                            <a href="#">
                                <h1 class="title">Cozy House</h1>
                            </a>
                            <p class="subtitle">Shelter for pets in Boston</p>
                        </div>
                        <nav>
                            <ul class="list">
                                <li class="item">
                                    <a href="#about" class="link select">About the shelter</a>
                                </li>
                                <li class="item">
                                    <a href="/pages/pets/pets.html" class="link">Our pets</a>
                                </li>
                                <li class="item">
                                    <a href="#help" class="link">Help the shelter</a>
                                </li>
                                <li class="item">
                                    <a href="#contacts" class="link">Contacts</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <main class="main">
                <div class="start-screen">
                    <div class="start">
                        <div class="content">
                            <h2 class="start-title">Not only people <br /> need a house</h2>
                            <p>We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or
                                she will love you more than anybody else in the world, you will see!</p>
                            <a href="#pets">
                                <button class="btn-start primary">Make a friend</button>
                            </a>
                        </div>
                        <img src="/images/start-screen-puppy.png" alt="puppy" />
                    </div>
                </div>
                <div class="about" id="about">
                    <div class="about-main">
                        <div class="about-content">
                            <img src="/images/about-pets.png" alt="About pets" />
                            <div class="about-container">
                                <h3 class="about-title">About the shelter “Cozy House”</h3>
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
                                <button class="btn-slider left"><img src="/icons/Arrow-left.svg" alt="arrow left" /></button>
                                <div class="pets-cards">
                                    <div class="card">
                                        <img src="/images/pets-katrine.png" alt="Katrine" />
                                        <p>Katrine</p>
                                        <button class="learn">Learn more</button>
                                    </div>
                                    <div class="card">
                                        <img src="/images/pets-jennifer.png" alt="Jennifer" />
                                        <p>Jennifer</p>
                                        <button class="learn">Learn more</button>
                                    </div>
                                    <div class="card">
                                        <img src="/images/pets-woody.png" alt="Woody" />
                                        <p>Woody</p>
                                        <button class="learn">Learn more</button>
                                    </div>
                                </div>
                                <button class="btn-slider right"><img src="/icons/Arrow-right.svg" alt="arrow right" /></button>
                            </div>
                            <a href="/pages/pets/pets.html">
                                <button class="btn-rest primary">Get to know the rest</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="help" id="help">
                    <div class="help-main">
                        <div class="content">
                            <h3 class="title">How you can help<br /> our shelter</h3>
                            <div class="container">
                                <div class="item">
                                    <img src="/icons/icon-pet-food.svg" alt="food" />
                                    <p>Pet food</p>
                                </div>
                                <div class="item">
                                    <img src="/icons/icon-transportation.svg" alt="transport" />
                                    <p>Transportation</p>
                                </div>
                                <div class="item">
                                    <img src="/icons/icon-toys.svg" alt="toys" />
                                    <p>Toys</p>
                                </div>
                                <div class="item">
                                    <img src="/icons/icon-bowls-and-cups.svg" alt="bowl" />
                                    <p>Bowls and cups</p>
                                </div>
                                <div class="item">
                                    <img src="/icons/icon-shampoos.svg" alt="shampoo" />
                                    <p>Shampoos</p>
                                </div>
                                <div class="item">
                                    <img src="/icons/icon-vitamins.svg" alt="vitamins" />
                                    <p>Vitamins</p>
                                </div>
                                <div class="item">
                                    <img src="/icons/icon-medicines.svg" alt="medicines" />
                                    <p>Medicines</p>
                                </div>
                                <div class="item">
                                    <img src="/icons/icon-collars-leashes.svg" alt="collar" />
                                    <p>Collars / leashes</p>
                                </div>
                                <div class="item">
                                    <img src="/icons/icon-sleeping-area.svg" alt="house" />
                                    <p>Sleeping areas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="donation">
                    <div class="donation-main">
                        <div class="donation-content">
                            <img src="/images/donation-dog.png" alt="Donation dog" />
                            <div class="donation-container">
                                <h3 class="donation-title">You can also <br />make a donation</h3>
                                <h5>Name of the bank / Type of bank account</h5>
                                <a href="##">
                                    <div class="bank-card">
                                        <img src="/icons/credit-card.svg" alt="credit card" />
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
            </main>
            <footer id="contacts">
                <div class="footer">
                    <div class="content">
                        <div class="contacts">
                            <h3>For questions and suggestions</h3>
                            <a href="https://mail.yandex.ru/" target="_blank">
                                <div class="item">
                                    <img src="/icons/icon-email.svg" alt="mail" />
                                    <h4> email@shelter.com</h4>
                                </div>
                            </a>
                            <a href="tel:+136745677554">
                                <div class="item">
                                    <img src="/icons/icon-phone.svg" alt="phone" />
                                    <h4>+13 674 567 75 54</h4>
                                </div>
                            </a>
                        </div>
                        <div class="locations">
                            <h3>We are waiting for your visit</h3>
                            <a href="https://www.google.com/maps/place/1+Centre+St+Terrace,+Boston,+MA+02119,+%D0%A1%D0%A8%D0%90/data=!4m2!3m1!1s0x89e37a29f109ad67:0x3c3f6a5c559c7586?sa=X&amp;ved=2ahUKEwiz-5qfxZ33AhWwxIsKHakhB0AQ8gF6BAgMEAE" target="_blank">
                                <div class="item">
                                    <img src="/icons/icon-marker.svg" alt="marker" />
                                    <h4>1 Central Street, Boston (entrance from the store)</h4>
                                </div>
                            </a>
                            <a href="https://www.google.com/maps/place/18+S+Park+Cres,+London+SE6+1JW,+%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F/data=!4m2!3m1!1s0x47d8a9e35f520529:0x8d1b5611767e32ec?sa=X&amp;ved=2ahUKEwjuxKfOxZ33AhUulIsKHYSzAhgQ8gF6BAgMEAE" target="_blank">
                                <div class="item">
                                    <img src="/icons/icon-marker.svg" alt="marker" />
                                    <h4>18 South Park, London</h4>
                                </div>
                            </a>
                        </div>
                        <img src="/images/footer-puppy.png" alt="puppy" />
                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Home;