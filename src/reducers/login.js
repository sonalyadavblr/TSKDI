

const initialState = {
    loginStatus: false,
    username: "",
};

function loginReducer(state = initialState, action)
{
    if (action.type == "LOGGED_IN")
    {
        let newState = { ...state };
        newState.loginStatus = action.loginStatus;
        newState.username = action.username;
        return newState;
    } else if (action.type == "LOGGED_OUT")
    {
        let newState = { ...state };
        newState.loginStatus = false;
        newState.username = "";
        return newState;
    }
    return state;
}

export default loginReducer;