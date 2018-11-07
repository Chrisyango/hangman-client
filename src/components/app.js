import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchWords} from '../actions/words';

import Navigation from './navigation';
import Instructions from './instructions';
import Difficulty from './difficulty';
import Game from './game';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display : '',
      word: null
    }
  }
  componentDidMount() {
    this.props.dispatch(fetchWords('hard'))
    .then(() => {
      this.getWord();
    })
  };

  toggleNavigation(display) {
    if (this.state.display === '') {
      this.setState({
        display: display
      });
    } else {
      this.setState({
        display: ''
      });
    }
  };

  getWord() {
    const positionInWordList = Math.floor(Math.random() * Math.max(this.props.words.length));
    
    if (this.props.words.length > 0) {
      this.setState({
        word: this.props.words[positionInWordList]
      });
    }
  }

  render() {
    console.log(this.state.word);
    console.log(this.props.words);
    return(
      <div className="app">
        <Navigation
          toggleNavigation={event => this.toggleNavigation(event)}
          newGame={event => this.getWord()}
        />
        <Instructions display={this.state.display}/>
        <Difficulty display={this.state.display}/>
        <Game word={this.state.word}/>
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
  words: state.words.words
});

export default withRouter(connect(mapStateToProps)(App));