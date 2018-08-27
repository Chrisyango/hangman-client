import React from 'react';

import '../../styles/navigation.css';

export class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <button onClick={event => {
          event.preventDefault();
          this.props.toggleInstructions();
        }}>Show Instructions</button>
        <div className="game-settings">
          <button>Set Difficulty</button>
          <button>New Game</button>
        </div>
      </nav>
    )
  }
}

export default Navigation;