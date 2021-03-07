import { CHANGE_INPUT, ADD_ITEMS, DELETE_ITEMS, GET_LIST_ITEM } from './actionTypes'
const defaultStore = {
    inputValue: '111',
    data: [
        '8.00起床',
    '9.00上班',
    '10.00上班',
    '11.00上班',
    '12.00上班',
    ]

}
export default (state = defaultStore,action)=>{
    if(action.type === CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }else if(action.type === ADD_ITEMS){
        let newState = JSON.parse(JSON.stringify(state))
        newState.data.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }else if(action.type === DELETE_ITEMS){
        let newState = JSON.parse(JSON.stringify(state))
        newState.data.splice(action.index,1)
        return newState
    }else if(action.type === GET_LIST_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.data = action.data.data.list
        return newState
    }
    return state
}