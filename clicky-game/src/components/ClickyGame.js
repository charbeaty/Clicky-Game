import React from "react";
import "./Forms/style.css"

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
<nav className="navbar fixed-top navbar-expand-lg">
  <a className="navbar-brand" href="#"><h1 className="clicky">Clicky Game</h1></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <hr>
    </hr>

  <span className="navbar-text">
      Click an image to begin
    </span>
    <hr>
    </hr>
    <span className="navbar-text">
      Score
    </span>
  </div>
 </nav>
 <hr></hr>
  <div className="jumbotron">
    <div className="container">
    <center><h1>Clicky Game</h1>
    <h2>Try to only click on each image once! Can you remember the ones you've clicked?</h2>
</center>
</div>
</div>
<main className="container">

</main>
</div>
)
}

export default ClickyGame;
