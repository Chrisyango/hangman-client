import React from 'react';

import '../../styles/complete.css';

export class Complete extends React.Component {
  render() {
    let complete = (
      <span>
        <p>You won, congrats!</p>
        <button onClick={event => {
        event.preventDefault();
        this.props.newGame();
        if (this.props.display !== '') {
          this.props.setDisplay('');
        }
        }}>Play again?</button>
      </span>
    );
    if (this.props.display === 'lose') {
      complete = (
        <span>
          <p>You lose.</p>
          <button onClick={event => {
          event.preventDefault();
          this.props.newGame();
          if (this.props.display !== '') {
            this.props.setDisplay('');
          }
          }}>Try again?</button>
        </span>
      );
    }
    return (
      <div className={(this.props.display !== '') ? 'complete' : 'hide'}>
        {complete}
      </div>
    )
  }
}

export default Complete;