import React from 'react';

const About = () => {
    return (
        <section id="about" class="about">
            <div class="card" style="width: 50%;">
                <div class="row no-gutters">
                    <div class="col-sm-5">
                        <img class="card-img" src="./assets/images/self-portrait.png" alt="picture of me" />
                    </div>
                    <div class="col-sm-7">
                        <div class="card-body">
                            <h2 class="card-title">About me</h2>
                            <p class="card-text">
                                My name is Bryant. I was born in New York City and spent my teen / young adulthood in Grand Rapids, MI.
                                For as long as I can remember gaming has always interested me, mechanics specifically. This caused me to push myself to learn as much as I could about every type of game I could get my hands on.
                                Of course this lead to gaming becoming a passion of mine, along with crossword puzzles this is why I enjoy learning exactly why and how things work/don't work the way they do in a programmatic way. <br /><br />
                                Today, I am working to become a Developer 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;