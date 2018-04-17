import React, {Component} from 'react';
// import './App.css'
// import './App.scss'
import './App.styl'

class App extends Component {
  render () {
    return (
      <div>
        <h1 className="title">My React App {this.props.name}</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="Logo React"/>
      </div>
    )
  }
}

export default App;
