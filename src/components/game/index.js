import React from 'react';

import '../../styles/game.css';
import Button from './button.js';

export class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      spaces: [],
      lettersGuessed: [],
      word: null,
    }
  }

  componentDidMount() {
    // When the component is mounted, add your DOM listener to the window.
    window.addEventListener("keypress", this.keyPress);
  }

  componentWillUnmount() {
    // Make sure to remove the DOM listener when the component is unmounted.
    window.removeEventListener("keypress", this.keyPress);
  }

  // Use a class arrow function (ES7) for the handler. In ES6 you could bind() a handler in the constructor.
  keyPress = (event) => {
    const keyPressed = event.key;
    const letterNumber = keyPressed.charCodeAt(0);
    
    if (letterNumber >= 97 && letterNumber <= 122) {
      this.handleSubmit(keyPressed);
    }
  }

  componentDidUpdate() {
    if (this.state.word && this.state.spaces.length === 0) {
      this.createSpaces(this.state.lettersGuessed, []);
    }
  }

  componentWillReceiveProps(props) {
    if (props.word !== this.state.word) {
      this.setState({
        lettersGuessed: [],
        word: props.word,
        spaces: []
      });
    }
  }

  createSpaces(lettersGuessed, arr) {
    const word = this.state.word;

    if (word) {
      for (let i = 0; i < word.length; i++) {
        arr.push(<p className="spaces" key={i}></p>)
      }
    }

    if (lettersGuessed.length > 0) {
      lettersGuessed.forEach(letter => {
        for (let i = 0; i < word.length; i++) {
          if (word[i] === letter) {
            arr[i] = <p key={i} className="spaces">{letter}</p>
          }
        }
      })
    }

    this.setState({
      spaces: arr
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
    return (
      <div className="game">
        <h1>Hangman</h1>
        {this.state.spaces}
        {this.buttonGenerator()}
      </div>
    )
  }
}

export default Game;