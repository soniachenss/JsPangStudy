
import { CHANGE_INPUT, ADD_ITEMS, DELETE_ITEMS, GET_LIST_ITEM, GET_MY_LIST} from './actionTypes'

import axios from 'axios'

export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value: value
})

export const addItemAction = () => ({
    type: ADD_ITEMS,
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEMS,
    index
})

export const getListAction = (data) => ({
    type: GET_LIST_ITEM,
    data
})
// redux-thunk 
export const getTodoList = () => {
    return (dispatch) => {
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(res => {
            console.log(res);
            const data = res.data
            const action = getListAction(data)
            dispatch(action)
        }).catch((error) => {
            console.log(error);
        })
    }
}
// redux-thunk 
export const getMyListAction = (data) => ({
    type: GET_MY_LIST,
})