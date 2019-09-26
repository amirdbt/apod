import React from "react"
import NasaItem from "./components/NasaItem"
import "./App.css"
import Logo from "./components/Logo"

const API = "0QyXo9xlxST9V6IfHYtrgEXhge3bMEaWLuwKHl9b"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nasa: []
    }
  }
  componentDidMount() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API}`)
      .then(response => response.json())
      .then(response =>
        this.setState({
          nasa: response
        })
      )
    console.log(this.state.nasa)
  }
  render() {
    return (
      <div className="App">
        <Logo />
        <NasaItem nasa={this.state.nasa} />
      </div>
    )
  }
}

export default App
