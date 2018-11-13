import React from 'react';

import '../../styles/hang.css';

export class Figure extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    console.log(this.props.wrongGuesses);
    return (
      <div className="hangman-image">
        <img src="images/hangman-stand.png" alt="Hangman Stand" className="hangman-stand"></img>
        <span className="stick-figure">
          <img src="images/hangman-head.png" alt="Hangman Head" className="stick-head"></img>
          <img src="images/hangman-body.png" alt="Hangman Body" className="stick-body"></img>
          <img src="images/hangman-arm.png" alt="Hangman Right Arm" className="stick-right-arm"></img>
          <img src="images/hangman-arm.png" alt="Hangman Left Arm" className="stick-left-arm"></img>
          <img src="images/hangman-leg.png" alt="Hangman Right Leg" className="stick-right-leg"></img>
          <img src="images/hangman-leg.png" alt="Hangman Left Leg" className="stick-left-leg"></img>
        </span>
      </div>
    )
  }
}

export default Figure;