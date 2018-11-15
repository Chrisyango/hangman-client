import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setDisplay} from '../../actions/words';

import '../../styles/complete.css';

export class Complete extends React.Component {
  render() {
    let complete = (
      <span>
        <p>You guessed the word "{this.props.word}". <br /> You won, congrats!</p>
        <button onClick={event => {
        event.preventDefault();
        this.props.newGame();
        if (this.props.display !== '') {
          this.props.dispatch(setDisplay(''));
        }
        }}>Play again?</button>
      </span>
    );
    if (this.props.display === 'lose') {
      complete = (
        <span>
          <p>It's unfortunate, but you couldn't guess the word 
          "{this.props.word}". <br /> You lose.</p>
          <button onClick={event => {
          event.preventDefault();
          this.props.newGame();
          if (this.props.display !== '') {
            this.props.dispatch(setDisplay(''));
          }
          }}>Try again?</button>
        </span>
      );
    }
    return (
      <div className={(this.props.display === 'win' || this.props.display === 'lose') ? 'complete' : 'complete hide'}>
        {complete}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  display: state.words.display
});

export default withRouter(connect(mapStateToProps)(Complete));