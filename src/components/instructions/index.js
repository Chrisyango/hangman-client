import React from 'react';

import '../../styles/instructions.css';

export class Instructions extends React.Component {
  
  render() {
    return (
      <div className={(this.props.display === 'showInstructions') ? "instructions showInstructions" : "instructions"}>
        <p>Guess letters to fill in the blanks before your little man gets hung out to dry.</p>
        <button onClick={event => {
          event.preventDefault();
          this.props.setDisplay('');
        }}>Okay, I'll try.</button>
      </div>
    )
  }
}

export default Instructions;