import React, { Component } from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import Boss from './Boss'
import axios from 'axios'
import './style.css'

export default class Xiaojiejie extends Component {
    constructor(props){
        super(props)
        this.state= {
            inputValue: 'sudieer',
            list: ['111','222',],
            htmlItem: '<h2>111</h2>',
        }
        this.inputChange = this.inputChange.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }
    componentDidMount(){
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
        .then(res => {
            console.log(res,111);
        }).catch(error => {
            console.log(error,222);
        })
    }
   
    inputChange(e){
        this.setState({
            // inputValue: e.target.value  
            inputValue: this.input.value 
        })
    }
    addItem(){
        this.setState({
            list: [...this.state.list,this.state.inputValue]
        },()=>{
            console.log(this.ul.querySelectorAll('li').length)
        })
        // console.log(this.ul.querySelectorAll('li').length)
    }
    deleteItem(index){
        console.log(index);
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list
        })
    }
    render() {
        const { inputValue, list, htmlItem } = this.state
        return (
            <div>
                <div>
                    <input 
                        value={inputValue}
                        onChange={this.inputChange}
                        className={'input'}
                        ref={input => this.input = input}
                    /> 
                    <button
                        onClick={this.addItem}
                    >add</button>
                    <ul ref={ul => this.ul = ul}>
                        {/*
                            <li
                                dangerouslySetInnerHTML={{__html:htmlItem}}
                            >
                            </li>
                        */}
                        
                        {
                            list.map((item,index) => {
                                return (
                                    <XiaojiejieItem 
                                        content={item} 
                                        index={index} 
                                        deleteItem={this.deleteItem}
                                    />
                                    
                                )
                            })
                        }
                    </ul>
                </div>
                <Boss />
            </div>
        )
    }
}
