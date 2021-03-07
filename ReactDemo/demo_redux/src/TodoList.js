import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    changeInputValue(e){
        console.log(e.target.value);
        const action = {
            type: 'CHANGE_INPUT',
            value: e.target.value
        }
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    render() { 
        const { inputValue, data } = this.state
        return ( 
            <div style={{margin: '10px'}}>
                <div>
                    <Input 
                        placeholder={inputValue} 
                        style={{width: '250px',marginRight: '10px'}}
                        onChange={this.changeInputValue}
                        value={inputValue}
                    />
                    <Button 
                        type='primary'
                    >按钮</Button>
                </div>
                <div style={{margin: '10px',width: '300px'}}>
                    <List 
                        bordered
                        dataSource={data}
                        renderItem={item=> <List.Item>{item}</List.Item>}
                    />
                </div>
            </div>
         );
    }
}
 
export default TodoList;