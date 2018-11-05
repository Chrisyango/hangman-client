import React from 'react';

import '../../styles/navigation.css';

export class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <button onClick={event => {
          event.preventDefault();
          this.props.toggleNavigation('showInstructions');
        }}>Show Instructions</button>
        <div className="game-settings">
          <button onClick={event => {
          event.preventDefault();
          this.props.toggleNavigation('showDifficulty');
          }}>Set Difficulty</button>
          <button onClick={event => {
          event.preventDefault();
          this.props.newGame();
          }}>New Game</button>
        </div>
      </nav>
    )
  }
}

export default Navigation;