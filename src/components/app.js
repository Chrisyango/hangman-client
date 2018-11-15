import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchWords} from '../actions/words';

import Navigation from './navigation';
import Instructions from './instructions';
import Difficulty from './difficulty';
import Game from './game';
import Complete from './complete';
import Overlay from './overlay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      word: null,
      difficulty: 'easy',
      difficultyChanged: false,
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchWords(this.state.difficulty))
    .then(() => {
      this.getWord();
    })
  };

  componentDidUpdate() {
    if (this.state.difficultyChanged) {
      this.props.dispatch(fetchWords(this.state.difficulty))
      .then(() => {
        this.getWord();
      });
      this.setState({
        difficultyChanged: false
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
  };

  setDifficulty(difficulty) {
    this.setState({
      difficulty: difficulty,
      difficultyChanged: true
    });
  };

  render() {
    return(
      <div className="app">
        <Navigation
          newGame={event => this.getWord()}
        />
        <Instructions />
        <Difficulty
          setDifficulty={difficulty => this.setDifficulty(difficulty)}
        />
        <Overlay 
          newGame={event => this.getWord()}
        />
        <Game 
          word={this.state.word}
        />
        <Complete
          word={this.state.word}
          newGame={event => this.getWord()}
        />
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
  words: state.words.words,
  display: state.words.display
});

export default withRouter(connect(mapStateToProps)(App));