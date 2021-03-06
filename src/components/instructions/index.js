import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setDisplay} from '../../actions/words';

import '../../styles/instructions.css';

export class Instructions extends React.Component {
  
  render() {
    return (
      <div className={(this.props.display === 'showInstructions') ? "instructions showInstructions" : "instructions"}>
        <p>Guess letters to fill in the blanks before your little man gets hung out to dry.</p>
        <button onClick={event => {
          event.preventDefault();
          this.props.dispatch(setDisplay(''));
        }}>Okay, I'll try.</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  display: state.words.display
});

export default withRouter(connect(mapStateToProps)(Instructions));