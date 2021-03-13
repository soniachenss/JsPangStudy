import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        console.log(this.props);
        let tempId = this.props.match.params.id
        this.setState({
            id: tempId
        })
    }
    render() { 
        return ( 
            <div>222=>{this.state.id}</div>
         );
    }
}
 
export default List;