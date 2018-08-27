import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom';
import {fetchWords} from '../actions/words';

import Navigation from './navigation';
import LandingPage from './landingpage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showInstructions : false
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchWords());
  };

  toggleInstructions() {
    this.setState({
      showInstructions: !this.state.showInstructions
    });
  };

  render() {
    console.log(this.props.words);
    return(
      <div className="app">
        <Navigation toggleInstructions={event => this.toggleInstructions()}/>
        <Route exact path="/" component={LandingPage} />
      </div>
    ) 
  }
}

const mapStateToProps = state => ({
  words: state.words.words
});

export default withRouter(connect(mapStateToProps)(App));