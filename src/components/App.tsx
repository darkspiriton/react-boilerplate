import * as React from 'react'
// import PropTypes from 'prop-types'
// import './App.css'
// import './App.scss'
import './App.styl'

export interface AppProps { compiler: string; framework: string; name: string }

export class App extends React.Component <AppProps, {}> {
  render () {
    return (
      <div>
        <h1 className="title">My React App {this.props.name}</h1>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" alt="Logo React"/>
      </div>
    )
  }
}

// App.propTypes = {
//   name: PropTypes.string
// }
// export default App
