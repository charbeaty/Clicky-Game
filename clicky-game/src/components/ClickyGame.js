import React from "react";

// const $root = document.querySelector("#root");

// let score;
// let topScore;

// const makeGuess = () => {
//     const $score = document.querySelector("#root p");
//     $score.textContent = "Score: " + score + " | " + "Top Score: " + topScore;

//     // put an if statement here to increase score and keep track of
//        // Top Score. 
// };

// const Image = function() {
//     this.element = document.createElement("div");
//     this.element.className = "image" 
//     this.value = 0;

//     this.element.addEventListener(
//         "click",
//         () => {
//             score += this.value;
//             makeGuess();
//         },
//         false
//     );
// };

// Image.prototype.render = function() {
// // put something in here that will keep of track of images that have been
//    // chosen, and then shuffle them again.
// };

// const playRound = () => {
//     const fragment = document.createDocumentFragment();
//     const $score = document.createElement("p");
//     topScore = Math.floor(Math.random());
//     score = 0;
//     $score.textContent = "Score: " + score + " | " + "Top Score: " + topScore;
//     images
//         .sort(())
//         .forEach(image => image.render(fragment));
//         fragment.appendChild($score);
//         $root.innerHTML = "";
//         $root.appendChild(fragment);
// };

// playRound();


function ClickyGame() {
  return (
    <div className="container">
<ul className="nav justify-content-center">
  <li className="nav-item">
    <a className="nav-link active" href="./components/ClickyGame">Clicky Game</a>
  </li> <hr>
  </hr>
  <li className="nav-item">Click an image to begin
  </li>
  <hr>
  </hr>
  <li className="nav-item">Score: | Top Score: </li>
</ul>
    </div>
  )
}

export default ClickyGame;
