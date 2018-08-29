import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchWords} from '../actions/words';

import Navigation from './navigation';
import LandingPage from './landingpage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInstructions : false,
      word: null
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchWords())
    .then(() => {
      this.getWord();
    })
  };

  // componentDidUpdate() {
  //   this.getWord();
  // };

  toggleInstructions() {
    this.setState({
      showInstructions: !this.state.showInstructions
    });
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
    return(
      <div className="app">
        <Navigation toggleInstructions={event => this.toggleInstructions()}/>
        <LandingPage word={this.state.word}/>
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
  words: state.words.words
});

export default withRouter(connect(mapStateToProps)(App));