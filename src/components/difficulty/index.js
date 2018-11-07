import React from 'react';

import '../../styles/difficulty.css';

export class Difficulty extends React.Component {
  
  render() {
    return (
      <div className={(this.props.display === 'showDifficulty') ? "difficulty showDifficulty" : "difficulty"}>
        <ul className="setDifficulty">
          <li><button onClick={event => {
            event.preventDefault();
            this.props.setDifficulty('easy');
            this.props.setDisplay('');
          }}>Easy</button></li>
          <li><button onClick={event => {
            event.preventDefault();
            this.props.setDifficulty('medium');
            this.props.setDisplay('');
          }}>Medium</button></li>
          <li><button onClick={event => {
            event.preventDefault();
            this.props.setDifficulty('hard');
            this.props.setDisplay('');
          }}>Hard</button></li>
        </ul>
      </div>
    )
  }
}

export default Difficulty;