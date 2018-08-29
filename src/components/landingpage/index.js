import React from 'react';

import '../../styles/landingpage.css';

export class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputVal: '',
      spaces: [],
      lettersGuessed: []
    }
  }

  componentDidUpdate() {
    if (this.props.word && this.state.spaces.length === 0) {
      this.createSpaces(this.state.lettersGuessed, []);
    }
  }

  createSpaces(lettersGuessed, arr) {
    const word = this.props.word;

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
      <div className="landingpage">
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

export default LandingPage;