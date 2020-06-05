export const SideBarAction = (Item) => {
    return (dispatch) => {
        // make call to data
        dispatch({ type:'SideBarCalled' , Item})
}}