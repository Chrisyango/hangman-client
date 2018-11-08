import React from 'react';

export class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  componentWillReceiveProps(props) {
    if (props.lettersGuessed.includes(props.letter)) {
      this.setState({
        clicked: true
      });
    } else {
      this.setState({
        clicked: false
      })
    }
  }

  render() {
    return (
      <button
      disabled={(!this.state.clicked) ? false : true}
      className={(!this.state.clicked) ? "letter-button" : "letter-button clicked"}
      onClick={event => {
        event.preventDefault();
        this.props.handleSubmit(this.props.letter);
        this.setState({
          clicked: true
        });
      }}>{this.props.letter}</button>
    )
  }
}

export default Button;