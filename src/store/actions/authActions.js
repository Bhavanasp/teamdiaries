const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({
                type: "SIGNIN_SUCCESS"
            })
        }).catch((err) => {
            dispatch({
                type: "SIGNIN_ERROR",
                err: err
            })
        })
    }
}

const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({
                type: "SIGNOUT_SUCCESS"
            })
        }).catch((err) => {
            dispatch({
                type: "SIGNOUT_ERROR",
                err: err
            })
        })
    }
}

const signUp = (newUser) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp) => {
            return firestore.collection("users").doc(resp.user.uid).set({
                firstName: newUser.firstName[0].toUpperCase()+newUser.firstName.slice(1),
                lastName: newUser.lastName[0].toUpperCase()+newUser.lastName.slice(1),
                initials: newUser.firstName[0].toUpperCase() + newUser.lastName[0].toUpperCase()
            })
        }).then(() => {
            console.log(newUser);
            dispatch({ type: "SIGNUP_SUCCESS" });
        }).catch((err) => {
            dispatch({ type: "SIGNUP_ERROR", err: err });
        })
    }
}

export { signIn, signUp, signOut };