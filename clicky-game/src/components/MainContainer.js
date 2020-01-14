import React, { Component } from 'react';
import ImageCard from './ImageCard';
import images from '../images.json';

class MainContainer extends Component {
    state = {
        images,
        message: "Click a villain to begin!",
        score: 0,
        topScore: 0
    };
    handleClick = (id, clicked) => {
        const imageOrder = this.state.images;

        if(clicked){
            imageOrder.forEach((image, index)=>{
                imageOrder[index].clicked = false;
            });
            return this.setState({
                image: imageOrder.sort(() => Math.random() - 0.5),
                message: "You guessed WRONG! -- Click an image to try again.",
                score: 0
            })
        }
        else{
            imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You guessed correctly!",
				score: newScore,
				topScore: newTopScore,
			})
        }
    }

    render(){
        return(
            <div className="container-fluid mainCardContainer">
			<div className="gameMessage text-center">
						<p>{this.state.message}</p>
					</div>
					<div className="gameScores text-center">
						<p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
                        <bR></bR>
					</div>
				<div className="container">
					
					<div className="row">
					{this.state.images.map(image => (
						<ImageCard
							key={image.id}
							id={image.id}
							name={image.name}
							clicked={image.clicked}
							image={image.image}
							handleClick={this.handleClick}
							/>
					))}
					</div>
					
				</div>
			</div>
        )
    }
}

export default MainContainer;