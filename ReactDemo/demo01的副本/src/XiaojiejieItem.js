import React, { Component } from 'react'
import  PropTypes from "prop-types";


class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
       
    }
    handleClick(){
        this.props.deleteItem(this.props.index)
    }
    render() {
        const { content, index, } = this.props
        return (
            <li onClick={this.handleClick} key={index+content}>{content}</li>
        )
    }
}
XiaojiejieItem.propTypes={
    content: PropTypes.string.isRequired,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}
XiaojiejieItem.defaultProps={
    content: '111'
}
export default XiaojiejieItem
