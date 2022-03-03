import React from 'react';

const Projects = () => {
    return (
        <section id="projects" class="projects">
        <h2>
            Projects
        </h2>

        <div class="card-group row-fluid">

        <div class="card span-6">
            <img class="card-img-top" src="./assets/images/run-buddy.jpg" alt="Page preview of Run Buddy site" width="350" height="250" />
            <div class="card-body">
              <h3 class="card-title">Run Buddy</h3>
              <p class="card-text">Exercise website for users to enroll with a personal trainer (CSS & HTML)</p>
              <a href="https://brt9029.github.io/run-buddy/" class="btn">Visit the site!</a>
            </div>
          </div>

          <div class="card span-6">
            <img class="card-img-top" src="./assets/images/robot-gladiators.jpg" alt="Rock em sock em robots" width="300" height="200" />
            <div class="card-body">
              <h3 class="card-title">Robot Gladiators</h3>
              <p class="card-text">Text based battle simulator (JS & HTML)</p>
              <a href="https://brt9029.github.io/robot-gladiators/" class="btn">Try it out!</a>
            </div>
          </div>

          <div class="card span-6">
            <img class="card-img-top" src="./assets/images/block-breaker.PNG" alt="In-game screenshot of Block Breaker" width="300" height="200" />
            <div class="card-body">
              <h3 class="card-title">Block Breaker</h3>
              <p class="card-text">Breakout game made using Unity & C#</p>
              <a href="https://brt9029.itch.io/block-breaker" class="btn">Try it out!</a>
            </div>
          </div>

          <div class="card span-6">
            <img class="card-img-top" src="./assets/images/tech-port.png" alt="Web preview of Tech Port" width="300" height="200" />
            <div class="card-body">
              <h3 class="card-title">Tech Port</h3>
              <p class="card-text">
                My first Team Project! We used JQuery, Bulma CSS, NY Times API, and Virus Total API.
                The site offers a real-time URL scanner as well as some of the latest NY Times 
                Tech articles to look at while waiting for the scan to finish!
                </p>
              <a href="https://github.com/tgtiburon/Web_Security" class="btn">Visit GitHub Repository</a>
            </div>
          </div>

          <div class="card span-6">
            <img class="card-img-top" src="./assets/images/foodie-spot.png" alt="Web preview of Foodie Spot" width="300" height="200" />
            <div class="card-body">
              <h3 class="card-title">Foodie Spot</h3>
              <p class="card-text">
                My Second Team Project! This time we used everything learned previously in order to create a Full Stack web application.
                We created a Food sharing blog site allowing users to share their experiences with already existing recipes.
                </p>
              <a href="https://mighty-mesa-79383.herokuapp.com/" class="btn">Check out the deployed site!</a>
            </div>
          </div>

        </div>

    </section>
    )
}