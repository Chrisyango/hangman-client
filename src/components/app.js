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
      word: null,
      difficulty: 'easy',
      difficultyChanged: false
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

  setDisplay(display) {
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
  };

  setDifficulty(difficulty) {
    this.setState({
      difficulty: difficulty,
      difficultyChanged: true
    });
  };

  render() {
    console.log(this.props.words);
    return(
      <div className="app">
        <Navigation
          display={this.state.display}
          setDisplay={display => this.setDisplay(display)}
          newGame={event => this.getWord()}
        />
        <Instructions 
          display={this.state.display}
          setDisplay={display => this.setDisplay(display)}
        />
        <Difficulty
          display={this.state.display}
          setDisplay={display => this.setDisplay(display)}
          setDifficulty={difficulty => this.setDifficulty(difficulty)}
        />
        <Game word={this.state.word}/>
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
  words: state.words.words
});

export default withRouter(connect(mapStateToProps)(App));