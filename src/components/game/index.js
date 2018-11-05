import React from 'react';

import '../../styles/game.css';

export class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      spaces: [],
      lettersGuessed: [],
      word: null
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

  render() {
    return (
      <div className="game">
        <h1>Hangman</h1>
        {this.state.spaces}
        <form onSubmit={event => {
          event.preventDefault();
          this.handleSubmit(this.state.inputVal)
        }}>
          <input onChange={event => {
            this.setState({
              inputVal: event.target.value
            })
          }}
          type="text"
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default Game;