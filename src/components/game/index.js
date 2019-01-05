import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setDisplay} from '../../actions/words';

import Button from './button.js';
import Figure from './figure.js';

import '../../styles/game.css';


export class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spaces: [],
      lettersGuessed: [],
      word: null,
      wrongGuesses: 0
    }
  }

  // Use a class arrow function (ES7) for the handler. In ES6 you could bind() a handler in the constructor.
  keyPress = (event) => {
    const keyPressed = event.key;
    const letterNumber = keyPressed.charCodeAt(0);
    
    if (letterNumber >= 97 && letterNumber <= 122) {
      this.handleSubmit(keyPressed);
    }
  }

  runSetDisplay(display) {
    this.props.dispatch(setDisplay(display));
    window.removeEventListener("keypress", this.keyPress);
  }

  componentDidUpdate() {
    if (this.state.word && this.state.spaces.length === 0) {
      this.createSpaces(this.state.lettersGuessed, []);
      window.addEventListener("keypress", this.keyPress);
    }

    if (this.state.spaces.length > 0) {
      let wordGuessed = '';
      for (let i = 0; i < this.state.spaces.length; i++) {
        wordGuessed = wordGuessed + this.state.spaces[i].props.children;
      }
      if (wordGuessed === this.state.word) {
        // Hacky way to get the component to stop updating
        this.setState({
          word: null
        });
        this.runSetDisplay('win');
      } else if (this.state.wrongGuesses === 6) {
        this.setState({
          wrongGuesses: 7
        });
        this.runSetDisplay('lose');
      }
    }
  }

  componentWillReceiveProps(props) {
    if (props.word !== this.state.word) {
      this.setState({
        spaces: [],
        lettersGuessed: [],
        word: props.word,
        wrongGuesses: 0
      });
    }
  }

  createSpaces(lettersGuessed, arr) {
    const word = this.state.word;
    let wrongGuesses = 0;

    if (word) {
      for (let i = 0; i < word.length; i++) {
        arr.push(<p className="spaces" key={i}>&nbsp;</p>)
      }
    }

    if (lettersGuessed.length > 0) {
      lettersGuessed.forEach(letter => {
        for (let i = 0; i < word.length; i++) {
          if (word[i] === letter) {
            arr[i] = <p key={i} className="spaces">{letter}</p>
          }
        }
        if (!word.includes(letter)) {
          wrongGuesses++;
        }
      })
    }

    this.setState({
      spaces: arr,
      wrongGuesses: wrongGuesses
    });
  }

  handleSubmit(value) {
    let lettersGuessed = this.state.lettersGuessed;

    if (!lettersGuessed.includes(value)) {
      lettersGuessed.push(value);
      this.setState({
        lettersGuessed: lettersGuessed
      })
    }

    this.createSpaces(lettersGuessed, []);
  }

  buttonGenerator() {
    let buttons = [];
    for (let i = 97; i <= 122; i++) {
      buttons.push(
        <Button
          key={i}
          letter={String.fromCharCode(i)}
          lettersGuessed={this.state.lettersGuessed}
          handleSubmit={letter => this.handleSubmit(letter)}
        />
      );
    }

    return buttons;
  }

  render() {
    let loading;
    loading = (this.props.loading === true) ? <h1>Finding Words</h1> : <h1>Hangman</h1>
    return (
      <div className="game">
        {loading}
        <Figure wrongGuesses={this.state.wrongGuesses}/>
        {this.state.spaces}
        <div className="keyboard">
          {this.buttonGenerator()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  display: state.words.display,
  loading: state.words.loading
});

export default withRouter(connect(mapStateToProps)(Game));