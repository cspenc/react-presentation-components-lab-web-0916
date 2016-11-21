const React = require('react')

class DumbComponent extends React.Component {
  constructor() {
    super()

    this.state = {
      mood: "happy"
    }

    this.changeSad = this.changeSad.bind(this)
  }

  changeSad() {
    this.setState({
      mood: "sad"
    })
  }

  render() {
    return(
      <div onClick={this.changeSad}>
        {this.state.mood}
      </div>
    )
  }
}

module.exports = DumbComponent
