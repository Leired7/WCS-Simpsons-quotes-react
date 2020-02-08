import React, { Component } from "react"

class Counter extends Component{

    state = {
        count: 0
      }

    handleIncrement = () => {
        const count = this.state.count
        this.setState({count: count + 1});
    }

    handleDecrement = () => {
        const count = this.state.count
        this.setState({count: count - 1})
    }

    render(){
        return(
        <div className="Counter">
            <button className="add" onClick={this.handleDecrement}>Restar</button>
            <h1>{this.state.count}</h1>
            <button className="subtract" onClick={this.handleIncrement}>Sumar</button>
        </div>
        )

    }
}

export default Counter