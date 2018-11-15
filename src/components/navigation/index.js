import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setDisplay} from '../../actions/words';

import '../../styles/navigation.css';

export class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <button onClick={event => {
          event.preventDefault();
          (this.props.display !== 'showInstructions') ? this.props.dispatch(setDisplay('showInstructions')) : this.props.dispatch(setDisplay(''));
        }}>Show Instructions</button>
        <div className="game-settings">
          <button onClick={event => {
          event.preventDefault();
          (this.props.display !== 'showDifficulty') ? this.props.dispatch(setDisplay('showDifficulty')) : this.props.dispatch(setDisplay(''));
          }}>Set Difficulty</button>
          <button onClick={event => {
          event.preventDefault();
          this.props.newGame();
          if (this.props.display !== '') {
            this.props.dispatch(setDisplay(''));
          }
          }}>New Game</button>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  display: state.words.display
});

export default withRouter(connect(mapStateToProps)(Navigation));