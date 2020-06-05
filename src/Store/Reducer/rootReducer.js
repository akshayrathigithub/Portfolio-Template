import { combineReducers } from 'redux'
import SideBarReducer from './SideBarReducer';

const rootReducer = combineReducers({
    SideBar: SideBarReducer
})
export default rootReducer;