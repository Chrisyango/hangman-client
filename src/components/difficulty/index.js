import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setDisplay} from '../../actions/words';

import '../../styles/difficulty.css';

export class Difficulty extends React.Component {
  
  render() {
    return (
      <div className={(this.props.display === 'showDifficulty') ? "difficulty showDifficulty" : "difficulty"}>
        <ul className="setDifficulty">
          <li><button onClick={event => {
            event.preventDefault();
            this.props.setDifficulty('easy');
            this.props.dispatch(setDisplay(''));
          }}>Easy</button></li>
          <li><button onClick={event => {
            event.preventDefault();
            this.props.setDifficulty('medium');
            this.props.dispatch(setDisplay(''));
          }}>Medium</button></li>
          <li><button onClick={event => {
            event.preventDefault();
            this.props.setDifficulty('hard');
            this.props.dispatch(setDisplay(''));
          }}>Hard</button></li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  display: state.words.display
});

export default withRouter(connect(mapStateToProps)(Difficulty));