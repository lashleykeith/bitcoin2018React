import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Home extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  
  render () {
    return (<section id='results'>
        <div className="container">
        <div className="col-md-12">
          <div className="ads"></div>
        </div>
          <div className="col-md-12">
            <h3>You $1200 dollar  investment is now</h3>
            <h1>$7,300</h1>
            <h4>You made 400% profit</h4>
            <a href="#" className="main-btn active">Create account to keep track of all your records</a>
          </div>
          <div className="col-md-12">
          <div className="ads"></div>
        </div>
        </div>
      </section>)
  }
}



