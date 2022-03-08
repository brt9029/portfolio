import React from 'react';
import selfie from '../assets/self-portrait.png';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="card" style={{width: "50%"}}>
                <div className="row no-gutters">
                    <div className="col-sm-5">
                        <img className="card-img" src={selfie} alt="me" />
                    </div>
                    <div className="col-sm-7">
                        <div className="card-body">
                            <h2 className="card-title">About me</h2>
                            <p className="card-text">
                                My name is Bryant. I was born in New York City and spent my teen / young adulthood in Grand Rapids, MI.
                                For as long as I can remember gaming has always interested me, mechanics specifically. This motivated me to push myself to learn as much as I could about every type of game I could get my hands on.
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