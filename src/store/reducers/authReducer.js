const initState = {

}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SIGNIN_SUCCESS":
            return {
                ...state,
                authError: null
            }
        case "SIGNIN_ERROR":
            return {
                ...state,
                authError: "" + action.err
            }
        case "SIGNOUT_SUCCESS":
            return {
                ...state,
                authError: null
            }
        case "SIGNOUT_ERROR":
            return {
                ...state,
                authError: "" + action.err
            }
        case "SIGNUP_SUCCESS":
            return {
                ...state,
                authError: null
            }
        case "SIGNUP_ERROR":
            return {
                ...state,
                authError: "" + action.err
            }
        default: return state;
    }
}

export default authReducer;