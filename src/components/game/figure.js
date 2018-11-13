import React from 'react';

import '../../styles/hang.css';

export class Figure extends React.Component {
  render() {
    const wrongGuesses = this.props.wrongGuesses;

    return (
      <div className="hangman-image">
        <img src="images/hangman-stand.png" alt="Hangman Stand" className="hangman-stand"></img>
        <span className="stick-figure">
          <img src="images/hangman-head.png" alt="Hangman Head" className={(wrongGuesses > 0) ? "stick-head" : "stick-head hide-img"}></img>
          <img src="images/hangman-body.png" alt="Hangman Body" className={(wrongGuesses > 1) ? "stick-body" : "stick-body hide-img"}></img>
          <img src="images/hangman-arm.png" alt="Hangman Right Arm" className={(wrongGuesses > 2) ? "stick-right-arm" : "stick-right-arm hide-img"}></img>
          <img src="images/hangman-arm.png" alt="Hangman Left Arm" className={(wrongGuesses > 3) ? "stick-left-arm" : "stick-left-arm hide-img"}></img>
          <img src="images/hangman-leg.png" alt="Hangman Right Leg" className={(wrongGuesses > 4) ? "stick-right-leg" : "stick-right-leg hide-img"}></img>
          <img src="images/hangman-leg.png" alt="Hangman Left Leg" className={(wrongGuesses > 5) ? "stick-left-leg" : "stick-left-leg hide-img"}></img>
        </span>
      </div>
    )
  }
}

export default Figure;