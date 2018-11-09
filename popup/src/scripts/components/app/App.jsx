import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props){
    super(props);
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  increaseCount() {
    this.props.dispatch({
      type:'INCREASE_COUNT'
    })
  }

  decreaseCount() {
    this.props.dispatch({
      type:'DECREASE_COUNT'
    })
  }

  render() {
    return (
      <div><button onClick={this.increaseCount}>+</button><button onClick={this.decreaseCount}>-</button></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  };
};

export default connect(mapStateToProps)(App);
