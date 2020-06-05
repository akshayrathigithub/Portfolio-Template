let initState = {}
const SideBarReducer = (State = initState, action) => {
switch(action.type){
    case 'SideBarCalled':{
        return Object.assign({}, State, {State: action.Item})
    }
    default:
    return State
}
}
export default SideBarReducer;