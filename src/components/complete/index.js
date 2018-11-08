import React from 'react';

import '../../styles/complete.css';

export class Complete extends React.Component {
  render() {
    console.log(this.props.display);
    return (
      <div className={(this.props.display === 'win') ? 'complete' : 'hide'}>
        <p>You won, congrats!</p>
        <button onClick={event => {
          event.preventDefault();
          this.props.newGame();
          if (this.props.display !== '') {
            this.props.setDisplay('');
          }
          }}>New Game?</button>
      </div>
    )
  }
}

export default Complete;