import React, {Component} from 'react';
// import './App.css'
// import './App.scss'
import './App.styl'

class App extends Component {
  render () {
    return (
      <div>
        <h1 className="title">My React App! {this.props.name}</h1>
      </div>
    )
  }
}

export default App;
