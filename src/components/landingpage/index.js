import React from 'react';

import '../../styles/landingpage.css';

export class LandingPage extends React.Component {
  createSpaces() {
    let spaces = [];
    if (this.props.word) {
      for (let i = 0; i < this.props.word.length; i++) {
        spaces.push(
          <p className="spaces" key={i}></p>
        )
      }
    }
    return spaces;
  }

  render() {
    console.log(this.props.word)
    return (
      <div className="landingpage">
        <h1>Hangman</h1>
        {this.createSpaces()}
      </div>
    )
  }
}

export default LandingPage;