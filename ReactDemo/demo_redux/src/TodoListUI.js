import React, { Component } from 'react';

import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
    const { inputValue, changeInputValue, addItem, deleteItem, data } = props
    return (  
        <div style={{margin: '10px'}}>
            <div>
                <Input 
                    placeholder={inputValue} 
                    style={{width: '250px',marginRight: '10px'}}
                    onChange={changeInputValue}
                    value={inputValue}
                />
                <Button 
                    type='primary'
                    onClick={addItem}
                >新增</Button>
            </div>
            <div style={{margin: '10px',width: '300px'}}>
                <List 
                    bordered
                    dataSource={data}
                    renderItem={(item,index)=> <List.Item onClick={() => {
                        deleteItem(index)
                    }}>{item}</List.Item>}
                />
            </div>
        </div>
    ); 
}

export default TodoListUI;