const initState = {
    project: []
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_PROJECT": return state;
        case "DELETE_PROJECT": return state;
        case "ADD_PROJECT_ERROR": console.log("add project error: " + action.err); return state;
        default: return state;
    }
}

export default projectReducer;