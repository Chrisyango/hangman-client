import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setDisplay} from '../../actions/words';

import '../../styles/overlay.css'; 

export class Overlay extends React.Component {
  render() {
    return (
      <div className={(this.props.display !== '') ? 'overlay' : ''} onClick={event => {
        event.preventDefault();
        this.props.dispatch(setDisplay(''));
        if (this.props.display === 'win' || this.props.display === 'lose') {
          this.props.newGame();
        }        
      }}></div>
    )
  }
}

const mapStateToProps = state => ({
  display: state.words.display
});

export default withRouter(connect(mapStateToProps)(Overlay));