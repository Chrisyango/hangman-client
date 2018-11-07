import React from 'react';

import '../../styles/navigation.css';

export class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <button onClick={event => {
          event.preventDefault();
          this.props.setDisplay('showInstructions');
        }}>Show Instructions</button>
        <div className="game-settings">
          <button onClick={event => {
          event.preventDefault();
          this.props.setDisplay('showDifficulty');
          }}>Set Difficulty</button>
          <button onClick={event => {
          event.preventDefault();
          this.props.newGame();
          if (this.props.display !== '') {
            this.props.setDisplay('');
          }
          }}>New Game</button>
        </div>
      </nav>
    )
  }
}

export default Navigation;