const addProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

        const firestore = getFirestore();
        var timestamp = new Date();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        firestore.collection("projects").add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            createdAt: timestamp.toLocaleString('en-GB', { timeZone: 'UTC' }),
            authorId: authorId
        }).then(() => {
            dispatch(
                {
                    type: "ADD_PROJECT",
                    project: project
                }
            )
        }).catch((err) => {
            dispatch({ type: "ADD_PROJECT_ERROR", err });
        })
    }
}

const deleteProject = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection("projects").doc(id).delete().then(() => {
            dispatch({
                type: "DELETE_PROJECT",
                id: id
            })
        }).catch((err) => {
            dispatch({
                type: "DELETE_PROJECT_ERROR",
                err: err
            })
        });
    }
}

export { addProject, deleteProject };