import React, { Component } from 'react'

export class Example3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidMount(){
        console.log(`componentDidMount => you click ${this.state.count}`);
    }
    componentDidUpdate(){
        console.log(`componentDidUpdate => you click ${this.state.count}`);
    }
    render() {
        return (
            <div>
            <p>you click {this.state.count} times</p>
            <button onClick={this.addCount.bind(this)}>onClick</button>
        </div>
        )
    }
    addCount(){
        this.setState({
            count: this.state.count+1
        })
    }
}

export default Example3
