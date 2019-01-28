import React, {Component} from 'react';
import Card from './Card';
import Fighters from "./../fighters.json"
import shuffle from "shuffle-array";

class CardContainer extends Component {

    constructor(props) {
        super(props);

        // setting the state: score is at 1, fighters is pulling from the fighters.json, and we have no selected fighters yet
        this.state = {
            score: 1,
            fighters: Fighters,
            selectedFighters: []
        };
    }

    
    // when the user clicks on a fighter card
    handleClick = (e) => {

        // grab the selected figher's id
        let id = e.target.id;

        // init variable that checks if the fighter selected iss already in selectedFighters
        let exists = false;

        // loop through selected fighters and see if any ids match selected id
        this.state.selectedFighters.forEach(fighter => {

            // check if id matches
            if (fighter.id == id) {
 
                // changes variable if true
                exists = true;
            }
        })

        // checks if exists variable is true
        if (exists) {
            // game over
            this.endGame();
        }

        else {
            // loop through the fighers.json
            this.state.fighters.forEach(fighter => {
                // if the fighter id matches the selected id
                if (fighter.id == id) {
                    // add the fighter to the selected fighter array
                    this.setState({selectedFighters: [...this.state.selectedFighters, fighter]});
                    console.log(this.state.selectedFighters);

                    // update the score
                    this.updateScore();
                }
            })  
        }
        

        // shuffles the fighter deck
        this.setState({ fighters: shuffle(this.state.fighters)});
        console.log("Shuffling Fighters");

    }

    // function to update the score
    updateScore = () => {
        // set the new score
        this.setState({score: this.state.score + 1});
        // update the parent component's display
        this.props.updateCurrentScore(this.state.score);
        console.log("Score: " + this.state.score);
    }

    // function to end the game
    endGame = () => {
        console.log("End!");
        // push the current game score as the new top score 
        this.props.updateTopScore(this.state.score);
        // set the score back to 1 and the selected array to empty 
        this.setState({score: 1, selectedFighters: []});
        // update the current score to 0
        this.props.updateCurrentScore(0);
    }

    render() {
        return (
            <div className="container" id="card-container">
                <div className="row">
                    {Fighters.map(fighter => <Card src={fighter.image} key={fighter.id} id={fighter.id} alt={fighter.name} endGame={this.endGame} handleClick={this.handleClick} score={this.state.score} />)}
                </div>
            </div>
        );
    }
}

export default CardContainer;