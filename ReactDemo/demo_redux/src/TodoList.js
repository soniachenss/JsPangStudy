import React, { Component } from 'react';
import store from './store'
import TodoListUI from './TodoListUI'
import { getMyListAction,getTodoList,changeInputAction, addItemAction,deleteItemAction, getListAction } from './store/actionCreators'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }
    changeInputValue(e){
        console.log(e.target.value);
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    addItem(){
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index){
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    storeChange(){
        this.setState(store.getState())
    }
    componentDidMount(){

        //redux-thunk
        // const action = getTodoList()
        // store.dispatch(action)
        //redux-saga
        const action = getMyListAction()
        store.dispatch(action)

        

    }
    render() { 
        const { inputValue, data } = this.state
        return ( 
            <TodoListUI 
                inputValue={inputValue}
                changeInputValue={this.changeInputValue}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
                data={data}
            />
         );
    }
}
 
export default TodoList;