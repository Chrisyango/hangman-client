import React from 'react';

import '../../styles/difficulty.css';

export class Difficulty extends React.Component {
  
  render() {
    return (
      <div className={(this.props.display === 'showDifficulty') ? "difficulty showDifficulty" : "difficulty"}>
        <ul className="setDifficulty">
          <li><button onClick={event => {
            event.preventDefault();
            
          }}>Easy</button></li>
          <li><button>Medium</button></li>
          <li><button>Hard</button></li>
        </ul>
      </div>
    )
  }
}

export default Difficulty;