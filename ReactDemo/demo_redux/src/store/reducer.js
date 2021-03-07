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
    if(action.type === 'CHANGE_INPUT'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state
}