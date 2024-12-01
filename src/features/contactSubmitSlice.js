export function contactSubmitReducer(state = usersArr, action) {
    if (action.type === "CONTACT_SUBMIT") {
        console.log(action.payload);
        localStorage.setItem('users', JSON.stringify(action.payload));
        localStorage.setItem('isRegistered', true);
        return {
            ...state,
            userInfo: action.payload,
            isRegistered: true, 
        }
        
    } else if (action.type === "LOAD_USERS") {
        return { ...state, users: action.payload.users, isRegistered: action.payload.isRegistered };

    } else if (action.type === "logout") {
        console.log(action.payload);
        return {
            ...state,
            userInfo: null,
            isRegistered: false
        };
    }

    return state
}

export const usersArr = {
    users: JSON.parse(localStorage.getItem('users')) || {},
    isRegistered: JSON.parse(localStorage.getItem('isRegistered'))
}

export function selectUserInfo(state) {
    return state.contactSubmit.users
}

export function selectIsRegistered(state) {
    return state.contactSubmit.isRegistered;
}